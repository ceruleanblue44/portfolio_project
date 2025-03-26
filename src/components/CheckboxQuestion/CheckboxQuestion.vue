<script setup>

// import { gsap } from "gsap"
import { onMounted, ref, computed, nextTick } from 'vue'
import CheckboxQuestionGrid from '../CheckboxQuestionGrid/CheckboxQuestionGrid.vue'
import { useUserProgressStore } from '@/stores/useUserProgressStore'

const userProgressStore = useUserProgressStore()

const props = defineProps({
	checkboxQuestionData: { type: Object },
	// checkRule: { type: Object },
	// answersGrid: { type: Object },
	// answerBtn: Boolean,
	// isHorizontal: { type: Boolean, default: false },
	// disableBtn: Boolean,
})

const { questionId, checkRule, answersGrid, answers } = props.checkboxQuestionData

const emit = defineEmits(['complete'])

const feedbackShow = ref(false)
const currentAnswer = ref([])
const currentFeedback = ref(null)
const disabled = ref(false)
const btnReset = ref(false)
const btnAnswer = ref(true)

// const feedback = useTemplateRef('feedback')

const selectedAnswersCount = computed(() => {
	// console.log(currentAnswer.value)
	return currentAnswer.value.filter((answer) => answer === true).length
})

const previousAnswer = computed(() => getSavedAnswer() || [])

const getSavedAnswer = () => {
	return userProgressStore.quizAnswers[questionId]
}

const setCurrentAnswer = (newAnswer) => {
	currentAnswer.value = newAnswer
}

const acceptAnswer = () => {
	let isCorrect

	if (checkRule.type === 'count') {
		isCorrect = checkRule.check(selectedAnswersCount.value)
	}

	currentFeedback.value = isCorrect ? 'feedback-0' : 'feedback-1'
	feedbackShow.value = true
	userProgressStore.saveQuizAnswer(questionId, currentAnswer.value)

	nextTick(() => {
		emit('complete', isCorrect)
	})
}

const resetAnswer = () => {
	btnAnswer.value = true
	disabled.value = false
	btnReset.value = false
	setCurrentAnswer([])
	userProgressStore.quizAnswers[questionId] = null
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
			<div class="col-lg-12 col-xs-12 mb-rem-2-50 mb-xs-rem-2-0">
				<slot name="question-text"></slot>
			</div>
			<div class="col-lg-12 col-xs-12">
				<checkbox-question-grid :answers="answers"
										:grid-style="answersGrid.gridStyle"
										:disabled="feedbackShow || disabled"
										:previous-answer="previousAnswer"
										@select-answer="setCurrentAnswer($event)">
				</checkbox-question-grid>

				<button class="btn w-100 mt-rem-2-50 mt-xs-rem-2-0"
						v-if="btnAnswer"
						:disabled="selectedAnswersCount === 0 || feedbackShow"
						@click="acceptAnswer()">
					Ответить
				</button>
				<button class="btn w-100 mt-rem-2-50 mt-xs-rem-2-0"
						v-if="btnReset"
						@click="resetAnswer()">
					Ответить еще раз
				</button>
			</div>
		</div>
		<div class="row mt-rem-3-75 mt-xs-rem-2-0"
			 v-if="feedbackShow && currentFeedback"
			 ref="feedback">
			<div class="col-lg-12 col-xs-12">
				<slot :name="currentFeedback"></slot>
			</div>
		</div>
	</div>

</template>