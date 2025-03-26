<script setup>

import { onMounted, ref, computed, watch, getCurrentInstance } from 'vue'
import './RadioQuestionGrid.scss'

const selectedAnswer = ref(null)

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
	previousAnswer: { type: Object, default: null }
})

const emit = defineEmits(['select-answer'])

const isMobile = computed(() => window.screen.width < 719)

const getGridStyle = computed(() => isMobile.value ? props.gridStyleXs : props.gridStyle)

const getAdditionalAnswerClass = (answer) => {
	let addClass = []
	if (props.disabled && answer.correct) {
		addClass.push(props.answerCorrectClass)
	}
	if (props.disabled && !answer.correct) {
		addClass.push(props.answerIncorrectClass)
	}
	return [props.answerClass, addClass]
}

watch(selectedAnswer, (newVal) => {
	emit('select-answer', newVal)
})

watch(() => props.previousAnswer, (newVal) => {
  selectedAnswer.value = newVal; 
})

onMounted(() => {
	selectedAnswer.value = props.previousAnswer
})

</script>

<template>
	<div>
		<div class="radio-answers__grid"
			 :style="getGridStyle">
			<div v-for="(answer, answerIndex) in props.answers"
				 :key="answerIndex"
				 :class="['radio-answers__answer', getAdditionalAnswerClass(answer)]">
				<input type="radio"
					   :name="`radio-answer-${_uid}`"
					   :id="`radio-answer-${_uid}-${answerIndex}`"
					   :value="answer"
					   :disabled="props.disabled"
					   v-model="selectedAnswer">
				<label :for="`radio-answer-${_uid}-${answerIndex}`">
					{{ answer.text }}
				</label>
			</div>
		</div>
		<!-- <div class="radio-answers__grid hide-lg"
			 :style="props.gridStyleXs">
			<div v-for="(answer, answerIndex) in props.answers"
				 :key="answerIndex"
				 :class="['radio-answers__answer', getAdditionalAnswerClass(answer)]"
				 :style="answer.style">
				<input type="radio"
					   :name="`radio-answer-xs-${_uid}`"
					   :id="`radio-answer-xs-${_uid}-${answerIndex}`"
					   :value="answer"
					   :disabled="props.disabled"
					   v-model="selectedAnswer">
				<label :for="`radio-answer-xs-${_uid}-${answerIndex}`">
					{{ answer.text }}
				</label>
			</div>
		</div> -->
	</div>

</template>
