'use client'

import { useEffect, useState, type ComponentType } from 'react'

type SplineProps = { scene: string; className?: string }

export function SplineScene({ scene, className }: SplineProps) {
  const [Spline, setSpline] = useState<ComponentType<SplineProps> | null>(null)

  useEffect(() => {
    import('@splinetool/react-spline')
      .then((mod) => setSpline(() => mod.default))
      .catch((err) => console.error('[SplineScene] failed to load:', err))
  }, [])

  if (!Spline) return null

  return <Spline scene={scene} className={className} />
}