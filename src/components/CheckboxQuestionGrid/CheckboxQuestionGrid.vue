<script setup>
import { onMounted, ref, watch, computed, getCurrentInstance } from 'vue'
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
	previousAnswer: { type: Array, default: () => [] },
})

const isMobile = computed(() => window.screen.width < 719)

const getGridStyle = computed(() => isMobile.value ? props.gridStyleXs : props.gridStyle)

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


watch(() => selectedAnswer.value, (newVal) => {
	emit('select-answer', newVal);
})

watch(() => props.previousAnswer, (newVal) => {
	selectedAnswer.value = newVal ? [...newVal] : [];
})

onMounted(() => {
	if (props.previousAnswer) {
		selectedAnswer.value = props.previousAnswer
	}
})
</script>

<template>
	<div>
		<div class="checkbox-answers__grid"
			 :style="getGridStyle">
			<div v-for="(answer, answerIndex) in props.answers"
				 :key="answerIndex"
				 :class="['checkbox-answers__answer', getAdditionalAnswerClass(answer)]"
				 :style="isMobile ? answer.styleXs : answer.style">
				<input type="checkbox"
					   :name="`checkboxanswer-${_uid}`"
					   :id="`checkboxanswer-${_uid}-${answerIndex}`"
					   :value="answer"
					   :disabled="disabled"
					   v-model="selectedAnswer[answerIndex]">
				<label :for="`checkboxanswer-${_uid}-${answerIndex}`">
					<div>
						<img v-if="answer.img"
							 :src="answer.img"
							 alt=""
							 class="img_center mb-10 mb-xs-10">
						<p class="text-semibold text-center">
							{{ answer.text }}
						</p>
					</div>
				</label>
			</div>
		</div>
	</div>

</template>