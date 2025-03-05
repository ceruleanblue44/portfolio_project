<script setup>
import { onMounted, ref, computed, nextTick } from 'vue'
import RadioQuestionGrid from '../RadioQuestionGrid/RadioQuestionGrid.vue'
import './DoubleQuestion.scss'
import Star from '@/assets/svg/star-lg.svg'

const answersHistory = ref([])

const currentQuestion = ref(0)
const currentAnswers = ref([])

const questionFeedbackShow = ref(false)
const feedbackShow = ref(false)


const props = defineProps({
	questionsData: { type: Array },
})

const emit = defineEmits(['complete'])

const answersPicked = computed(() => {
	return currentAnswers.value.filter((elem) => elem !== null).length > 0;
})

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
	// return CLV.oGlobal[`practice-simple-question-${getFramePosition().current}-${$root.$el.id}-answer-history`];
}

const initQuestion = () => {
	currentAnswers.value = [];
	props.questionsData[currentQuestion.value].subQuestions.forEach(() => {
		currentAnswers.value.push(null);
	});
}


const setCurrentAnswers = (subQuestion, newAnswer) => {
	// console.log(newAnswer);
	currentAnswers.value.splice(subQuestion, 1, newAnswer);
	// console.log(currentAnswers.value);
}



// const resetQuestion = () => {
// 	const savedSubQuestions = props.questionsData[currentQuestion.value].subQuestions;
// 	props.questionsData[currentQuestion.value].subQuestions = [];
// 	nextTick(() => {
// 		props.questionsData[currentQuestion.value].subQuestions = savedSubQuestions;
// 	});
// 	currentAnswers.value.fill(null);
// 	currentAnswers.value.splice(0, 0);
// }

const acceptAnswer = () => {

	questionFeedbackShow.value = true;

	const isCorrect = currentAnswers.value.reduce((prev, cur) => prev && cur.correct, true);
	// console.log(currentQuestion.value, isCorrect);
	answersHistory.value.splice(currentQuestion.value, 1, isCorrect);
	// console.log(answersHistory.value);

}

const nextQuestion = () => {
	if (currentQuestion.value < props.questionsData.length - 1) {
		currentQuestion.value++;
		questionFeedbackShow.value = false;
		initQuestion();
	} else {
		feedbackShow.value = true;
		
		nextTick(() => {
			emit('complete');
			if (document.querySelector('.album-restyle_3_4') == null) {
				// gsap.to(ps.element, {
				// 	scrollTop: ps.element.scrollTop + $refs.feedback.offsetHeight,
				// 	duration: 1
				// });
			} else {
				// scrollToContent(1);
			}
		});
	}
}


const resetPractice = () => {
	answersHistory.value.fill(null);
	// if (useClv) {
	//     try {
	//         CLV.oGlobal[`practice-simple-question-${getFramePosition().current}-${$root.$el.id}-answer-history`] = [];
	//     } catch (error) {
	//         console.warn('CLV not defined!');
	//     }
	// }
	currentQuestion.value = 0;
	currentAnswers.value = [];

	questionFeedbackShow.value = false;
	feedbackShow.value = false;

	initQuestion();
}


onMounted(() => {
	// if (useClv) {
	//         try {
	//             if (!getSavedAnswerHistory()) {
	//                 CLV.oGlobal[`practice-simple-question-${getFramePosition().current}-${$root.$el.id}-answer-history`] = [];
	//             }
	//         } catch (error) {
	//             console.warn('CLV not defined!');
	//         }
	//     }

	props.questionsData.forEach((question, index) => {
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
							{{ questionsData[currentQuestion].title }}
						</h3>
					</div>
					<div class="col-lg-4 col-xs-12">
						<div class="hint text-center">
							<h6>{{ questionsData[currentQuestion].task }}</h6>
						</div>
					</div>
				</div>
				<div class="row">
					<div v-for="(subQuestion, index) in questionsData[currentQuestion].subQuestions"
						 :key="`questions-${currentQuestion}-${index}`"
						 :class="['col-lg-6 col-xs-12 mb-rem-1-50 mb-xs-rem-1-0', `order-xs-${index}`]">
						<div class="card card_white card_small h-100 d-flex jc-center ai-center">
							<p class="text text-s text-semibold text-center">
								{{ subQuestion.text }}
							</p>
						</div>
					</div>
					<div v-for="(subQuestion, index) in questionsData[currentQuestion].subQuestions"
						 :key="`answers-${currentQuestion}-${index}`"
						 :class="['col-lg-6 col-xs-12 mb-xs-rem-1-50', `order-xs-${index}`]">
						<RadioQuestionGrid :answers="subQuestion.answers"
										   :grid-style="{}"
										   answer-class="double-question__answer"
										   answer-correct-class="double-question__answer_correct"
										   answer-incorrect-class="double-question__answer_incorrect"
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
				<button v-if="feedbackShow"
						class="btn btn_back"
						type="button"
						@click="resetPractice">
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
						class="btn btn_next"
						:disabled="feedbackShow"
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