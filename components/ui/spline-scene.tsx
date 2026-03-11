'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

const Spline = dynamic(
  () => import('@splinetool/react-spline'),
  { ssr: false }
)

export function SplineScene({ scene, className }: { scene: string; className?: string }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return <Spline scene={scene} className={className} />
}