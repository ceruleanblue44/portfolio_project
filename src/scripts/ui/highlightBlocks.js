import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const highlightBlocks = () => {
	const blocks = document.querySelectorAll('.js-block');

	blocks.forEach((block) => {
		gsap.timeline({
			scrollTrigger: {
				scroller: '.ps',
				trigger: block,
				scrub: 1,
				markers: true,
				start: 'top 40%',
				end: 'bottom 40%',
				toggleClass: 'active',
			}
		});
	})
}
