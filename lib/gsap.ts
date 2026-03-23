import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  // Prevent stutter when the user switches tabs and comes back
  gsap.ticker.lagSmoothing(0)

  // Ignore mobile resize events (virtual keyboard appearance, etc.)
  ScrollTrigger.config({ ignoreMobileResize: true })

  // Recalculate scroll positions after all web fonts have loaded so that
  // any layout shift caused by font swap doesn't break ScrollTrigger pin maths
  if (document.fonts?.ready) {
    document.fonts.ready.then(() => ScrollTrigger.refresh())
  }
}

export { gsap, ScrollTrigger }