<script setup>
import { onMounted, ref, computed, nextTick } from 'vue'
import RadioQuestionGrid from '../RadioQuestionGrid/RadioQuestionGrid.vue'
import './DoubleQuestion.scss'
import { useUserProgressStore } from '@/stores/useUserProgressStore'
import Star from '@/assets/svg/star-lg.svg'

const userProgressStore = useUserProgressStore()

const answersHistory = ref([])

const currentQuestion = ref(0)
const currentAnswers = ref([])

const questionFeedbackShow = ref(false)
const feedbackShow = ref(false)

const btnReset = ref(false)

const props = defineProps({
	questionsData: { type: Object },
})

const { questionId, questions } = props.questionsData

const emit = defineEmits(['complete'])

// const answersPicked = computed(() => {
// 	return currentAnswers.value.filter((elem) => elem !== null).length > 0;
// })

const allAnswersPicked = computed(() => {
	return currentAnswers.value.filter((elem) => elem !== null).length === currentAnswers.value.length;
})

const getMarkerClassName = (markerIndex) => {
	return {
		'double-question__answer-history__marker_inactive': markerIndex > currentQuestion.value,
		'double-question__answer-history__marker_current': markerIndex === currentQuestion.value && answersHistory.value[markerIndex] === null,
		'double-question__answer-history__marker_correct': answersHistory.value[markerIndex] === true,
		'double-question__answer-history__marker_incorrect': answersHistory.value[markerIndex] === false,
	}
}

const getSavedAnswerHistory = () => {

}

const initQuestion = () => {
	currentAnswers.value = [];
	btnReset.value = false
	questions[currentQuestion.value].subQuestions.forEach(() => {
		currentAnswers.value.push(null);
	});
}


const setCurrentAnswers = (subQuestion, newAnswer) => {
	// console.log(newAnswer);
	currentAnswers.value.splice(subQuestion, 1, newAnswer);
	// console.log(currentAnswers.value);
}

const getSavedAnswer = (index) => {
	return userProgressStore.quizAnswers[questionId].currentAnswers[index]
}

const acceptAnswer = () => {

	questionFeedbackShow.value = true;

	const isCorrect = currentAnswers.value.reduce((prev, cur) => prev && cur.correct, true);
	// console.log(currentQuestion.value, isCorrect);
	answersHistory.value.splice(currentQuestion.value, 1, isCorrect);
	// console.log(answersHistory.value);

}

const nextQuestion = () => {
	if (currentQuestion.value < questions.length - 1) {
		currentQuestion.value++;
		questionFeedbackShow.value = false;
		initQuestion();
	} else {
		feedbackShow.value = true;
		btnReset.value = true
		userProgressStore.saveQuizAnswer(questionId, { answersHistory, currentAnswers })
		nextTick(() => {
			emit('complete');

		});
	}
}


const resetAnswers = () => {
	answersHistory.value.fill(null);

	currentQuestion.value = 0;
	currentAnswers.value = [];

	questionFeedbackShow.value = false;
	feedbackShow.value = false;
	userProgressStore.quizAnswers[questionId].currentAnswers = []
	initQuestion();
}


onMounted(() => {
	questions.forEach((question, index) => {
		answersHistory.value.push(getSavedAnswerHistory[index] ?? null);
	});

	currentQuestion.value = answersHistory.value.indexOf(null);

	if (currentQuestion.value === -1) {
		currentQuestion.value = answersHistory.value.length - 1;
		feedbackShow.value = true;
		questionFeedbackShow.value = true;
		nextTick(() => {
			emit('complete');
		});
	}

	initQuestion();

	if (userProgressStore.quizAnswers[questionId]) {
		console.log(userProgressStore.quizAnswers[questionId].answersHistory);
		answersHistory.value = userProgressStore.quizAnswers[questionId].answersHistory
		currentQuestion.value = questions.length - 1
		questionFeedbackShow.value = true
		btnReset.value = true
		// currentAnswers.value = userProgressStore.quizAnswers[questionId].currentAnswers
		// disabled.value = true
		// btnAnswer.value = false
		// btnReset.value = true
	}

})
</script>
<template>
	<div class="container">
		<div class="container_with-button">
			<div class="container container_with-bg mb-rem-1-50 mb-xs-rem-1-50">
				<div class="row mb-rem-3-0 mb-xs-rem-3-0">
					<div class="col-lg-8 col-xs-12 mb-xs-rem-1-50">
						<div class="double-question__answer-history mb-rem-1-50 mb-xs-rem-1-50">
							<Star v-for="(answer, index) in answersHistory"
								  :key="`markers-${index}`"
								  :class="['double-question__answer-history__marker', getMarkerClassName(index)]" />
						</div>
						<h3 class="double-question__title">
							{{ questions[currentQuestion].title }}
						</h3>
					</div>
					<div class="col-lg-4 col-xs-12">
						<div class="hint text-center">
							<h6>{{ questions[currentQuestion].task }}</h6>
						</div>
					</div>
				</div>
				<div class="row">
					<div v-for="(subQuestion, index) in questions[currentQuestion].subQuestions"
						 :key="`questions-${currentQuestion}-${index}`"
						 :class="['col-lg-6 col-xs-12 mb-rem-1-50 mb-xs-rem-1-0', `order-xs-${index}`]">
						<div class="card card_white card_small h-100 d-flex jc-center ai-center">
							<p class="text text-s text-semibold text-center">
								{{ subQuestion.text }}
							</p>
						</div>
					</div>
					<div v-for="(subQuestion, index) in questions[currentQuestion].subQuestions"
						 :key="`answers-${currentQuestion}-${index}`"
						 :class="['col-lg-6 col-xs-12 mb-xs-rem-1-50', `order-xs-${index}`]">
						<RadioQuestionGrid :answers="subQuestion.answers"
										   :grid-style="{}"
										   answer-class="double-question__answer"
										   answer-correct-class="double-question__answer_correct"
										   answer-incorrect-class="double-question__answer_incorrect"
										   :previous-answer="getSavedAnswer(index)"
										   :disabled="questionFeedbackShow"
										   @select-answer="setCurrentAnswers(index, $event)" />
					</div>
				</div>
			</div>

			<div class="btn-container btn-container_center mb-rem-4-0 mb-xs-rem-1-50">
				<!-- <button v-if="!feedbackShow && !questionFeedbackShow"
						class="btn btn_back"
						type="button"
						:disabled="!answersPicked || questionFeedbackShow"
						@click="resetQuestion">
					<span class="btn__text">Сбросить</span>
				</button> -->
				<button v-if="btnReset"
						class="btn btn_back w-xs-100 mb-xs-rem-1-50"
						type="button"
						@click="resetAnswers">
					<span class="btn__text">Попробовать еще раз</span>
				</button>

				<button v-if="!questionFeedbackShow"
						type="button"
						class="btn btn_next"
						:disabled="!allAnswersPicked"
						@click="acceptAnswer">
					<span class="btn__text">Ответить</span>
				</button>
				<button v-else
						type="button"
						class="btn btn_next ml-xs-0"
						:disabled="feedbackShow || btnReset"
						@click="nextQuestion">
					<span class="btn__text">Продолжить</span>
				</button>
			</div>
		</div>
		<div class="row mt-rem-3-75 mt-xs-rem-1-50"
			 v-if="feedbackShow"
			 ref="feedback">
			<div class="col-lg-12 col-xs-12">
				<slot :name="`feedback-${0}`"></slot>
			</div>
		</div>
	</div>

</template>