import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'animate.css/animate.min.css'
import { PerfectScrollbar} from 'vue3-perfect-scrollbar';
import 'vue3-perfect-scrollbar/style.css';

import '@/style/style.scss'

import App from './App.vue'
import router from './router'

createApp(App)
	.use(PerfectScrollbar)
	.use(createPinia())
	.use(router)
	.mount('#app')

