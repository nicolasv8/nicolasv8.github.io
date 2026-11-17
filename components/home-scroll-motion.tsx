"use client"

import { useEffect } from "react"

export function HomeScrollMotion() {
  useEffect(() => {
    const sections = document.querySelectorAll(
      ".nico-intro, .nico-curiosity, .nico-map-teaser, .home-running, .nico-video-section"
    )
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add("scene-visible")
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.12 }
    )
    for (const section of sections) observer.observe(section)
    return () => observer.disconnect()
  }, [])
  return null
}
