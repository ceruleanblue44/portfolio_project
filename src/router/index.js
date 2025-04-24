import { createRouter, createWebHistory } from 'vue-router'
import { useNavigationStore } from '@/stores/useNavigationStore'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'about',
			component: AboutView,
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
})

router.beforeEach((to, from, next) => {

	const navigationStore = useNavigationStore()

	console.log('isNavigating:' + sessionStorage.getItem('isNavigating'))

	// Only save page on normal navigation
	// if (sessionStorage.getItem('isNavigating')) {
		navigationStore.saveLastVisitedPage(to.path)
	// }
	// sessionStorage.setItem('isNavigating', 'true')

	// const navigationStore = useNavigationStore()
	// const isRestoringSession = !sessionStorage.getItem('isNavigating')

	// if (isRestoringSession && navigationStore.lastVisitedPage) {
	// 	router.replace(navigationStore.lastVisitedPage)
	// }

	// navigationStore.saveLastVisitedPage(to.path)

	next()
})

router.afterEach((to) => {
	const navigationStore = useNavigationStore()

	// Check if this is a fresh page load (restoring from localStorage)
	const isRestoringSession = !sessionStorage.getItem('isNavigating')

	if (isRestoringSession) {
		// Restore scroll position from Pinia/localStorage
		const savedPosition = navigationStore.scrollPositions[to.path] || 0
		setTimeout(() => {
			const container = document.querySelector('.scroll-container')
			container?.scrollTo(0, savedPosition)
		}, 100)
	} else {
		// Reset scroll to top when navigating between pages
		const container = document.querySelector('.scroll-container')
		container?.scrollTo(0, 0)
	}

	// Mark navigation as normal (not a fresh reload)
	sessionStorage.setItem('isNavigating', 'true')
})

window.addEventListener('beforeunload', () => {
	sessionStorage.removeItem('isNavigating')
})

export default router
