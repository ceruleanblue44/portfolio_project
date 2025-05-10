<script setup>
import { ref, onMounted } from 'vue'
import { refreshScrollTrigger } from '@/scripts/utils/refreshScrollTrigger'
const loading = ref(true)

async function waitForAllImages() {
	const images = [...document.images]
	const loadPromises = images.map(img => {
		if (img.complete) return Promise.resolve()

		return new Promise((resolve) => {
			img.addEventListener('load', resolve, { once: true })
			img.addEventListener('error', resolve, { once: true })
		})
	})

	await Promise.all(loadPromises)
	loading.value = false
	refreshScrollTrigger()
}

onMounted(async () => {
	await waitForAllImages()
})

</script>

<template>
	<transition name="fade">
		<div v-if="loading"
			 class="page-loader">
			<div class="dual-ring"></div>
		</div>
	</transition>
</template>

<style scoped>
	.page-loader {
		position: fixed;
		inset: 0;
		background: white;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 9999;
	}

	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.4s ease;
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
	}

	.dual-ring {
		display: inline-block;
		width: 64px;
		height: 64px;
	}

	.dual-ring:after {
		content: " ";
		display: block;
		width: 46px;
		height: 46px;
		margin: 1px;
		border-radius: 50%;
		border: 5px solid #a244ed;
		border-color: #a244ed transparent #a244ed transparent;
		animation: dual-ring-spin 1.2s linear infinite;
	}

	@keyframes dual-ring-spin {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}
</style>