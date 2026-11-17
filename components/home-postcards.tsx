"use client"

import Link from "next/link"
import { useRef, useState } from "react"

const postcards = [
  {
    id: "londres",
    city: "Londres",
    year: "2024",
    image: "londres",
    alt: "Nico con la camiseta de Colombia frente a Tower Bridge",
    position: "center",
  },
  {
    id: "montreal",
    city: "Montreal",
    year: "2024",
    image: "montreal",
    alt: "Nico en un pasaje rodeado de plantas",
    position: "50% 42%",
  },
  {
    id: "hong-kong",
    city: "Hong Kong",
    year: "2024",
    image: "hong-kong",
    alt: "Nico con la camiseta de Colombia en Hong Kong",
    position: "center",
  },
] as const

export function HomePostcards() {
  const [index, setIndex] = useState(0)
  const start = useRef<{ x: number; y: number } | null>(null)
  const ignoreClick = useRef(false)
  const card = postcards[index]

  function turn(direction: number) {
    setIndex((current) => (current + direction + postcards.length) % postcards.length)
  }

  return (
    <section className="nico-map-teaser" aria-labelledby="map-teaser-title">
      <div className="nico-map-inner shell">
        <div className="nico-map-copy">
          <p className="nico-section-label">
            <span>03</span> POSTALES Y PARADAS
          </p>
          <h2 id="map-teaser-title">
            Pasaporte
            <br />
            <em>con fotos.</em>
          </h2>
          <p>
            Algunos de los lugares que han quedado en mi cámara. Elige un punto y acompáñame a dar
            una vuelta.
          </p>
          <Link href="/mapa" className="nico-button nico-button-dark">
            Explorar el mapa <span aria-hidden="true">↗</span>
          </Link>
          <span className="nico-map-note">De mi carrete al mapa.</span>
        </div>
        <div className="nico-postcards">
          <div
            className="nico-postcard-stack"
            onPointerMove={(event) => {
              if (
                event.pointerType !== "mouse" ||
                window.matchMedia("(prefers-reduced-motion: reduce)").matches
              )
                return
              const rect = event.currentTarget.getBoundingClientRect()
              event.currentTarget.style.setProperty(
                "--postcard-x",
                `${((event.clientX - rect.left) / rect.width - 0.5) * 8}px`
              )
              event.currentTarget.style.setProperty(
                "--postcard-y",
                `${((event.clientY - rect.top) / rect.height - 0.5) * 8}px`
              )
            }}
            onPointerLeave={(event) => {
              event.currentTarget.style.removeProperty("--postcard-x")
              event.currentTarget.style.removeProperty("--postcard-y")
              start.current = null
            }}
            onPointerDown={(event) => {
              ignoreClick.current = false
              if (event.pointerType === "touch")
                start.current = { x: event.clientX, y: event.clientY }
            }}
            onPointerUp={(event) => {
              if (!start.current || event.pointerType !== "touch") return
              const x = event.clientX - start.current.x
              const y = event.clientY - start.current.y
              start.current = null
              if (Math.abs(x) > 55 && Math.abs(x) > Math.abs(y) * 1.3) {
                ignoreClick.current = true
                turn(x < 0 ? 1 : -1)
              }
            }}
            onClickCapture={(event) => {
              if (ignoreClick.current) {
                event.preventDefault()
                ignoreClick.current = false
              }
            }}
          >
            <span className="nico-postcard-sheet nico-postcard-sheet-back" aria-hidden="true" />
            <span className="nico-postcard-sheet nico-postcard-sheet-middle" aria-hidden="true" />
            <Link
              href={`/mapa/?lugar=${card.id}#explorar`}
              className="nico-map-art"
              aria-label={`${card.city}: ${card.alt}. Ver en el mapa`}
            >
              <span className="nico-map-art-caption">UNA VUELTA POR EL MUNDO &nbsp; ↗</span>
              <img
                key={card.id}
                src={`/images/travel/${card.image}-480.webp`}
                srcSet={`/images/travel/${card.image}-480.webp 480w, /images/travel/${card.image}-960.webp 960w`}
                alt=""
                width={480}
                height={360}
                sizes="(max-width: 720px) 82vw, 430px"
                loading="lazy"
                decoding="async"
                style={{ objectPosition: card.position }}
              />
              <span className="nico-map-art-label" aria-hidden="true">
                <b>{card.city.toUpperCase()}</b>
                <span>{card.year} ↗</span>
              </span>
              <span className="nico-map-art-stamp" aria-hidden="true">
                POSTAL
                <br />
                PARA
                <br />
                TI ✳
              </span>
            </Link>
          </div>
          <div className="nico-postcard-controls">
            <span aria-hidden="true">
              {String(index + 1).padStart(2, "0")} / 03 &nbsp; · &nbsp; MI CARRETE
            </span>
            <span className="sr-only" aria-live="polite">
              Postal {index + 1} de {postcards.length}: {card.city}
            </span>
            <div>
              <button type="button" onClick={() => turn(-1)} aria-label="Postal anterior">
                ←
              </button>
              <button type="button" onClick={() => turn(1)} aria-label="Siguiente postal">
                →
              </button>
            </div>
          </div>
          <p className="nico-postcard-hint">Pasa las fotos y toca una para verla en el mapa.</p>
        </div>
      </div>
    </section>
  )
}
