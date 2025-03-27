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
	const navigationStore = useNavigationStore();
	navigationStore.saveScrollPosition(to.path, document.querySelector('.scroll-container')?.scrollTop || 0);
});

export default router;
