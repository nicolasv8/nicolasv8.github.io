"use client"

import type { ReactNode } from "react"

export function HeroParallax({ children }: { children: ReactNode }) {
  return (
    <div
      className="nico-hero-stage"
      aria-label="Un vistazo al mundo de Nico"
      onPointerMove={(event) => {
        if (
          event.pointerType !== "mouse" ||
          window.matchMedia("(prefers-reduced-motion: reduce)").matches
        )
          return
        const rect = event.currentTarget.getBoundingClientRect()
        const x = (event.clientX - rect.left) / rect.width - 0.5
        const y = (event.clientY - rect.top) / rect.height - 0.5
        event.currentTarget.style.setProperty("--person-x", `${x * 12}px`)
        event.currentTarget.style.setProperty("--person-y", `${y * 8}px`)
        event.currentTarget.style.setProperty("--halo-x", `${x * -8}px`)
        event.currentTarget.style.setProperty("--halo-y", `${y * -6}px`)
      }}
      onPointerLeave={(event) => {
        for (const property of ["--person-x", "--person-y", "--halo-x", "--halo-y"]) {
          event.currentTarget.style.removeProperty(property)
        }
      }}
    >
      {children}
    </div>
  )
}
