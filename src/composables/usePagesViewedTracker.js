import { ref, onMounted, onUnmounted } from 'vue';
import { usePagesViewedStore } from '@/stores/usePagesViewedStore';
import { useRoute } from 'vue-router'

export default function usePagesViewedTracker() {
	const route = useRoute()
	const navButtonsVisible = ref(false);
	const pagesViewedStore = usePagesViewedStore();

	let observer;

	const checkIfPageViewed = (entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				navButtonsVisible.value = true;
				pagesViewedStore.markPageFullyViewed(route.path); // Mark the page as viewed
			}
		});
	};

	onMounted(() => {
		const navButtons = document.querySelector('.js-nav-buttons'); // Adjust selector if needed
		if (navButtons) {
			observer = new IntersectionObserver(checkIfPageViewed, {
				root: document.querySelector('.scroll-container'), // Track within scrollable container
				threshold: 1.0 // Fires only when the entire element is in view
			});
			observer.observe(navButtons);
			console.log('observing buttons visibility');
		}

		pagesViewedStore.loadPagesFullyViewed()
	});

	onUnmounted(() => {
		if (observer) observer.disconnect();
	});

	return { navButtonsVisible };
}
