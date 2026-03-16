import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  // smoother scroll updates
  ScrollTrigger.config({
    ignoreMobileResize: true
  })
}

export { gsap, ScrollTrigger }