<script setup>
import { onMounted, ref, computed, nextTick } from 'vue'
import RadioQuestionGrid from '../RadioQuestionGrid/RadioQuestionGrid.vue'
import Star from '@/assets/svg/star.svg'

const answersHistory = ref([])

const currentQuestion = ref(0)
const currentAnswers = ref([])

const questionFeedbackShow = ref(false)
const feedbackShow = ref(false)


const props = defineProps({
	questionsData: { type: Array },
	answerBtn: Boolean,
})

const emit = defineEmits(['complete'])

const hasPickedAnswers = computed(() => {
	return currentAnswers.value.filter((elem) => elem !== null).length > 0;
})

const hasAllPickedAnswers = computed(() => {
	return currentAnswers.value.filter((elem) => elem !== null).length === currentAnswers.value.length;
})

const answerBtnName = () => {
	return props.answerBtn;
}

const getMarkerClassName = (markerIndex) => {
	return {
		'double-question__answer-history__marker_inactive': markerIndex > currentQuestion.value,
		'double-question__answer-history__marker_current': markerIndex === currentQuestion.value && answersHistory[markerIndex] === null,
		'double-question__answer-history__marker_correct': answersHistory[markerIndex] === true,
		'double-question__answer-history__marker_incorrect': answersHistory[markerIndex] === false,
	}
}

const getSavedAnswerHistory = () => {
	// return CLV.oGlobal[`practice-simple-question-${getFramePosition().current}-${$root.$el.id}-answer-history`];
}

const initQuestion = () => {
	currentAnswers.value = [];
	props.questionsData[currentQuestion].subQuestions.forEach(() => {
		currentAnswers.value.push(null);
	});
}


const setCurrentAnswers = (subQuestion, newAnswer) => {
	currentAnswers.value.splice(subQuestion, 1, newAnswer);
}

const resetQuestion = () => {
	const savedSubQuestions = props.questionsData[currentQuestion].subQuestions;
	props.questionsData[currentQuestion].subQuestions = [];
	nextTick(() => {
		props.questionsData[currentQuestion].subQuestions = savedSubQuestions;
	});
	currentAnswers.value.fill(null);
	currentAnswers.value.splice(0, 0);
}

const acceptAnswer = () => {

if (document.querySelector('.album-restyle_3_3') != null) {
	nextQuestion();
}

questionFeedbackShow.value = true;

const isCorrect = currentAnswers.value.reduce((prev, cur) => prev && cur.correct, true);
answersHistory.value.splice(currentQuestion, 1, isCorrect);

}

const nextQuestion = () => {
if (currentQuestion.value < props.questionsData.length - 1) {
	currentQuestion.value++;
	questionFeedbackShow.value = false;
	initQuestion();
} else {
	if (document.querySelector('.album-restyle_3_4') != null) {
		let counterRightAnswers = document.querySelectorAll('.pair-question__answer-history__marker_correct').length;
		// const positiveFeedback = $('.js-positive-feedback');
		// const negativeFeedback = $('.js-negative-feedback');
		if (counterRightAnswers === 8) {
			// negativeFeedback.addClass('hide')
			// positiveFeedback.removeClass('hide')
			// setTimeout(() => {
			// 	initHeadPhone('user/img/anim/headphones-green.json') 
			// }, 300);
		} else {
			// positiveFeedback.addClass('hide')
			// negativeFeedback.removeClass('hide')
			// setTimeout(() => {
			// 	initHeadPhone('user/img/anim/headphones-red.json') 
			// }, 300);
		}
	}
	

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
							<!-- <svg v-for="(answer, index) in answersHistory" :key="`markers-${index}`" :class="['double-question__answer-history__marker', getMarkerClassName(index)]">
                                <use xlink:href="user/svg/sprite.svg#4star-color" />
                            </svg> -->
						</div>
						<h3 class="double-question__title">
							{{ questionsData[currentQuestion].title }}
						</h3>
					</div>
					<div class="col-lg-4 col-xs-12">
						<div class="balloon text-center">
							<h6>{{ questionsData[currentQuestion].task }}</h6>
						</div>
					</div>
				</div>
				<div class="row">
					<div v-for="(subQuestion, index) in questionsData[currentQuestion].subQuestions"
						 :key="`questions-${currentQuestion}-${index}`"
						 :class="['col-lg-6 col-xs-12 mb-rem-1-50 mb-xs-rem-1-0', `order-xs-${index}`]">
						<div class="balloon balloon_white balloon_small h-100 d-flex jc-center ai-center">
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
				<button v-if="!feedbackShow && !questionFeedbackShow"
						class="btn btn_back"
						type="button"
						:disabled="!hasPickedAnswers || questionFeedbackShow"
						@click="resetQuestion">
					<span class="btn__text">Сбросить</span>
				</button>
				<button v-else-if="feedbackShow"
						class="btn btn_back"
						type="button"
						@click="resetPractice">
					<span class="btn__text">Сбросить</span>
				</button>
				<button type="button"
						v-if="!questionFeedbackShow"
						class="btn btn_next"
						:disabled="!hasAllPickedAnswers"
						@click="acceptAnswer">
					<span class="btn__text">Ответить</span>
				</button>
				<button type="button"
						v-else
						class="btn btn_next"
						:disabled="feedbackShow"
						@click="nextQuestion">
					<span v-if='answerBtnName()'
						  class="btn__text">Продолжить</span>
					<span v-else
						  class="btn__text">Ответить</span>
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