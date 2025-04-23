import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const textScrollAnimation = () => {
	const textElements = document.querySelectorAll('.js-text')

	const isMobile = window.matchMedia('(max-width: 768px)').matches

	textElements.forEach((textEl, index) => {
		gsap.fromTo(textEl, {
			opacity: 0,
			scale: 0.8,
			y: 30,
			rotate: -5
		}, {
			opacity: 1,
			scale: 1,
			y: 0,
			rotate: 0,
			duration: 0.6,
			ease: 'power2.out',
			delay: index * 0.2,
			scrollTrigger: {
				trigger: textEl,
				scroller: '.scroll-container',
				start: isMobile ? 'top 90%' : 'top 80%',
				end: isMobile ? 'top 15%' : 'top 25%',
				toggleActions: 'play reverse play reverse',
			}
		})
	})
}
