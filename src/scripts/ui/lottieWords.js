import lottie from 'lottie-web'
import { disableScroll, enableScroll } from '../utils/scrollLock'

const lottieCache = new WeakMap()

export const lottieWords = (el) => {
	if (!lottieCache.has(el)) {
		const anim = lottie.loadAnimation({
			container: el,
			renderer: 'svg',
			loop: false,
			autoplay: false,
			path: '/assets/lottie/words.json',
		})

		anim.addEventListener('complete', () => {
			enableScroll()
		})

		lottieCache.set(el, anim)
	}

	const anim = lottieCache.get(el)

	if (anim) {
		// Scroll to the top of the animation element before playing
		el.scrollIntoView({ behavior: 'smooth', block: 'start' })

		// Small delay to ensure scroll happens before blocking it
		setTimeout(() => {
			disableScroll()
			anim.goToAndPlay(0, true)
		}, 400) // Adjust this delay if needed
	}
}
