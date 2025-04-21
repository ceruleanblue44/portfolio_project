import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const textScrollAnimation = () => {
	const textElements = document.querySelectorAll('.js-text')

	textElements.forEach((textEl) => {
		gsap.timeline({
			scrollTrigger: {
				scroller: '.scroll-container',
				trigger: textEl,
				scrub: 3,
				markers: false,
				start: 'top 70%',
				end: 'top 25%',
			}
		})
			.from(textEl, {
				opacity: 0,
				scale: 0.4,
				y: 50,
				rotate: -10,
				ease: 'power2.out',
				duration: 0.6,
			})
			.to(textEl, {
				opacity: 1,
				scale: 1,
				y: 0,
				rotate: 0,
				duration: 1,
				ease: 'elastic.out(1, 0.5)',
			})
			.to(textEl, {
				opacity: 0,
				scale: 0.4,
				y: -30,
				rotate: 10,
				ease: 'power1.inOut',
				duration: 0.6,
			})
	})
}
