<script setup>
import './RadioQuestion.scss'
import { ref, nextTick, onMounted } from 'vue'
import RadioQuestionGrid from '../RadioQuestionGrid/RadioQuestionGrid.vue'
import { useUserProgressStore } from '@/stores/useUserProgressStore'

const userProgressStore = useUserProgressStore()

const feedbackShow = ref(false)
const currentAnswer = ref(null)
const disabled = ref(false)

const props = defineProps({
	radioQuestionIntro: { type: Object },
	layoutColumns: { type: Array, default: () => [6, 6] },
	// disabled: { type: Boolean, default: false },
})

const { questionId, answersGrid, answers } = props.radioQuestionIntro

const emit = defineEmits(['complete'])

const getSavedAnswer = () => {
	return userProgressStore.quizAnswers[questionId];
}

const setCurrentAnswer = (newAnswer) => {
	currentAnswer.value = newAnswer
	userProgressStore.saveQuizAnswer(questionId, currentAnswer.value)
}

const acceptAnswer = () => {
	feedbackShow.value = true
	disabled.value = true

	nextTick(() => {
		emit('complete')
	})
}

onMounted(() => {
	if (userProgressStore.quizAnswers[questionId]) {
		disabled.value = true
	}
})

</script>

<template>
	<div class="">
		<div class="row">
			<div :class="`col-lg-${props.layoutColumns[0]} col-xs-12 mb-xs-rem-2-0`">
				<slot name="question-text"></slot>
			</div>
			<div :class="`col-lg-${props.layoutColumns[1]} col-xs-12`">
				<radio-question-grid :answers="answers"
									 :grid-style="answersGrid.gridStyle"
									 :grid-style-xs="answersGrid.gridStyleXs"
									 :disabled="feedbackShow || disabled"
									 :previous-answer="getSavedAnswer()"
									 @select-answer="setCurrentAnswer($event)">
				</radio-question-grid>
				<button class="btn w-100 mt-rem-2-50 mt-xs-rem-2-0"
						:disabled="!currentAnswer || feedbackShow || disabled"
						@click="acceptAnswer()">
					Ответить
				</button>
			</div>
		</div>
		<div class="row mt-rem-3-75 mt-xs-rem-2-0"
			 v-if="feedbackShow"
			 ref="feedback">
			<div class="col-lg-12 col-xs-12">
				<slot :name="`feedback-${currentAnswer.feedbackId}`"></slot>
			</div>
		</div>
	</div>

</template>