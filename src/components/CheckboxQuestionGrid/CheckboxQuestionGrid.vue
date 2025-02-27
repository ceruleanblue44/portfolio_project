<script setup>
import { onMounted, ref, watch, getCurrentInstance } from 'vue'

import './CheckboxQuestionGrid.scss'

const selectedAnswer = ref([])

const emit = defineEmits(['select-answer'])

const instance = getCurrentInstance()

const _uid = ref(instance.uid)

const props = defineProps({
	answers: { type: Array },
	gridStyle: { type: Object },
	gridStyleXs: { type: Object },
	disabled: { type: Boolean },
	answerClass: { type: String, default: '' },
	answerCorrectClass: { type: String, default: '' },
	answerIncorrectClass: { type: String, default: '' },
	initialSelectedAnswer: { type: Array, default: () => [] }
})

const getAdditionalAnswerClass = (answer) => {
	let addClass = [];
	if (props.disabled && answer === selectedAnswer.value && answer.correct) {
		addClass.push(props.answerCorrectClass)
	}
	if (props.disabled && answer === selectedAnswer.value && !answer.correct) {
		addClass.push(props.answerIncorrectClass)
	}
	return [props.answerClass, addClass]
}


watch(selectedAnswer.value, function (newVal) {
	// console.log(newVal);
	emit('select-answer', newVal);
})

onMounted(() => {
	if (props.initialSelectedAnswer.length === 0) {
		props.answers.forEach(() => {
			selectedAnswer.value.push(false);
		});
	} else {
		selectedAnswer.value = props.initialSelectedAnswer;
	}

})
</script>

<template>
	<div>
		<div class="checkbox-answers__grid hide-xs"
			 :style="props.gridStyle">
			<div v-for="(answer, answerIndex) in props.answers"
				 :key="answerIndex"
				 :class="['checkbox-answers__answer', getAdditionalAnswerClass(answer)]"
				 :style="answer.style">
				<input type="checkbox"
					   :name="`checkboxanswer-${_uid}`"
					   :id="`checkboxanswer-${_uid}-${answerIndex}`"
					   :value="answer.text"
					   :disabled="disabled"
					   v-model="selectedAnswer[answerIndex]">
				<label :for="`checkboxanswer-${_uid}-${answerIndex}`">
					<div>
						<img v-if="answer.img"
							 :src="answer.img"
							 alt=""
							 class="img_center mb-10 mb-xs-10">
						<p class="text-center">
							{{ answer.text }}
						</p>
					</div>
				</label>
			</div>
		</div>
		<div class="checkbox-answers__grid hide-lg"
			 :style="gridStyleXs">
			<div v-for="(answer, answerIndex) in answers"
				 :key="answerIndex"
				 :class="['checkbox-answers__answer', getAdditionalAnswerClass(answer)]"
				 :style="answer.styleXs">
				<input type="checkbox"
					   :name="`checkboxanswer-xs-${_uid}`"
					   :id="`checkboxanswer-xs-${_uid}-${answerIndex}`"
					   :value="answer"
					   :disabled="disabled"
					   v-model="selectedAnswer[answerIndex]">
				<label :for="`checkboxanswer-xs-${_uid}-${answerIndex}`">
					<div>
						<img v-if="answer.img"
							 :src="answer.img"
							 alt=""
							 class="img_center mb-10 mb-xs-10">
						<p class="text-center">
							{{ answer.text }}
						</p>
					</div>
				</label>
			</div>
		</div>
	</div>

</template>