"use client"

import { useEffect } from "react"
import Lenis from "lenis"
import { ScrollTrigger } from "@/lib/gsap"

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      syncTouch: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Sync GSAP ScrollTrigger with Lenis
    lenis.on("scroll", () => {
      ScrollTrigger.update()
    })

    ScrollTrigger.addEventListener("refresh", () => lenis.resize())
    ScrollTrigger.refresh()

    return () => {
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}