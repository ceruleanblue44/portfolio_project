export const observeAnimation = (fn, ratio, unobserve) => {
	const anims = document.querySelectorAll('.js-animation')

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				fn()
				if (unobserve) {
					observer.unobserve(entry.target)
				}
			}
		})
	}, {
		threshold: ratio,
		rootMargin: "50px 0px"
	})

	anims.forEach((anim) => {
		observer.observe(anim)
	})
}
