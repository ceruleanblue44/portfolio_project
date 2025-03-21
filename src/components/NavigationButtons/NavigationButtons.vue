<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const pages = [
	{ path: '/', name: 'home' },
	{ path: '/intro', name: 'intro' },
	{ path: '/tracklist', name: 'tracklist' },
	{ path: '/track-1-1', name: 'track-1-1' },
	{ path: '/track-1-2', name: 'track-1-2' },
	{ path: '/track-2', name: 'track-2' }
]

const currentIndex = computed(() => pages.findIndex(page => page.path === route.path))

const backLink = computed(() => currentIndex.value > 0 ? pages[currentIndex.value - 1].path : null)
const nextLink = computed(() => currentIndex.value < pages.length - 1 ? pages[currentIndex.value + 1].path : null)

</script>

<template>
	<div class="container btn-container btn-container_center mt-rem-9-75 mb-rem-2-50 mt-xs-rem-6-0 mb-xs-rem-2-50">
		<router-link :to="backLink || '#'"
					 :class="['btn btn_back', { 'disabled' : !backLink }]">
			<span class="btn__text">Назад</span>
		</router-link>
		<router-link :to="nextLink || '#'"
					 :class="['btn btn_next', { 'disabled' : ! nextLink }]">
			<span class="btn__text">Продолжить</span>
		</router-link>
	</div>
</template>