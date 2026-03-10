"use client"

import { ReactNode } from "react"
import dynamic from "next/dynamic"

const GlowingEffect = dynamic(
  () => import("@/components/ui/glowing-effect").then((m) => m.GlowingEffect),
  { ssr: false }
)

interface GlowCardProps {
  children: ReactNode
  className?: string
}

export default function GlowCard({ children, className }: GlowCardProps) {
  return (
    <div className="relative p-[2px] rounded-xl">
      <GlowingEffect
        spread={30}
        glow
        disabled={false}
        proximity={80}
        inactiveZone={0.01}
        borderWidth={2}
      />

      <div
        className={`relative rounded-xl bg-card/70 border border-border backdrop-blur-md p-4 ${className}`}
      >
        {children}
      </div>
    </div>
  )
}