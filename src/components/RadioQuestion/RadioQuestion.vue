<script setup>
import { ref, nextTick, onMounted } from 'vue'
import RadioQuestionGrid from '../RadioQuestionGrid/RadioQuestionGrid.vue'
import { useUserProgressStore } from '@/stores/useUserProgressStore'

const userProgressStore = useUserProgressStore()

const feedbackShow = ref(false)
const currentAnswer = ref(null)
const disabled = ref(false)
const btnReset = ref(false)
const btnAnswer = ref(true)

const props = defineProps({
	radioQuestionIntro: { type: Object },
	layoutColumns: { type: Array, default: () => [6, 6] },
	// disabled: { type: Boolean, default: false },
})

const { questionId, answersGrid, answers } = props.radioQuestionIntro

const emit = defineEmits(['complete'])

const getSavedAnswer = () => {
	return userProgressStore.quizAnswers[questionId]
}

const setCurrentAnswer = (newAnswer) => {
	currentAnswer.value = newAnswer
}

const acceptAnswer = () => {
	feedbackShow.value = true
	disabled.value = true

	userProgressStore.saveQuizAnswer(questionId, currentAnswer.value)

	nextTick(() => {
		emit('complete')
	})
}

const resetAnswer = () => {
	btnAnswer.value = true
	disabled.value = false
	btnReset.value = false
	setCurrentAnswer(null)
	userProgressStore.quizAnswers[questionId] = null;
	localStorage.setItem('quizAnswers', JSON.stringify(userProgressStore.quizAnswers));
}

onMounted(() => {
	if (userProgressStore.quizAnswers[questionId]) {
		disabled.value = true
		btnAnswer.value = false
		btnReset.value = true
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
						v-if="btnAnswer"
						:disabled="!currentAnswer || feedbackShow || disabled"
						@click="acceptAnswer">
					Ответить
				</button>
				<button class="btn w-100 mt-rem-2-50 mt-xs-rem-2-0 ml-0 ml-xs-0"
						v-if="btnReset"
						@click="resetAnswer()">
					Ответить еще раз
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