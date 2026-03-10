"use client"

import { useEffect, useState } from "react"

export function SplineScene({ scene, className }: { scene: string; className?: string }) {
  const [Spline, setSpline] = useState<any>(null)

  useEffect(() => {
    import("@splinetool/react-spline").then((mod) => {
      setSpline(() => mod.default)
    })
  }, [])

  if (!Spline) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return <Spline scene={scene} className={className} />
}