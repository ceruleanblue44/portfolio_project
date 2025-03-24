import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

export const discAnimation = () => {
	const disc = document.querySelector('.js-disc-rotating');

	const tl = gsap.timeline({
		scrollTrigger: {
			scroller: '.scroll-container',
			trigger: disc,
			scrub: 1,
			pin: true,
			pinSpacing: false,
			// pinType: 'fixed',
			start: 'top top',
			end: 'clamp(bottom bottom)',
			markers: false,
		}
	});

	const wrapperAnim = gsap.from(disc.querySelector('.js-disc-rotating-img-full'), {
		scale: 2.5,
		duration: 1,
		ease: 'sine'
	});

	const discAnim = gsap.from(disc.querySelector('.js-disc-rotating-img-inner'), {
		rotate: -390,
		duration: 1,
		ease: 'sine',
	});

	const balloonAnim = gsap.to(disc.querySelector('.js-disc-rotating-hint'), {
		y: -90,
		opacity: 0,
		filter: 'blur(20px)',
		duration: 0.3,
	});

	const buttonAnim = gsap.from(disc.querySelector('.js-disc-rotating-button'), {
		y: 90,
		opacity: 0,
		filter: 'blur(20px)',
		pointerEvents: 'none',
		duration: 0.2,
	});

	tl.add(wrapperAnim, 0);
	tl.add(discAnim, 0);
	tl.add(balloonAnim, 0);
	tl.add(buttonAnim, 0.75);
}
