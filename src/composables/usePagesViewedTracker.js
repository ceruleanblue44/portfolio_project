import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { usePagesViewedStore } from '@/stores/usePagesViewedStore'
import { useRoute } from 'vue-router'

export default function usePagesViewedTracker() {
	const route = useRoute()
	const pagesViewedStore = usePagesViewedStore()
	const pageViewed = ref(false)
	let observer = null

	const checkIfPageViewed = (entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				pagesViewedStore.markPageFullyViewed(route.path)
			}
		})
	}

	const revealHiddenSections = async () => {
		await nextTick() // Make sure DOM is fully updated
		const hiddenSections = document.querySelectorAll('.js-hidden')

		if (pagesViewedStore.pagesFullyViewed.has(route.path)) {
			pageViewed.value = true
			hiddenSections.forEach(section => section.classList.remove('hidden'))
		}
	}

	onMounted(() => {
		// Make sure data is loaded before doing anything
		pagesViewedStore.loadPagesFullyViewed()
		revealHiddenSections()

		const navButtons = document.querySelector('.js-nav-buttons')
		const scrollContainer = document.querySelector('.scroll-container')

		if (navButtons && scrollContainer) {
			observer = new IntersectionObserver(checkIfPageViewed, {
				root: scrollContainer, 
				threshold: 1.0
			})
			observer.observe(navButtons)
		}
	})

	onUnmounted(() => {
		if (observer) observer.disconnect()
	})

	return { pageViewed }
}
