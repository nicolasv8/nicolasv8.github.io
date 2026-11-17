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
        <h2 id="journey-title">Entre Medellín, Kunshan y Durham.</h2>
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
        <div className="home-journey-stories">
          <a href="/writing/poems/kunshan-y-shanghai/">Un poema entre Kunshan y Shanghái ↗</a>
          <a
            href="https://www.youtube.com/watch?v=56f1HvY4zsg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Un video desde China ↗
          </a>
        </div>
      </div>
    </section>
  )
}
