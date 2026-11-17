"use client"

import { homeImages } from "@/lib/home-images"
import { useEffect, useRef, useState } from "react"

export function HeroPortrait() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [motionAllowed, setMotionAllowed] = useState(false)
  const [videoReady, setVideoReady] = useState(false)
  const [videoVisible, setVideoVisible] = useState(false)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)")
    const update = () => {
      setMotionAllowed(!preference.matches)
      if (preference.matches) {
        setVideoReady(false)
        setVideoVisible(false)
        setPlaying(false)
      }
    }
    update()
    preference.addEventListener("change", update)
    return () => preference.removeEventListener("change", update)
  }, [])

  async function toggleVideo() {
    const video = videoRef.current
    if (!video) return
    if (!video.paused) {
      video.pause()
    } else {
      try {
        await video.play()
      } catch {
        setVideoVisible(false)
      }
    }
  }

  return (
    <>
      <div className={`nico-hero-person ${videoVisible ? "has-video" : ""}`}>
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
        {motionAllowed && (
          <video
            ref={videoRef}
            className="nico-hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            tabIndex={-1}
            onCanPlay={() => setVideoReady(true)}
            onPlaying={() => {
              setVideoVisible(true)
              setPlaying(true)
            }}
            onPause={() => setPlaying(false)}
            onError={() => {
              setVideoReady(false)
              setVideoVisible(false)
              setPlaying(false)
            }}
          >
            <source src="/images/home/nico-schwarzman.mp4" type="video/mp4" />
          </video>
        )}
      </div>
      {videoReady && (
        <button type="button" className="nico-hero-video-toggle" onClick={toggleVideo}>
          {playing ? "Pausar video" : "Reproducir video"}
        </button>
      )}
    </>
  )
}
