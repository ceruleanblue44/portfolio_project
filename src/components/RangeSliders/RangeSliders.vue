<script setup>
import { ref, computed, reactive, nextTick, onMounted } from 'vue'
import './RangeSliders.scss'
import { useUserProgressStore } from '@/stores/useUserProgressStore'

const userProgressStore = useUserProgressStore()

const btnAnswer = ref(false)
const feedbackShow = ref(false)
const disabled = ref(false)
const btnResetAnswer = ref(false)

const emit = defineEmits(['complete', 'disable-scrollbar', 'enable-scrollbar'])

const props = defineProps({
	settings: { type: Object },
})

const settings = reactive([...props.settings.sliders])

const { questionId } = props.settings

const getSavedAnswer = () => {
	const savedAnswers = userProgressStore.quizAnswers[questionId]
	if (savedAnswers) {
		settings.forEach((slider, index) => {
			if (savedAnswers[index] !== undefined) {
				slider.value = savedAnswers[index].value
			}
		})
	}
}

const thumbPosition = (setting) => {
	return computed(() => {
		return ((setting.value - setting.min) / (setting.max - setting.min)) * 100
	})
}

const acceptAnswer = () => {
	feedbackShow.value = true

	nextTick(() => {
		emit('complete')
	})
	const savedValues = settings.map(slider => ({ value: slider.value }))
	userProgressStore.saveQuizAnswer(questionId, savedValues)
}

const reset = () => {
	settings.forEach(element => {
		element.value = 2
	})
	btnAnswer.value = false
}

const showBtn = () => btnAnswer.value = true

const onTouchStart = () => {
	emit('disable-scrollbar')
}

const onTouchEnd = () => {
	showBtn()
	setTimeout(() => {
		emit('enable-scrollbar')
	}, 200)
}

const resetAnswer = () => {
	settings.forEach(element => {
		element.value = 2
	})
	disabled.value = false
	btnResetAnswer.value = false

}

onMounted(() => {
	if (userProgressStore.quizAnswers[questionId]) {
		disabled.value = true
		btnAnswer.value = false
		btnResetAnswer.value = true
		getSavedAnswer()
	}
})

</script>

<template>
	<div>
		<div class="row mb-25 mb-xs-25">
			<div class="col-lg-6 col-xs-12 mb-20 mb-xs-25"
				 v-for="setting, idx in settings"
				 :key="idx">
				<img class="w-100"
					 src="../../assets/img/track-2/range-sliders/scale.svg"
					 alt="">
				<div class="range-slider_wrapper mb-20 mb-xs-10">
					<span :class="'range-slider__bar ' + setting.color"
						  :style="{ width: thumbPosition(setting).value + '%' }"></span>
					<input type="range"
						   class="range-slider"
						   :min="setting.min"
						   :max="setting.max"
						   step="1"
						   v-model="setting.value"
						   :disabled="feedbackShow || disabled"
						   @touchstart="onTouchStart"
						   @touchend="onTouchEnd"
						   @mouseup="showBtn">

				</div>
				<div class="d-flex">
					<div :class="`hide-xs range-slider__marker ${setting.color}`"></div>
					<div class="text-l ml-25 hide-xs">{{setting.text}}</div>
					<div class="text-l hide-lg text-center w-100">{{setting.text}}</div>
				</div>

			</div>
		</div>
		<div class="row">
			<div class="col-lg-2 col-xs-12 mb-xs-10">
				<button class="btn btn_back w-100"
						:disabled="!btnAnswer || feedbackShow"
						@click="reset()">
					Сбросить
				</button>
			</div>
			<div class="col-lg-10 col-xs-12">
				<button v-if="!btnResetAnswer"
						class="btn w-100"
						:disabled="!btnAnswer || feedbackShow"
						@click="acceptAnswer()">
					Ответить
				</button>
				<button v-if="btnResetAnswer"
						class="btn w-100"
						@click="resetAnswer()">
					Ответить еще раз
				</button>
			</div>
		</div>
		<div class="row mt-rem-3-75 mt-xs-rem-2-0"
			 v-if="feedbackShow"
			 ref="feedback">
			<div class="col-lg-12 col-xs-12">
				<slot name="sliders-feedback"></slot>
			</div>
		</div>
	</div>

</template>