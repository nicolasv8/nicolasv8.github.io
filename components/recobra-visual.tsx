"use client"

import { useEffect, useRef, useState } from "react"

export function RecobraVisual() {
  const figureRef = useRef<HTMLElement>(null)
  const [started, setStarted] = useState(false)
  const [replay, setReplay] = useState(0)

  useEffect(() => {
    const figure = figureRef.current
    if (!figure) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setStarted(true)
        observer.disconnect()
      },
      { threshold: 0.35 }
    )
    observer.observe(figure)
    return () => observer.disconnect()
  }, [])

  return (
    <figure className="recobra-visual" ref={figureRef}>
      <div className={`recobra-demo ${started ? "is-playing" : ""}`} key={replay}>
        <img
          src="/images/projects/recobra-400.webp"
          srcSet="/images/projects/recobra-400.webp 400w, /images/projects/recobra-641.webp 641w"
          sizes="(max-width: 720px) 200px, 220px"
          width={641}
          height={1024}
          alt="Maqueta de la aplicación Recobra en un celular"
          loading="lazy"
          decoding="async"
        />
        <span className="recobra-demo-card" aria-hidden="true">
          <b>recobra</b>
          <i>◔</i>
        </span>
        <span className="recobra-demo-pulse" aria-hidden="true" />
        <span className="recobra-demo-check" aria-hidden="true">
          ✓
        </span>
      </div>
      <figcaption>La tarjeta y la app · animación ilustrativa</figcaption>
      <button
        type="button"
        className="recobra-replay"
        onClick={() => {
          setStarted(true)
          setReplay((value) => value + 1)
        }}
      >
        Ver de nuevo ↻
      </button>
    </figure>
  )
}
