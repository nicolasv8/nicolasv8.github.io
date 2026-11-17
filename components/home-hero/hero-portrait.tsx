"use client"

import { homeImages } from "@/lib/home-images"
import { useEffect, useState } from "react"

export function HeroPortrait() {
  const [motionAllowed, setMotionAllowed] = useState(false)
  const [videoVisible, setVideoVisible] = useState(false)

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)")
    const update = () => {
      setMotionAllowed(!preference.matches)
      if (preference.matches) setVideoVisible(false)
    }
    update()
    preference.addEventListener("change", update)
    return () => preference.removeEventListener("change", update)
  }, [])

  return (
    <>
      <div className="nico-hero-person">
        <img
          src={homeImages.portrait.src}
          srcSet={homeImages.portrait.srcSet}
          alt="Retrato de Nicolás Velasco Pérez"
          width={1600}
          height={2041}
          sizes={homeImages.portrait.sizes}
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </div>
      {motionAllowed && (
        <div className={`nico-hero-video-frame ${videoVisible ? "is-visible" : ""}`}>
          <video
            className="nico-hero-video"
            autoPlay
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
            tabIndex={-1}
            onPlaying={() => setVideoVisible(true)}
            onEnded={() => setVideoVisible(false)}
            onError={() => setVideoVisible(false)}
          >
            <source src="/images/home/nico-saludo.mp4" type="video/mp4" />
          </video>
        </div>
      )}
    </>
  )
}
