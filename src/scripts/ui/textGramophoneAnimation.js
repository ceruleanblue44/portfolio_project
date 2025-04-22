import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const textGramophoneAnimation = () => {
	const section = document.querySelector('.js-gramophone')
	const textBlocks = gsap.utils.toArray('.js-gramophone-text')
	const textWrapper = document.querySelector('.js-gramophone-text-wrapper')

	let tl = gsap.timeline({
		defaults: {
			ease: 'none',
		},
		scrollTrigger: {
			scroller: '.scroll-container',
			trigger: section,
			pin: true,
			anticipatePin: 1,
			scrub: 2,
			end: () => '+=' + textWrapper.offsetWidth
		}
	})

	tl.to(textWrapper, {
		xPercent: -75,
	})

	textBlocks.forEach(textBlock => {
		tl.from(textBlock, {
			yPercent: -5,
			opacity: 0,
			scrollTrigger: {
				trigger: textBlock,
				start: 'left 65%',
				end: '35% center',
				containerAnimation: tl,
				scrub: true,
				markers: false,
			}
		})
	})
}
