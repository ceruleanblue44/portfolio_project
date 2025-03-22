import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

export const scrollToElement = (scrollId) => {
	const scrollContainer = document.querySelector('.scroll-container') 
	const scrollElements = [...document.querySelectorAll('.js-scroll-element')]

	if (!scrollElements || !scrollContainer) return

	const scrollElement = scrollElements.find(element => String(element.dataset.scrollId) === String(scrollId))

	// Get the element's position relative to the scroll-container
	const elementPosition = scrollElement.offsetTop

	// Scroll to the element's top minus 73px (for header)
	gsap.to(scrollContainer, {
		duration: 1,
		scrollTo: { y: elementPosition - 73 },
		ease: 'power2.out'
	})
}
