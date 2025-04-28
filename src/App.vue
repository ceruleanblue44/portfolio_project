<script setup>
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'
import { useViewStore } from '@/stores/useViewStore'
import PageLoader from './components/PageLoader/PageLoader.vue'

const view = useViewStore()

onMounted(() => {
	view.setupMediaQuery()
})
</script>

<template>
	<PageLoader />
	<RouterView />
</template>
