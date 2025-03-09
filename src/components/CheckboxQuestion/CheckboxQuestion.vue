<script setup>

// import { gsap } from "gsap";
import { onMounted, ref, computed, nextTick, getCurrentInstance } from 'vue'
import CheckboxQuestionGrid from '../CheckboxQuestionGrid/CheckboxQuestionGrid.vue'

// import { PerfectScrollbarExpose } from 'vue3-perfect-scrollbar'
// const scrollbarApi = ref(null)

const props = defineProps({
	checkRule: { type: Object },
	answersGrid: { type: Object },
	keyEl: Number,
	answerBtn: Boolean,
	isHorizontal: { type: Boolean, default: false },
	useClv: { type: Boolean, default: false },
	disableBtn: Boolean,
})

const emit = defineEmits(['complete'])

const instance = getCurrentInstance()

const feedbackShow = ref(false)
const currentAnswer = ref([])
const currentFeedback = ref(null)

// const feedback = useTemplateRef('feedback')

const selectedAnswersCount = computed(() => {
	// console.log(currentAnswer.value);
	return currentAnswer.value.filter((answer) => answer === true).length;
})

const answerBtnName = () => {
	return props.answerBtn;
}

const getSavedAnswer = () => {
	// console.log(instance);
	// console.log(`${instance}-answer`);
	// try {
	// 	return CLV.oGlobal[`practice-simple-checkbox-question-${getFramePosition().current}-${instance}-answer`];
	// } catch (error) {
	// 	console.warn('CLV not defined!');
	// 	return [];
	// }

}

const setCurrentAnswer = (newAnswer) => {
	currentAnswer.value = newAnswer;

	// if (props.useClv) {
	// 	try {
	// 		CLV.oGlobal[`practice-simple-checkbox-question-${getFramePosition().current}-${instance}-answer`] = this.currentAnswer;
	// 		// console.log(this.currentAnswer);
	// 	} catch (error) {
	// 		console.warn('CLV not defined!');
	// 	}
	// }
}

const acceptAnswer = () => {
	let isCorrect;

	if (props.checkRule.type === 'count') {
		isCorrect =props.checkRule.check(selectedAnswersCount.value);
	}
	
	currentFeedback.value = isCorrect ? 'feedback-0' : 'feedback-1'
	
	feedbackShow.value = true;

	nextTick(() => {
		emit('complete', isCorrect);

		// if (this.keyEl != 1) {
		// 	gsap.to(ps.element, {
		// 		scrollTop: ps.element.scrollTop + feedback.offsetHeight,
		// 		duration: 1
		// 	});
		// }

	});
}


onMounted(() => {
	// if (scrollbarApi.value) { console.log(scrollbarApi.value.ps?.settings) }
})

</script>

<template>
	<div class="">
		<div class="row">
			<div class="col-xs-12 mb-rem-2-50 mb-xs-rem-2-0"
				 :class="{'col-lg-5': isHorizontal, 'col-lg-12': !isHorizontal}">
				<slot name="question-text"></slot>
			</div>
			<div class="col-xs-12"
				 :class="{'col-lg-7': isHorizontal, 'col-lg-12': !isHorizontal}">
				<checkbox-question-grid :answers="props.answersGrid.answers"
												:grid-style="props.answersGrid.gridStyle"
												:disabled="feedbackShow"
												:initial-selected-answer="getSavedAnswer()"
												@select-answer="setCurrentAnswer($event)">
				</checkbox-question-grid>
				<button v-if='!answerBtnName'
						class="btn js-btn-answer w-100 mt-rem-2-50 mt-xs-rem-2-0"
						:disabled="selectedAnswersCount === 0 || feedbackShow"
						@click="acceptAnswer()">
					Выбрать
				</button>
				<button v-else
						class="btn js-btn-answer w-100 mt-rem-2-50 mt-xs-rem-2-0"
						:disabled="selectedAnswersCount === 0 || feedbackShow"
						@click="acceptAnswer()">
					Ответить
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