import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

export const discAnimation = () => {
    const transitions = document.querySelectorAll('.js-disc-rotating');

    transitions.forEach((transition) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                scroller: '.js-container-scroll',
                trigger: transition,
                scrub: 1,
                pin: true,
                pinSpacing: false,
                pinType: 'fixed',
                start: 'top top',
                end: 'clamp(bottom bottom)',
                markers: true,
            }
        });

        const wrapperAnim = gsap.from(transition.querySelector('.js-disc-rotating-img-full'), {
            scale: 2.5,
            duration: 1,
            ease: 'sine'
        });

        const discAnim = gsap.from(transition.querySelector('.js-disc-rotating-img-inner'), {
            rotate: -390,
            duration: 1,
            ease: 'sine',
        });

        const balloonAnim = gsap.to(transition.querySelector('.js-disc-rotating-hint'), {
            y: -90,
            opacity: 0,
            filter: 'blur(20px)',
            duration: 0.3,
        });

        const buttonAnim = gsap.from(transition.querySelector('.js-disc-rotating-button'), {
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
    });

    
}
