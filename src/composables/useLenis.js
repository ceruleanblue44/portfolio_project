import { onMounted, onUnmounted } from 'vue'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useLenis() {
	let lenis = null

	onMounted(() => {
		const scrollContainer = document.querySelector('.scroll-container') // 🔥 Select your scroll wrapper

		// console.log(scrollContainer, scrollContainer.children[0])

		if (!scrollContainer) {
			console.warn('Lenis: .scroll-container not found! Make sure it exists.')
			return
		}

		lenis = new Lenis({
			smooth: true,
			// autoResize: true,
			lerp: 0.1, // Adjust smoothness
			wrapper: scrollContainer, // 🔥 Set your custom scroll wrapper
			content: scrollContainer, // 🔥 Lenis needs to know what to scroll
		})

		function raf(time) {
			lenis.raf(time)
			ScrollTrigger.update() // Keep GSAP in sync
			requestAnimationFrame(raf)
		}
		requestAnimationFrame(raf)

		// Sync GSAP ScrollTrigger with Lenis
		lenis.on('scroll', () => {
			ScrollTrigger.update()
		})

		// Refresh ScrollTrigger after Lenis is set up
		setTimeout(() => {
			ScrollTrigger.refresh()
		}, 100)

		// 🔥 Make Lenis accessible for debugging
		window.lenis = lenis
	})

	onUnmounted(() => {
		lenis?.destroy()
		window.lenis = null
	})

	return { lenis }
}
