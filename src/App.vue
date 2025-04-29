<script setup>
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'
import { useViewStore } from '@/stores/useViewStore'

const view = useViewStore()

onMounted(() => {
	view.setupMediaQuery()
})
</script>

<template>

	<RouterView />
</template>
