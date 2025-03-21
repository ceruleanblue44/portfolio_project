import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export const scrollToTop = () => {
	const scrollElement = document.querySelector('.scroll-element');
	const scrollContainer = document.querySelector('.scroll-container'); // Your main wrapper

	if (!scrollElement || !scrollContainer) return;

	// Get the element's position relative to the scroll-container
	const elementPosition = scrollElement.offsetTop;

	// Scroll to the element's top minus 73px (for header)
	gsap.to(scrollContainer, {
		duration: 1,
		scrollTo: { y: elementPosition - 73 },
		ease: 'power2.out'
	});
};
