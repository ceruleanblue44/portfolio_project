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
app.use(router)

const navigationStore = useNavigationStore()
navigationStore.loadNavigationState()

router.isReady().then(() => {
	if (navigationStore.lastVisitedPage) {
		router.replace(navigationStore.lastVisitedPage)
	}
})

app.mount('#app')