'use client'

import { useEffect, useRef, useState, type ComponentType } from 'react'

type SplineProps = { scene: string; className?: string }

/**
 * Lazy-loads the Spline runtime and reduces GPU usage when off-screen
 * by hiding the wrapper container (stops compositing without breaking
 * Spline's internal animation state machine).
 */
export function SplineScene({ scene, className }: SplineProps) {
  const [Spline, setSpline] = useState<ComponentType<SplineProps> | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    import('@splinetool/react-spline')
      .then((mod) => setSpline(() => mod.default))
      .catch((err) => console.error('[SplineScene] failed to load:', err))
  }, [])

  // Perf: Hide the container when off-screen to stop GPU compositing.
  // visibility:hidden keeps layout stable but skips paint/composite.
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { rootMargin: '300px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  if (!Spline) return <div ref={containerRef} className={className} />

  return (
    <div
      ref={containerRef}
      className={className}
      style={isVisible ? undefined : { visibility: 'hidden' }}
    >
      <Spline scene={scene} className="w-full h-full" />
    </div>
  )
}