<script setup>
import './ToggleImg.scss'
import { ref, onMounted, watch, getCurrentInstance } from 'vue'
import { gsap } from 'gsap'

const props = defineProps({
	tweens: { type: Array },
	labelTexts: { type: Object },
	toggleButtonClass: { type: String },
	toggleTop: Boolean
})

const instance = getCurrentInstance()

const _uid = ref(instance.uid)

const toggleActive = ref(false)

const timeline = ref(
	gsap.timeline({
		paused: true
	})
)

console.log(timeline.value)

const timelineInit = () => {
	props.tweens.forEach((tween) => {
		timeline.value.add(tween(), 0)
	})
}

watch(toggleActive, (newVal) => {
	console.log(timeline.value)
	if (newVal === true) {
		timeline.value.play()
	} else {
		timeline.value.reverse()
	}
})

onMounted(() => {
	timelineInit()
})
</script>
<template>
	<div class="toggle-img">
		<div v-if="toggleTop"
			 class="row mb-40 mb-xs-25">
			<div class="col-lg-12 col-xs-12">
				<div :class="['toggle-button', toggleButtonClass]">
					<input :id="`toggle-anim-${_uid}`"
						   type="checkbox"
						   v-model="toggleActive" />
					<label :for="`toggle-anim-${_uid}`">
						<div class="toggle-button__left">
							<h4 class="hide-xs">{{ labelTexts.left }}</h4>
							<h5 class="hide-lg">{{ labelTexts.left }}</h5>
						</div>
						<div class="toggle-button__toggler"></div>
						<div class="toggle-button__right">
							<h4 class="hide-xs">{{ labelTexts.right }}</h4>
							<h5 class="hide-lg">{{ labelTexts.right }}</h5>
						</div>
					</label>
				</div>
			</div>
		</div>
		<div class="mb-rem-2-0 mb-xs-rem-1-25">
			<slot></slot>
		</div>
		<div v-if="!toggleTop"
			 class="row">
			<div class="col-lg-12 col-xs-12">
				<div :class="['toggle-button', toggleButtonClass]">
					<input :id="`toggle-img-${_uid}`"
						   type="checkbox"
						   v-model="toggleActive" />
					<label :for="`toggle-img-${_uid}`">
						<div class="toggle-button__left">
							<h4 class="hide-xs">{{ props.labelTexts.left }}</h4>
							<h5 class="hide-lg">{{ props.labelTexts.left }}</h5>
						</div>
						<div class="toggle-button__toggler"></div>
						<div class="toggle-button__right">
							<h4 class="hide-xs">{{ props.labelTexts.right }}</h4>
							<h5 class="hide-lg">{{ props.labelTexts.right }}</h5>
						</div>
					</label>
				</div>
			</div>
		</div>
	</div>
</template>
