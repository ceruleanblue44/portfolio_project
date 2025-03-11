<script setup>
import { ref } from 'vue'
import { instrumentPicker } from '@/instrumentPickerData/instrumentPicker'
import './InstrumentPicker.scss'


const visitedInstruments = ref(new Set());

console.log(instrumentPicker)

const getInstrumentPosition = (instrument) => {
  return visitedInstruments.value.has(instrument.id)
    ? instrument.positionVisited
    : instrument.position;
}

const changeInstrumentPosition = (id) => {
  visitedInstruments.value.has(id)
    ? visitedInstruments.value.delete(id)
    : visitedInstruments.value.add(id);
};

const openModal = (id, event) => {
	console.log(id)
	event.target.classList.add('visited')
}

</script>

<template>
	<div class="container_full container_full-xs container_bg-instrument-picker">
		<div class="row ">
			<div class="col-lg-8 col-xs-12 mb-xs-30">
				<div class="text-xl text-white">Посмотри, чем занимаются руководители на разных уровнях менеджмента.
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
				@click="openModal(instrument.id, $event); changeInstrumentPosition(instrument.id)" 
			></div>
			<!-- <div class="pm-btn js-pm-btn absolute"
				 style="width: 358px; height: 361px; top: 445px; left: 640px;"><img alt=""
					 src="user/img/album-1/track-2/instrument-picker/instrument-picker-2.png"
					 width="" /> <img alt=""
					 class="hide"
					 src="user/img/album-1/track-2/instrument-picker/instrument-picker-2-hover.png"
					 width="" /> <img alt=""
					 class="hide"
					 src="user/img/album-1/track-2/instrument-picker/instrument-picker-2-visited.png" />
			</div>
			<div class="pm-btn js-pm-btn absolute"
				 style="width: 285px; height: 436px; top: 370px; left: 40px;"><img alt=""
					 src="user/img/album-1/track-2/instrument-picker/instrument-picker-1.png" /> <img alt=""
					 class="hide"
					 src="user/img/album-1/track-2/instrument-picker/instrument-picker-1-hover.png" /> <img alt=""
					 class="hide"
					 src="user/img/album-1/track-2/instrument-picker/instrument-picker-1-visited.png" />
			</div>
			<div class="pm-btn js-pm-btn absolute"
				 style="width: 434px; height: 285px; top: 577px; left: 868px;"><img alt=""
					 src="user/img/album-1/track-2/instrument-picker/instrument-picker-3.png"
					 width="" /> <img alt=""
					 class="hide"
					 src="user/img/album-1/track-2/instrument-picker/instrument-picker-3-hover.png"
					 width="" /> <img alt=""
					 class="hide"
					 src="user/img/album-1/track-2/instrument-picker/instrument-picker-3-visited.png" />
			</div>
			<div class="pm-btn js-pm-btn absolute"
				 style="width: 179px; height: 136px; top: 670px; left: 1090px;"><img alt=""
					 src="user/img/album-1/track-2/instrument-picker/instrument-picker-4.png"
					 width="" /> <img alt=""
					 class="hide"
					 src="user/img/album-1/track-2/instrument-picker/instrument-picker-4-hover.png"
					 width="" /> <img alt=""
					 class="hide"
					 src="user/img/album-1/track-2/instrument-picker/instrument-picker-4-visited.png" />
			</div> -->
		</div>
		<div class="hide-lg">
			<div class="row">
				<div class="col-xs-12 mb-xs-10">
					<div class="js-pm-btn-xs pm-btn"><img alt=""
							 class="w-100"
							 src="../../assets/img/track-2/instrument-picker/instrument-picker-xs-1.png" />
					</div>
				</div>
				<div class="col-xs-4">
					<div class="js-pm-btn-xs pm-btn"><img alt=""
							 class="w-100"
							 src="../../assets/img/track-2/instrument-picker/instrument-picker-xs-2.png" />
					</div>
				</div>
				<div class="col-xs-4">
					<div class="js-pm-btn-xs pm-btn"><img alt=""
							 class="w-100"
							 src="../../assets/img/track-2/instrument-picker/instrument-picker-xs-3.png" />
					</div>
				</div>
				<div class="col-xs-4">
					<div class="js-pm-btn-xs pm-btn"><img alt=""
							 class="w-100"
							 src="../../assets/img/track-2/instrument-picker/instrument-picker-xs-4.png" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>