import { createApp } from 'vue'
import { createPinia } from 'pinia'

import router from './router'
import { useNavigationStore } from '@/stores/useNavigationStore'
import App from './App.vue'

import 'animate.css/animate.min.css'
import '@/assets/styles/main.scss'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
// app.use(router)

const navigationStore = useNavigationStore()
navigationStore.loadNavigationState()

const isRestoring = !sessionStorage.getItem('isNavigating')
const lastPage = navigationStore.lastVisitedPage
sessionStorage.setItem('isNavigating', 'true')
if (isRestoring && lastPage && lastPage !== window.location.pathname) {
	router.replace(lastPage).then(() => {
		// sessionStorage.setItem('isNavigating', 'true')
		console.log('main isRestoring:' + sessionStorage.getItem('isNavigating'));
		app.use(router)
		app.mount('#app')
	})
} else {
	// sessionStorage.setItem('isNavigating', 'true')
	app.use(router)
	app.mount('#app')
}

// router.isReady().then(() => {
// 	if (navigationStore.lastVisitedPage) {
// 		router.replace(navigationStore.lastVisitedPage)
// 	}
// })

// app.mount('#app')