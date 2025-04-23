import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'

import lottie from 'lottie-web'
import '@lottiefiles/lottie-player'

gsap.registerPlugin(ScrollTrigger)

export const initLottieScroll = () => {
	document.querySelectorAll('.js-lottie-scroll').forEach(element => {
		let timeLines = []
		let options = {}

		if (element.dataset.preserveAspectRatio) {
			options.rendererSettings = {
				preserveAspectRatio: element.dataset.preserveAspectRatio
			}
		}

		LottieScrollTrigger({
			scroller: '.scroll-container',
			target: element,
			path: element.dataset.src,
			speed: "slow",
			scrub: 5,
			...options,
		})

		function LottieScrollTrigger(vars) {
			let playhead = { frame: 0 },
				target = gsap.utils.toArray(vars.target)[0],
				speeds = { slow: "+=6000", medium: "+=1000", fast: "+=500" },
				st = {
					trigger: target,
					pin: true,
					anticipatePin: 1,
					start: "top top",
					end: speeds[vars.speed] || "+=1000",
					scrub: 5,
					onToggle: vars.onToggle,
				},
				ctx = gsap.context && gsap.context(),
				animation = lottie.loadAnimation({
					container: target,
					renderer: vars.renderer || "svg",
					loop: false,
					autoplay: false,
					path: vars.path,
					rendererSettings: vars.rendererSettings || {
						preserveAspectRatio: "xMidYMid slice",
					},
				})
			for (let p in vars) {
				st[p] = vars[p]
			}

			let createTween = function () {
				animation.frameTween = gsap.to(playhead, {
					frame: animation.totalFrames - 1,
					ease: "none",
					onUpdate: () => {
						animation.goToAndStop(playhead.frame, true)
					},
					scrollTrigger: st,
					onComplete: () => {

					},
				})
				timeLines.push(animation.frameTween)
				return () => animation.destroy && animation.destroy()
			}

			animation.addEventListener("DOMLoaded", function () {
				ctx && ctx.add ? ctx.add(createTween) : createTween()
				// in case there are any other ScrollTriggers on the page and the loading of this Lottie asset caused layout changes
				ScrollTrigger.sort()
				return animation
			})
		}
	})

}