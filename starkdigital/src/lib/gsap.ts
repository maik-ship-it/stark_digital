import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

/** Elegant fade up — used for most section elements */
export function fadeUp(elements: string | Element | Element[], delay = 0) {
  gsap.fromTo(
    elements,
    { opacity: 0, y: 24 },
    {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.12,
      delay,
      scrollTrigger: {
        trigger:
          typeof elements === 'string'
            ? elements
            : Array.isArray(elements)
            ? elements[0]
            : elements,
        start: 'top 82%',
        once: true,
      },
    }
  )
}

/** Gold line reveal — for decorative dividers */
export function revealLine(element: Element) {
  gsap.fromTo(
    element,
    { scaleX: 0, transformOrigin: 'left center' },
    {
      scaleX: 1,
      duration: 0.8,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        once: true,
      },
    }
  )
}

/** Counter animation — for stats */
export function animateCounter(element: Element, target: number, suffix = '') {
  const obj = { val: 0 }
  gsap.to(obj, {
    val: target,
    duration: 1.8,
    ease: 'power2.out',
    onUpdate: () => {
      element.textContent = Math.round(obj.val) + suffix
    },
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      once: true,
    },
  })
}

export { gsap, ScrollTrigger }
