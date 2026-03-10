"use client"

import { useMemo, useRef, useEffect } from "react"
import { gsap, ScrollTrigger } from "@/lib/gsap"

interface Particle {
  id: number
  x: number
  delay: number
}

export default function Particles() {

  const containerRef = useRef<HTMLDivElement>(null)

  const particles = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 8,
    }))
  }, [])

  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.to(containerRef.current, {
        y: -120,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })

    })

    return () => ctx.revert()

  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-20"
    >
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}%`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  )
}