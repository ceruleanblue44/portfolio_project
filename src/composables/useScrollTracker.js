import { ref, onMounted, onUnmounted } from 'vue'
import { useNavigationStore } from '@/stores/useNavigationStore'
import { useRoute } from 'vue-router'

export function useScrollTracker() {
	const container = ref(null)
	const navigationStore = useNavigationStore()
	const route = useRoute()

	const updateScrollPosition = () => {
		if (container.value) {
			navigationStore.saveScrollPosition(route.path, container.value.scrollTop)
		}
	}

	onMounted(() => {
		if (container.value) {
			// Restore previous scroll position
			// const savedPosition = navigationStore.scrollPositions[route.path] || 0
			// console.log(navigationStore.scrollPositions[route.path])
			// container.value.scrollTop = savedPosition
			// console.log(savedPosition, route.path);
			// Listen to scroll events
			container.value.addEventListener('scroll', updateScrollPosition)
		}
	})

	onUnmounted(() => {
		if (container.value) {
			container.value.removeEventListener('scroll', updateScrollPosition)
		}
	})

	return { container }
}
