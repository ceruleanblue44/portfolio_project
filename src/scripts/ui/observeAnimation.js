export const observeAnimation = (fn, path) => {
	console.log("observing started");

	const anims = document.querySelectorAll('.js-animation')

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.intersectionRatio > 0.9) {
				fn(path);
			}
		})
	})

	anims.forEach((anim) => {
		observer.observe(anim);
	})
}