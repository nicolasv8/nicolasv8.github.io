"use client"

import { type VideoCategory, videos } from "@/lib/videos"
import Image from "next/image"
import { useState } from "react"

const filters: { label: string; value: "all" | VideoCategory }[] = [
  { label: "Todos", value: "all" },
  { label: "China", value: "china" },
  { label: "Montreal", value: "montreal" },
  { label: "Un poco de mí", value: "personal" },
]

export function VideoShelf() {
  const [filter, setFilter] = useState<(typeof filters)[number]["value"]>("all")
  const visible = videos.filter((video) => filter === "all" || video.category === filter)

  return (
    <section className="video-shelf" aria-label="Videos de La Vida de Nico">
      <div className="video-shelf-bar">
        <fieldset className="video-filters">
          <legend className="sr-only">Filtrar videos</legend>
          {filters.map((item) => (
            <button
              type="button"
              key={item.value}
              aria-pressed={filter === item.value}
              onClick={() => setFilter(item.value)}
            >
              {item.label}
            </button>
          ))}
        </fieldset>
        <output className="video-count" aria-live="polite">
          {visible.length} {visible.length === 1 ? "video" : "videos"}
        </output>
      </div>
      <div className="video-grid">
        {visible.map((video, index) => (
          <a
            className="video-card"
            href={`https://www.youtube.com/watch?v=${video.id}`}
            key={video.id}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${video.title} · ${video.duration}, ver en YouTube (abre otra pestaña)`}
          >
            <div className="video-cover">
              <Image
                src={`/images/videos/${video.id}.webp`}
                alt=""
                width={800}
                height={450}
                sizes="(max-width: 600px) 90vw, (max-width: 960px) 45vw, 30vw"
                priority={index === 0}
              />
              <span className="video-play" aria-hidden="true">
                ▶
              </span>
              <span className="video-duration">{video.duration}</span>
            </div>
            <div className="video-card-copy">
              <div className="video-card-meta">
                <span>{video.label}</span>
                <span aria-hidden="true">↗</span>
              </div>
              <h2>{video.title}</h2>
              <span className="video-watch">
                Ver en YouTube <span aria-hidden="true">↗</span>
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
