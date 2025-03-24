import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
			redirect: { name: 'intro' }
		},
		{
			path: '/intro',
			name: 'intro',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
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

export default router
