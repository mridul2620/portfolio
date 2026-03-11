'use client'

import dynamic from 'next/dynamic'

const Spline = dynamic(
  () => import('@splinetool/react-spline'),
  { ssr: false }
)

export function SplineScene({ scene, className }: { scene: string; className?: string }) {
  return <Spline scene={scene} className={className} />
}