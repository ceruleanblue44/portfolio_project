import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

export const vinylAnimation = () => {
	const vinyl = document.querySelector('.js-vinyl')

	const tl = gsap.timeline({
		scrollTrigger: {
			scroller: '.scroll-container',
			trigger: vinyl,
			markers: false,
			start: 'top 75%',
			end: 'bottom top',
			toggleActions: 'play pause resume pause',
		}
	})

	const spin = gsap.from(vinyl, {
		rotate: 180,
		duration: 6,
		repeat: -1,
		ease: 'none'
	})

	tl.add(spin, 0)
}
