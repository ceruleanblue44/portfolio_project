import lottie from 'lottie-web'

const lottieCache = new WeakMap()

export const lottieWords = (el) => {
	if (!lottieCache.has(el)) {
		const instance = lottie.loadAnimation({
			container: el,
			renderer: 'svg',
			loop: false,
			autoplay: false,
			path: '/assets/lottie/words.json',
		})

		lottieCache.set(el, instance)
	}

	const anim = lottieCache.get(el)
	anim?.goToAndPlay(0, true)
}
