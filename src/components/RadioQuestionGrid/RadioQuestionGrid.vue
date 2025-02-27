<script setup>

import { onMounted, ref, watch, getCurrentInstance } from 'vue'
import './RadioQuestionGrid.scss'

const instance = getCurrentInstance()

const _uid = ref(instance.uid)

// console.log(getCurrentInstance());

const selectedAnswer = ref(null)

const props = defineProps({
	answers: { type: Array },
	gridStyle: { type: Object },
	gridStyleXs: { type: Object },
	disabled: { type: Boolean },
	answerClass: { type: String, default: '' },
	answerCorrectClass: { type: String, default: '' },
	answerIncorrectClass: { type: String, default: '' },
	initialSelectedAnswer: { type: Object, default: null }

})

const emit = defineEmits(['select-answer'])

const getAdditionalAnswerClass = (answer) => {
	// console.log(answer);
	let addClass = [];
	if (props.disabled && answer.correct) {
		addClass.push(props.answerCorrectClass)
	}
	if (props.disabled && !answer.correct) {
		addClass.push(props.answerIncorrectClass)
	}
	return [props.answerClass, addClass]
}

// eslint-disable-next-line no-unused-vars
watch(selectedAnswer, function (newVal, oldVal) {
	console.log(newVal, oldVal);
	emit('select-answer', newVal);
})




onMounted(() => {

	// selectedAnswer.value = props.initialSelectedAnswer;

})
</script>

<template>
	<div>
		<div class="radio-answers__grid hide-xs"
			 :style="props.gridStyle">
			<div v-for="(answer, answerIndex) in props.answers"
				 :key="answerIndex"
				 :class="['radio-answers__answer', getAdditionalAnswerClass(answer)]"
				 :style="answer.style">
				<input type="radio"
					   :name="`radio-answer-${_uid}`"
					   :id="`radio-answer-${_uid}-${answerIndex}`"
					   :value="answer.text"
					   :disabled="props.disabled"
					   v-model="selectedAnswer">
				<label :for="`radio-answer-${_uid}-${answerIndex}`">
					{{ answer.text }}
				</label>
			</div>
		</div>
		<div class="radio-answers__grid hide-lg"
			 :style="props.gridStyleXs">
			<div v-for="(answer, answerIndex) in props.answers"
				 :key="answerIndex"
				 :class="['radio-answers__answer', getAdditionalAnswerClass(answer)]"
				 :style="answer.style">
				<input type="radio"
					   :name="`radio-answer-xs-${_uid}`"
					   :id="`radio-answer-xs-${_uid}-${answerIndex}`"
					   :value="answer"
					   :disabled="disabled"
					   v-model="selectedAnswer">
				<label :for="`radio-answer-xs-${_uid}-${answerIndex}`">
					{{ answer.text }}
				</label>
			</div>
		</div>
	</div>

</template>
