<script setup>
import { ref } from 'vue'
import './InstrumentPicker.scss'
import { instrumentPicker } from '@/instrumentPickerData/instrumentPicker'
import ContentModal from '../ContentModal/ContentModal.vue'

const visitedInstruments = ref(new Set())
const activeModal = ref(null)
const isModalOpen = ref(false)

const props = defineProps({
	modalsData: Object
})


const getInstrumentPosition = (instrument) => {
	return visitedInstruments.value.has(instrument.id)
		? instrument.positionVisited
		: instrument.position
}

const changeInstrumentPosition = (id) => {
	if (!visitedInstruments.value.has(id)) {
		visitedInstruments.value.add(id)
	}
}

const openModal = (id, event) => {
	event.target.classList.add('visited')
	activeModal.value = props.modalsData.find(modal => modal.id === id)
	isModalOpen.value = true
}

const closeModal = () => {
	isModalOpen.value = false
	activeModal.value = null
}

</script>

<template>
	<div class="container_full container_full-xs container_bg-instrument-picker mb-rem-9-75 mb-xs-rem-6-0">
		<div class="row ">
			<div class="col-lg-8 col-xs-12 mb-xs-30">
				<div class="text-xl text-white">Посмотри, чем занимаются руководители разных уровней управления.
				</div>
			</div>
			<div class="col-lg-4 col-xs-12 mb-xs-30">
				<div class="hint text-center">Нажимай на инструменты, чтобы узнать о ключевых областях управления на
					разных уровнях менеджмента.
				</div>
			</div>
		</div>
		<hr class="hr hr_neutral-16 hide-xs" />

		<div class="hide-xs">
			<div v-for="instrument in instrumentPicker"
				 :key="instrument.id"
				 :style="getInstrumentPosition(instrument)"
				 :class="`instrument instrument-${instrument.id}`"
				 @click="openModal(instrument.id, $event); changeInstrumentPosition(instrument.id)">
			</div>
			<div class="preload-images"></div>
		</div>
		<ContentModal v-if="isModalOpen"
					  v-model="isModalOpen"
					  :title="activeModal?.title"
					  :content="activeModal?.content"
					  @update:modelValue="closeModal" />
		<div class="hide-lg">
			<div class="row">
				<div class="col-xs-12 mb-xs-10">
					<div class="ip-btn"
						 @click="openModal(2, $event)">
						<img alt=""
							 class="w-100"
							 src="/assets/img/track-2/instrument-picker/instrument-picker-xs-1.png" />
					</div>
				</div>
				<div class="col-xs-4">
					<div class="ip-btn"
						 @click="openModal(1, $event)">
						<img alt=""
							 class="w-100"
							 src="/assets/img/track-2/instrument-picker/instrument-picker-xs-2.png" />
					</div>
				</div>
				<div class="col-xs-4">
					<div class="ip-btn"
						 @click="openModal(3, $event)">
						<img alt=""
							 class="w-100"
							 src="/assets/img/track-2/instrument-picker/instrument-picker-xs-3.png" />
					</div>
				</div>
				<div class="col-xs-4">
					<div class="ip-btn"
						 @click="openModal(4, $event)">
						<img alt=""
							 class="w-100"
							 src="/assets/img/track-2/instrument-picker/instrument-picker-xs-4.png" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>