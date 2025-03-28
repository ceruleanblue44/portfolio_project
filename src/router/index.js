import { createRouter, createWebHistory } from 'vue-router'
import { useNavigationStore } from '@/stores/useNavigationStore'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView, // ✅ Keep this as a normal route (no redirect here)
		},
		{
			path: '/intro',
			name: 'intro',
			component: () => import('../views/IntroView.vue')
		},
		{
			path: '/tracklist',
			name: 'tracklist',
			component: () => import('../views/TrackListView.vue')
		},
		{
			path: '/track-1-1',
			name: 'track-1-1',
			component: () => import('../views/TrackOnePartOneView.vue')
		},
		{
			path: '/track-1-2',
			name: 'track-1-2',
			component: () => import('../views/TrackOnePartTwoView.vue')
		},
		{
			path: '/track-2',
			name: 'track-2',
			component: () => import('../views/TrackTwoView.vue')
		}
	],
});

// ✅ Handle redirection in `beforeEach`
router.beforeEach((to, from, next) => {
	const navigationStore = useNavigationStore();

	// Redirect only when navigating to home
	if (to.path === '/' && navigationStore.lastVisitedPage) {
		return next(navigationStore.lastVisitedPage); // ✅ Correct redirect
	}

	navigationStore.saveLastVisitedPage(to.path);
	next();
});

router.afterEach((to) => {
	const navigationStore = useNavigationStore()

	// Check if this is a fresh page load (restoring from localStorage)
	const isRestoringSession = !sessionStorage.getItem('isNavigating');

	console.log(isRestoringSession);


	if (isRestoringSession) {
		// Restore scroll position from Pinia/localStorage
		const savedPosition = navigationStore.scrollPositions[to.path] || 0;
		setTimeout(() => {
			const container = document.querySelector('.scroll-container');
			container?.scrollTo(0, savedPosition);
			console.log(to.path, savedPosition, container);
		}, 100); // Small delay for smooth transition
	} else {
		// Reset scroll to top when navigating between pages
		const container = document.querySelector('.scroll-container');
		container?.scrollTo(0, 0);
	}

	// Mark navigation as normal (not a fresh reload)
	sessionStorage.setItem('isNavigating', 'true');
	// console.log(sessionStorage);
});

window.addEventListener('beforeunload', () => {
	sessionStorage.removeItem('isNavigating');
});




export default router;
