import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const textAnimation = () => {
	const textCard = document.querySelectorAll('.js-text-card')
	const text1 = document.querySelectorAll('.js-text-1')
	const text2 = document.querySelectorAll('.js-text-2')
	const tl = gsap.timeline({
		scrollTrigger: {
			scroller: '.ps',
			trigger: textCard,
			markers: false,
			start: 'top 85%',
			end: 'top top'
		}
	})
	tl.from(text1, { opacity: 0, duration: 3, scale: 0, ease: 'back' })
		.fromTo(
			text2,
			{ opacity: 0, duration: 2.5, y: -50, scale: 0.5, ease: 'back' },
			{ opacity: 1, scale: 1, y: 0, duration: 2.5, ease: 'back' },
			'-=2.0'
		)
		.to(text1, { opacity: 0, duration: 3, y: -50, ease: 'back' }, '-=0.5')
		.to(text2, { y: -40, duration: 1 }, '-=2.5')
}
