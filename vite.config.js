import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
	css: {
		devSourcemap: true,
		postcss: './postcss.config.js',
	},
	plugins: [vueDevTools(), svgLoader(),
	vue({
		template: {
			compilerOptions: {
				isCustomElement: (tag) => ['swiper-container', 'swiper-slide'].includes(tag),
			}
		}
	})
],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	}
})
