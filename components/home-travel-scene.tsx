"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"

export function HomeTravelScene() {
  const sceneRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const scene = sceneRef.current
    if (!scene) return
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)")
    let frame = 0
    let visible = false

    function update() {
      frame = 0
      if (!scene || motion.matches || !visible) return
      const rect = scene.getBoundingClientRect()
      const progress = Math.max(
        -1,
        Math.min(1, (window.innerHeight / 2 - (rect.top + rect.height / 2)) / window.innerHeight)
      )
      scene.style.setProperty("--travel-progress", progress.toFixed(3))
    }

    function schedule() {
      if (!frame && visible && !motion.matches) frame = window.requestAnimationFrame(update)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
        if (visible) {
          scene.classList.add("is-in-view")
          schedule()
        }
      },
      { rootMargin: "100px" }
    )
    function motionChanged() {
      if (motion.matches) scene?.style.removeProperty("--travel-progress")
      else schedule()
    }
    observer.observe(scene)
    window.addEventListener("scroll", schedule, { passive: true })
    window.addEventListener("resize", schedule, { passive: true })
    motion.addEventListener("change", motionChanged)
    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", schedule)
      window.removeEventListener("resize", schedule)
      motion.removeEventListener("change", motionChanged)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section className="travel-scene" ref={sceneRef} aria-labelledby="travel-scene-title">
      <div className="travel-scene-inner shell">
        <p className="travel-scene-kicker">
          DE MI CARRETE <span aria-hidden="true">✳</span> PARA EL MAPA
        </p>
        <div className="travel-scene-copy">
          <h2 id="travel-scene-title">
            Unas cuantas <em>vueltas.</em>
          </h2>
          <p>Algunas fotos de mis viajes. Toca una para verla en el mapa.</p>
          <Link href="/mapa" className="travel-scene-link">
            Abrir mi mapa <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="travel-scene-art" aria-label="Postales de Pekín, Shanghái y Londres">
          <span className="travel-scene-orbit" aria-hidden="true" />
          <span className="travel-scene-plane" aria-hidden="true">
            ✈
          </span>
          <Link
            className="travel-scene-card travel-scene-card-beijing"
            href="/mapa/?lugar=pekin#explorar"
            aria-label="Ver Pekín en mi mapa"
          >
            <img
              src="/images/travel/pekin-480.webp"
              srcSet="/images/travel/pekin-480.webp 480w, /images/travel/pekin-960.webp 960w"
              sizes="(max-width: 720px) 45vw, 320px"
              width={960}
              height={1280}
              loading="lazy"
              decoding="async"
              alt=""
            />
            <span>
              <span>
                PEKÍN <b lang="zh-Hans">北京</b>
              </span>
              <small>2023 ↗</small>
            </span>
          </Link>
          <Link
            className="travel-scene-card travel-scene-card-shanghai"
            href="/mapa/?lugar=shanghai#explorar"
            aria-label="Ver Shanghái en mi mapa"
          >
            <img
              src="/images/travel/shanghai-480.webp"
              width={480}
              height={640}
              loading="lazy"
              decoding="async"
              alt=""
            />
            <span>
              <span>
                SHANGHÁI <b lang="zh-Hans">上海</b>
              </span>
              <small>2024 ↗</small>
            </span>
          </Link>
          <Link
            className="travel-scene-card travel-scene-card-london"
            href="/mapa/?lugar=londres#explorar"
            aria-label="Ver Londres en mi mapa"
          >
            <img
              src="/images/travel/londres-480.webp"
              width={480}
              height={360}
              loading="lazy"
              decoding="async"
              alt=""
            />
            <span>
              <span>LONDRES</span>
              <small>2024 ↗</small>
            </span>
          </Link>
          <span className="travel-scene-stamp" aria-hidden="true">
            POSTALES
            <br />
            DE NICO <b>✳</b>
          </span>
        </div>
      </div>
    </section>
  )
}
