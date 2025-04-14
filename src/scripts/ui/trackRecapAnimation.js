import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const trackRecapAnimation = () => {
	const section = document.querySelector('.js-track-recap')
	const textBlocks = gsap.utils.toArray('.js-track-recap-text')

	ScrollTrigger.create({
		scroller: '.scroll-container',
		trigger: section,
		start: 'top top',
		end: `+=${textBlocks.length * window.innerHeight}`,
		pin: true,
		anticipatePin: 1,
		scrub: true,
		markers: false,

	})

	textBlocks.forEach((text, i) => {
		gsap.fromTo(
			text,
			{ opacity: 0, y: 200 },
			{
				opacity: 1,
				y: -150,
				duration: 0.4,
				scrollTrigger: {
					scroller: '.scroll-container',
					trigger: text,
					start: () => `top+=${i * window.innerHeight} center`,
					end: () => `top+=${(i + 1) * window.innerHeight} center`,
					scrub: true,
					markers: false,
				}
			}
		)

		gsap.to(text, {
			opacity: 0,
			duration: 0.4,
			scrollTrigger: {
				scroller: '.scroll-container',
				trigger: text,
				start: () => `top+=${(i + 1) * window.innerHeight} center`,
				end: () => `top+=${(i + 2) * window.innerHeight} center`,
				scrub: true,
				markers: false,
			}
		})
	})
}
