<script setup>
import { ref, onMounted } from 'vue'
import MainHeader from '@/components/MainHeader/MainHeader.vue'

import InstrumentPicker from '@/components/InstrumentPicker/InstrumentPicker.vue'

import { instrumentsModals } from '@/contentModalsData/instrumentsModals'



onMounted(async() => {

});
</script>

<template>
	<PerfectScrollbar>
		<MainHeader />

		<div style="height: 10vh"></div>
		<InstrumentPicker :modals-data="instrumentsModals"/>


		<!-- <div style="height: 100vh"></div> -->
	</PerfectScrollbar>
</template>

<style scoped
	   lang="scss"></style>
