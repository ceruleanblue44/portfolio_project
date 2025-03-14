<script setup>
import { ref, computed, reactive, onMounted } from 'vue'
import './RangeSliders.scss'

const btnAccept = ref(false)
const feedbackShow = ref(false)

const emit = defineEmits(['complete', 'disable-scrollbar', 'enable-scrollbar'])

const props = defineProps({
	settings: { type: Array },
})

const settings = reactive([...props.settings]);

const thumbPosition = (setting) => {
	return computed(() => {
		return ((setting.value - setting.min) / (setting.max - setting.min)) * 100;
	})
}

const acceptAnswer = () => {
	feedbackShow.value = true;
	emit('complete');
	
}

const reset = () => {
	settings.forEach(element => {
		element.value = 2
	})

	btnAccept.value = false
}

const showBtn = () => btnAccept.value = true


const onTouchStart = () => {
	emit('disable-scrollbar')
	
}

const onTouchEnd = () => {
	showBtn()
	setTimeout(() => {
    emit('enable-scrollbar')
  }, 200)
  
}

const onTouchMove = () => {
	
}

const saveNewValues = () => {
	// console.log(event.target.value)
}


onMounted(() => {

});

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
						   :disabled="feedbackShow"
						   @change="saveNewValues"
						   @touchstart="onTouchStart"
						   @touchend="onTouchEnd"
						   @touchmove="onTouchMove"
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
						:disabled="!btnAccept || feedbackShow"
						@click="reset()">
					Сбросить
				</button>
			</div>
			<div class="col-lg-10 col-xs-12">
				<button class="btn w-100"
						:disabled="!btnAccept || feedbackShow"
						@click="acceptAnswer()">
					Ответить
				</button>
			</div>
		</div>
	</div>

</template>