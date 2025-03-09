import { gsap } from 'gsap';

const lineColors = {
	red: ["F5678B", "#E20B73", "#F3EA02"], 
	green: ["#5ED8D9", "#029D9C", "#F3EA02"], 
	blue: ["#5ED8D9", "#FF6394", "#A8AFF9", "#F3EA02"],
}

export const headphonesAnimation = (color) => {

	const lineColorsOption = lineColors[color] ?? lineColors.blue

	const lines = gsap.utils.toArray(".line");

	const tl = gsap.timeline().to(".hp", {
		strokeDashoffset: 0,
		duration: 1
	});

	lines.forEach((line, index) => {
		tl.fromTo(
			line,
			{
				scaleY: 0, // Start with no height
				opacity: 0,
				transformOrigin: "center center"
			},
			{
				scaleY: gsap.utils.random(0.5, 1.5), // Vary heights for a dynamic wave effect
				opacity: 1,
				duration: 0.3,
				ease: "power2.out"
			},
			"-=0.2"
		);

		// Make the lines bounce up and down continuously like a soundwave
		gsap.to(line, {
			scaleY: gsap.utils.random(0.5, 1.1), // Random heights for variation
			// repeat: -1,  // Infinite loop
			// yoyo: true,  // Makes it bounce back and forth
			duration: gsap.utils.random(0.2, 0.5), // Different speeds for each line
			ease: "sine.inOut",
			delay: 1.2 + index * 0.1,
			stroke: gsap.utils.wrap(lineColorsOption),
			opacity: gsap.utils.random(0.3, 1),
			repeat: 5,
			yoyo: true,
			// ease: "power1.inOut"
		});
	});
}
