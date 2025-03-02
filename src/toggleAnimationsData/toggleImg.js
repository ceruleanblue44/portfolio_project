import gsap from "gsap"

export const toggleImg = {
	tweens: [
		() => gsap.to('#toggle-img-1-1', {
			duration: 0.3,
			scale: 0.8,
			transformOrigin: 'top left'
		}),
		() => gsap.from('#toggle-img-1-2', {
			duration: 0.3,
			opacity: 0,
			yPercent: 50,
			rotate: -90,
			scale: 0.5,
		}),
	],
	labelTexts: {
		left: 'Специалист',
		right: 'Руководитель'
	}
}