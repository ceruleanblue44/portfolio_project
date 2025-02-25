export const observeAnimation = (fn, ratio, unobserve) => {
	console.log("observing started");

	const anims = document.querySelectorAll('.js-animation');

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) { // More reliable than intersectionRatio
				fn();
				if (unobserve) {
					observer.unobserve(entry.target);
				}
			}
		});
	}, {
		threshold: ratio,
		rootMargin: "50px 0px" // Extends trigger zone slightly
	});

	anims.forEach((anim) => {
		observer.observe(anim);
	});
};
