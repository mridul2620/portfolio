'use client'

import { Suspense, lazy, useEffect, useRef } from 'react'
import type { Application } from '@splinetool/runtime'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
  mousePosition?: { x: number; y: number }
}

export function SplineScene({ scene, className, mousePosition }: SplineSceneProps) {
  const splineRef = useRef<Application | null>(null)

  const onLoad = (spline: Application) => {
    splineRef.current = spline
  }

  useEffect(() => {
    if (splineRef.current && mousePosition) {
      // Emit mouse move event to the Spline scene with coordinates
      splineRef.current.emitEvent('mouseHover', 'Robot')
    }
  }, [mousePosition])

  return (
    <Suspense 
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            <span className="text-muted-foreground text-sm">Loading 3D Scene...</span>
          </div>
        </div>
      }
    >
      <div 
        className={className}
        style={{
          // Use CSS custom properties to pass mouse position to the scene
          // @ts-expect-error CSS custom properties
          '--mouse-x': mousePosition ? `${mousePosition.x}px` : '50%',
          '--mouse-y': mousePosition ? `${mousePosition.y}px` : '50%',
        }}
      >
        <Spline
          scene={scene}
          className="w-full h-full"
          onLoad={onLoad}
        />
      </div>
    </Suspense>
  )
}
