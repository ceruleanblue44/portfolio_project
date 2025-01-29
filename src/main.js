import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'animate.css/animate.min.css'
import { PerfectScrollbarPlugin } from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/style.css'

import '@/assets/styles/main.scss'

import App from './App.vue'
import router from './router'

createApp(App)
  .use(PerfectScrollbarPlugin)
  .use(createPinia())
  .use(router)
  .mount('#app')
