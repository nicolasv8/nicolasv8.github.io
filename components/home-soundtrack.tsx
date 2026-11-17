"use client"

import { useState } from "react"

const playlists = [
  { year: "2019", id: "3M2bjxeEzBpifViQqMrtff" },
  { year: "2022", id: "4COq5hk2XEpVASiIJDyUaV" },
  { year: "2023", id: "17O45mhlcdw4C5Tk34kyAq" },
  { year: "2024", id: "44Yc1XsZ9lS6JkTzNbOzbH" },
  { year: "2025", id: "7uAm7cTKP67umQXnGTJBRm" },
]

export function HomeSoundtrack() {
  const [index, setIndex] = useState(playlists.length - 1)
  const playlist = playlists[index]
  return (
    <section className="home-soundtrack" aria-labelledby="soundtrack-title">
      <div className="home-soundtrack-inner shell">
        <div className="home-soundtrack-copy">
          <p className="nico-section-label">MÚSICA</p>
          <h2 id="soundtrack-title">
            Mis canciones, <em>por año.</em>
          </h2>
          <p>Así sonaba mi Spotify en distintos momentos. Escoge un año y dale play.</p>
          <fieldset className="home-soundtrack-years">
            <legend className="sr-only">Elegir año de canciones</legend>
            {playlists.map((item, itemIndex) => (
              <button
                key={item.year}
                type="button"
                aria-pressed={index === itemIndex}
                onClick={() => setIndex(itemIndex)}
              >
                {item.year}
              </button>
            ))}
          </fieldset>
        </div>
        <div className="home-soundtrack-player">
          <iframe
            key={playlist.id}
            title={`Mis canciones favoritas de ${playlist.year} en Spotify`}
            src={`https://open.spotify.com/embed/playlist/${playlist.id}?utm_source=generator`}
            width="100%"
            height="352"
            allow="encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
          <a
            href={`https://open.spotify.com/playlist/${playlist.id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Abrir la lista de {playlist.year} en Spotify ↗
          </a>
        </div>
      </div>
    </section>
  )
}
