import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const textGramophoneAnimation = () => {
	const section = document.querySelector('.js-gramophone') // The entire section
	const textBlocks = gsap.utils.toArray('.js-gramophone-text') // All text blocks

	const textWrapper = document.querySelector('.js-gramophone-text-wrapper')

	// Pin the section so it stays in place
	// ScrollTrigger.create({
	// 	scroller: '.scroll-container',
	// 	trigger: section,
	// 	start: 'top top',
	// 	end: `+=${textBlocks.length * window.innerHeight}`, // Scroll duration based on number of blocks
	// 	pin: true,
	// 	anticipatePin: 1,
	// 	scrub: true,
	// 	markers: false,
	// })

	let tl = gsap.timeline({
		defaults: {
			ease: 'none',
		},
		scrollTrigger: {
			scroller: '.scroll-container',
			trigger: section,
			pin: true,
			anticipatePin: 1,
			scrub: true,
			end: () => '+=' + textWrapper.offsetWidth
		}
	})

	tl.to(textWrapper, {
		xPercent: -75
	})

	textBlocks.forEach(textBlock => {
		tl.from(textBlock, {
			yPercent: -5,
			opacity: 0,
			// scale: 0.5,
			scrollTrigger: {
				// scroller: '.scroll-container',
				trigger: textBlock,
				start: 'left 65%',
				end: '35% center',
				containerAnimation: tl,
				scrub: 2,
				markers: true,
			}
		})
	})

	// Animate text blocks one by one
	// textBlocks.forEach((text, i) => {
	// 	gsap.fromTo(
	// 		text,
	// 		{ opacity: 0, y: 100 },
	// 		{
	// 			opacity: 1,
	// 			y: () => window.innerWidth < 768 ? -50 : -180,
	// 			duration: 0.4,
	// 			scrollTrigger: {
	// 				scroller: '.scroll-container',
	// 				trigger: text,
	// 				start: () => `top+=${i * window.innerHeight} center`,
	// 				end: () => `top+=${(i + 1) * window.innerHeight} center`,
	// 				scrub: true,
	// 				markers: false,
	// 			}
	// 		}
	// 	)

	// 	gsap.to(text, {
	// 		opacity: 0,
	// 		// y: -100,
	// 		duration: 0.4,
	// 		scrollTrigger: {
	// 			scroller: '.scroll-container',
	// 			trigger: text,
	// 			start: () => `top+=${(i + 1) * window.innerHeight} center`,
	// 			end: () => `top+=${(i + 2) * window.innerHeight} center`,
	// 			scrub: true,
	// 			markers: false,
	// 		}
	// 	})
	// })
}
