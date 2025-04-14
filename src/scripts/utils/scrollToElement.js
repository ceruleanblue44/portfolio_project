import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

export const scrollToElement = (scrollId) => {
	const scrollContainer = document.querySelector('.scroll-container') 
	const scrollElements = [...document.querySelectorAll('.js-scroll-element')]

	if (!scrollElements || !scrollContainer) return

	const scrollElement = scrollElements.find(element => String(element.dataset.scrollId) === String(scrollId))

	const elementPosition = scrollElement.offsetTop

	gsap.to(scrollContainer, {
		duration: 1,
		scrollTo: { y: elementPosition - 73 },
		ease: 'power2.out'
	})
}
