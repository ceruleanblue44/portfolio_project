import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { useNavigationStore } from '@/stores/useNavigationStore'
import router from './router'
import App from './App.vue'

import 'animate.css/animate.min.css'
import '@/assets/styles/main.scss'

const app = createApp(App);
const pinia = createPinia(); // ✅ Create Pinia instance first

app.use(pinia); // ✅ Register Pinia before using stores
app.use(router);

const navigationStore = useNavigationStore(); // ✅ Now it's safe to use
navigationStore.loadNavigationState();

router.isReady().then(() => {
	if (navigationStore.lastVisitedPage) {
		// console.log(navigationStore.scrollPositions[navigationStore.lastVisitedPage])
		console.log(navigationStore.scrollPositions);
		// console.log(navigationStore.lastVisitedPage);
		router.push(navigationStore.lastVisitedPage);
	}
})

app.mount('#app'); // ✅ Mount the app last
