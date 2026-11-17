"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

const stops = [
  { id: "medellin", name: "Medellín", detail: "Colombia" },
  { id: "kunshan", name: "Kunshan", detail: "昆山 · China" },
  { id: "durham", name: "Durham", detail: "Estados Unidos" },
]

export function HomeJourney() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`home-journey ${visible ? "is-visible" : ""}`}
      aria-labelledby="journey-title"
    >
      <div className="shell">
        <p className="nico-section-label">UNA PARTE DEL CAMINO</p>
        <h2 id="journey-title">Tres lugares, muchas historias.</h2>
        <p>De Medellín a mis años de universidad en China y Estados Unidos.</p>
        <div className="home-journey-stops">
          <span className="home-journey-plane" aria-hidden="true">
            ✈
          </span>
          {stops.map((stop) => (
            <Link key={stop.id} href={`/mapa/?lugar=${stop.id}#explorar`}>
              <span className="home-journey-dot" aria-hidden="true" />
              <strong>{stop.name}</strong>
              <small>{stop.detail}</small>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
