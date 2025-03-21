import { ScrollTrigger } from "gsap/ScrollTrigger"

export const refreshScrollTrigger = () => {
	setTimeout(() => {
		ScrollTrigger.refresh()
	}, 100)
}