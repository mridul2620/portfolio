'use client'

import { Suspense, lazy, useEffect, useRef } from 'react'
import type { Application } from '@splinetool/runtime'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
  mousePosition?: { x: number; y: number }
  containerRect?: { width: number; height: number }
}

export function SplineScene({ scene, className, mousePosition, containerRect }: SplineSceneProps) {
  const splineRef = useRef<Application | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const onLoad = (spline: Application) => {
    splineRef.current = spline
  }

  useEffect(() => {
    if (!containerRef.current || !mousePosition || !containerRect) return
    
    // Find the canvas element inside the Spline container
    const canvas = containerRef.current.querySelector('canvas')
    if (!canvas) return

    // Get the canvas bounds
    const canvasRect = canvas.getBoundingClientRect()
    
    // Map the section mouse position to canvas coordinates
    // Normalize the position relative to the container/section dimensions
    const normalizedX = mousePosition.x / containerRect.width
    const normalizedY = mousePosition.y / containerRect.height
    
    // Convert to canvas pixel coordinates
    const canvasX = normalizedX * canvasRect.width
    const canvasY = normalizedY * canvasRect.height
    
    // Create and dispatch a synthetic mouse event on the canvas
    const syntheticEvent = new MouseEvent('mousemove', {
      clientX: canvasRect.left + canvasX,
      clientY: canvasRect.top + canvasY,
      bubbles: true,
      cancelable: true,
      view: window,
    })
    
    canvas.dispatchEvent(syntheticEvent)
  }, [mousePosition, containerRect])

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
      <div ref={containerRef} className={className}>
        <Spline
          scene={scene}
          className="w-full h-full"
          onLoad={onLoad}
        />
      </div>
    </Suspense>
  )
}
