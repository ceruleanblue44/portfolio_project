import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const textGramophoneAnimation = () => {
	const section = document.querySelector('.js-gramophone'); // The entire section
	const textBlocks = gsap.utils.toArray('.js-gramophone-text'); // All text blocks

	console.log(section, textBlocks);

	// Pin the section so it stays in place
	ScrollTrigger.create({
		scroller: '.ps',
		trigger: section,
		start: 'top top',
		end: `+=${textBlocks.length * window.innerHeight}`, // Scroll duration based on number of blocks
		pin: true,
		anticipatePin: 1,
		scrub: true,
		markers: true,

	});

	// Animate text blocks one by one
	textBlocks.forEach((text, i) => {
		gsap.fromTo(
			text,
			{ opacity: 0, y: 100 },
			{
				opacity: 1,
				y: -150,
				duration: 0.4,
				scrollTrigger: {
					scroller: '.ps',
					trigger: text,
					start: () => `top+=${i * window.innerHeight} center`,
					end: () => `top+=${(i + 1) * window.innerHeight} center`,
					scrub: true, 
					markers: true,
				}
			}
		);

		gsap.to(text, {
			opacity: 0,
			// y: -100,
			duration: 0.4,
			scrollTrigger: {
				scroller: '.ps',
				trigger: text,
				start: () => `top+=${(i + 1) * window.innerHeight} center`,
				end: () => `top+=${(i + 2) * window.innerHeight} center`,
				scrub: true,
				markers: true,
			}
		});
	});
};
