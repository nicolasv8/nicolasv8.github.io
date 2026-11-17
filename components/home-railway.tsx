"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export function HomeRailway() {
  const sceneRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [destination, setDestination] = useState<"shanghai" | "kunshan">("shanghai")

  useEffect(() => {
    const scene = sceneRef.current
    if (!scene) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setVisible(true)
        observer.disconnect()
      },
      { threshold: 0.3 }
    )
    observer.observe(scene)
    return () => observer.disconnect()
  }, [])

  const next = destination === "shanghai" ? "Kunshan" : "Shanghái"
  return (
    <section className="home-railway" ref={sceneRef} aria-labelledby="railway-title">
      <div className="home-railway-inner shell">
        <div className="home-railway-copy">
          <p className="nico-section-label">DOS CIUDADES · UN POEMA</p>
          <h2 id="railway-title">
            Kunshan y <em>Shanghái.</em>
          </h2>
          <p>Un trayecto que inspiró uno de mis poemas.</p>
          <Link href="/writing/poems/kunshan-y-shanghai/" className="home-railway-poem">
            Leer el poema ↗
          </Link>
        </div>
        <div className="home-railway-scene">
          <div className="home-railway-stations" aria-hidden="true">
            <span>
              昆山 <small>KUNSHAN</small>
            </span>
            <span>
              上海 <small>SHANGHÁI</small>
            </span>
          </div>
          <div
            className={`home-railway-track ${visible ? "is-moving" : ""}`}
            data-destination={destination}
            aria-hidden="true"
          >
            <span className="home-railway-sun" />
            <span className="home-railway-train" key={destination}>
              <svg
                aria-hidden="true"
                viewBox="0 0 220 58"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 40V18c0-7 5-12 12-12h132c23 0 44 10 59 27 4 4 2 11-4 11H18c-5 0-9-2-9-4Z"
                  fill="#fff9e9"
                  stroke="#193b31"
                  strokeWidth="3"
                />
                <path d="M15 34h186" stroke="#d56845" strokeWidth="5" />
                <path
                  d="M25 14h30v12H25zm38 0h30v12H63zm38 0h30v12h-30zm38 0h19c11 0 22 5 31 12h-50z"
                  fill="#31594e"
                />
                <path d="M34 47h151" stroke="#193b31" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </div>
          <div className="home-railway-actions">
            <button
              type="button"
              onClick={() => {
                setVisible(true)
                setDestination(destination === "shanghai" ? "kunshan" : "shanghai")
              }}
            >
              Llevar el tren a {next} →
            </button>
            <Link href={`/mapa/?lugar=${destination}#explorar`}>
              Ver {destination === "shanghai" ? "Shanghái" : "Kunshan"} en el mapa ↗
            </Link>
          </div>
          <p className="sr-only" aria-live="polite">
            Destino: {destination === "shanghai" ? "Shanghái" : "Kunshan"}.
          </p>
        </div>
      </div>
    </section>
  )
}
