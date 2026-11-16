"use client"

import { travelPlaces } from "@/lib/travel"
import Image from "next/image"
import { type CSSProperties, useState } from "react"

// The projection matches the locally generated Natural Earth illustration.
function position(latitude: number, longitude: number) {
  return {
    left: `${Number((((longitude + 180) / 360) * 100).toFixed(4))}%`,
    top: `${Number(((((85 - latitude) / 145) * 480 + 20) / 5.2).toFixed(4))}%`,
  }
}

export function TravelMap() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [zoom, setZoom] = useState(1)
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null)
  const selected = travelPlaces[selectedIndex]
  const zoomAnchor = travelPlaces[focusedIndex ?? selectedIndex]
  const selectedPosition = position(zoomAnchor.latitude, zoomAnchor.longitude)
  const picturePlaces = ["londres", "montreal", "pekin", "shanghai"]

  function selectPlace(index: number) {
    setSelectedIndex((index + travelPlaces.length) % travelPlaces.length)
  }

  function openPlace(id: string) {
    const index = travelPlaces.findIndex((place) => place.id === id)
    if (index >= 0) selectPlace(index)
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    document
      .getElementById("explorar")
      ?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" })
    document.getElementById("atlas-title")?.focus({ preventScroll: true })
  }

  return (
    <>
      <section className="travel-intro shell" aria-labelledby="travel-title">
        <div className="travel-intro-copy">
          <p className="travel-kicker">
            <span className="travel-kicker-dot" /> LA VIDA DE NICO / BITÁCORA
          </p>
          <h1 id="travel-title">
            De Medellín
            <br />
            al resto del <em>mapa.</em>
          </h1>
          <p className="travel-intro-description">
            Un pedacito de mi carrete: lugares donde estuve entre 2022 y 2024. Toca un punto y date
            una vuelta.
          </p>
          <a href="#explorar" className="travel-explore-link">
            Explorar el mapa <span aria-hidden="true">↘</span>
          </a>
          <div className="travel-intro-meta" aria-label="Sobre esta selección">
            <span>
              <strong>{String(travelPlaces.length).padStart(2, "0")}</strong> lugares en esta
              selección
            </span>
            <span>
              <strong>04</strong> continentes
            </span>
          </div>
        </div>
        <div className="travel-intro-collage" aria-hidden="true">
          <div className="travel-collage-disc">
            <span>LA VIDA DE NICO</span>
            <b>✳</b>
            <span>DESDE MEDELLÍN</span>
          </div>
          <div className="travel-collage-photo travel-collage-back">
            <Image
              src="/images/travel/nueva-york.webp"
              alt=""
              fill
              sizes="(max-width: 720px) 45vw, 300px"
              priority
            />
          </div>
          <div className="travel-collage-photo travel-collage-front">
            <span className="travel-tape" />
            <Image
              src="/images/travel/londres.webp"
              alt=""
              fill
              sizes="(max-width: 720px) 55vw, 380px"
              priority
            />
            <span className="travel-collage-caption">LONDRES · 2024</span>
          </div>
          <span className="travel-sticker">
            ¡NOS
            <br />
            FUIMOS! <span>↗</span>
          </span>
          <span className="travel-intro-scribble">de mi carrete ✳</span>
        </div>
      </section>

      <section id="explorar" className="travel-atlas" aria-labelledby="atlas-title">
        <div className="shell">
          <div className="travel-section-top">
            <div>
              <p className="travel-kicker">01 / EL MAPA</p>
              <h2 id="atlas-title" tabIndex={-1}>
                Por aquí <em>he andado.</em>
              </h2>
            </div>
            <p>
              Una selección, no la lista completa.
              <br />
              Elige un punto o un lugar de abajo.
            </p>
          </div>

          <div className="travel-map-layout">
            <div className="travel-map-panel">
              <div className="travel-map-bar">
                <span>
                  MI MAPA <span aria-hidden="true">✳</span>
                </span>
                <span>UNA VUELTA POR EL MUNDO</span>
              </div>
              <div className="travel-map-viewport">
                <div
                  className="travel-map-canvas"
                  style={{
                    transform: `scale(${zoom})`,
                    transformOrigin: `calc(${selectedPosition.left} + ${zoomAnchor.nudge?.[0] ?? 0}px) calc(${selectedPosition.top} + ${zoomAnchor.nudge?.[1] ?? 0}px)`,
                  }}
                >
                  <div className="travel-map-grid" />
                  <Image
                    src="/images/world-map.svg"
                    alt=""
                    fill
                    sizes="(max-width: 850px) 100vw, 70vw"
                    className="travel-world"
                  />
                  {travelPlaces.map((place, index) => {
                    const p = position(place.latitude, place.longitude)
                    const style = {
                      ...p,
                      "--pin-x": `${place.nudge?.[0] ?? 0}px`,
                      "--pin-y": `${place.nudge?.[1] ?? 0}px`,
                    } as CSSProperties
                    return (
                      <button
                        key={place.id}
                        className={`travel-pin ${index === selectedIndex ? "is-selected" : ""}`}
                        style={style}
                        type="button"
                        onClick={() => selectPlace(index)}
                        onFocus={() => setFocusedIndex(index)}
                        onBlur={() => setFocusedIndex(null)}
                        aria-label={`${place.city}, ${place.country}`}
                        aria-pressed={index === selectedIndex}
                      >
                        {place.nudge && (
                          <span
                            className="travel-pin-leader"
                            style={{
                              width: `${Number(Math.hypot(place.nudge[0], place.nudge[1]).toFixed(3))}px`,
                              transform: `translate(${-place.nudge[0]}px, ${-place.nudge[1]}px) rotate(${Number(Math.atan2(place.nudge[1], place.nudge[0]).toFixed(4))}rad)`,
                            }}
                            aria-hidden="true"
                          />
                        )}
                        <span className="travel-pin-dot" />
                        {index === selectedIndex && (
                          <span className="travel-pin-label" aria-hidden="true">
                            {place.city}
                          </span>
                        )}
                      </button>
                    )
                  })}
                </div>
                <div className="travel-map-controls">
                  <button
                    type="button"
                    aria-label="Acercar mapa"
                    onClick={() => setZoom((value) => Math.min(2, value + 0.5))}
                    disabled={zoom >= 2}
                  >
                    +
                  </button>
                  <button
                    type="button"
                    aria-label="Alejar mapa"
                    onClick={() => setZoom((value) => Math.max(1, value - 0.5))}
                    disabled={zoom <= 1}
                  >
                    −
                  </button>
                </div>
                <span className="travel-map-compass" aria-hidden="true">
                  N<br />
                  <span>✳</span>
                </span>
              </div>
              <div className="travel-map-foot">
                <span>●&nbsp; {String(travelPlaces.length).padStart(2, "0")} PARADAS</span>
                <a
                  href="https://www.naturalearthdata.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mapa: Natural Earth ↗
                </a>
              </div>
            </div>

            <article className="travel-postcard" aria-label="Lugar seleccionado">
              <div className="travel-postcard-heading">
                <span>UNA FOTO DE MI CARRETE</span>
                <span>
                  {String(selectedIndex + 1).padStart(2, "0")} /{" "}
                  {String(travelPlaces.length).padStart(2, "0")}
                </span>
              </div>
              <div className="travel-postcard-photo" key={selected.id}>
                <Image
                  src={selected.image}
                  alt={selected.imageAlt}
                  fill
                  sizes="(max-width: 850px) 80vw, 28vw"
                />
                <span className="travel-postcard-tape" aria-hidden="true" />
                <span className="travel-postcard-star" aria-hidden="true">
                  ✳
                </span>
              </div>
              <div className="travel-postcard-body" aria-live="polite" aria-atomic="true">
                <span className="sr-only">Foto: {selected.imageAlt}.</span>
                <p className="travel-postcard-location">
                  {selected.country} / {selected.year}
                </p>
                <h3>
                  {selected.city}
                  <span aria-hidden="true">.</span>
                </h3>
                <p className="travel-postcard-note">{selected.note}</p>
                {selected.video && (
                  <a href={selected.video.href} target="_blank" rel="noopener noreferrer">
                    {selected.video.label} ↗
                  </a>
                )}
              </div>
              <div className="travel-postcard-nav">
                <span>CAMBIAR DE LUGAR</span>
                <div>
                  <button
                    type="button"
                    onClick={() => selectPlace(selectedIndex - 1)}
                    aria-label="Lugar anterior"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={() => selectPlace(selectedIndex + 1)}
                    aria-label="Siguiente lugar"
                  >
                    →
                  </button>
                </div>
              </div>
            </article>
          </div>

          <div className="travel-place-picker">
            <span className="travel-picker-title">
              ELIGE UNA PARADA <span aria-hidden="true">↘</span>
            </span>
            <div className="travel-place-buttons">
              {travelPlaces.map((place, index) => (
                <button
                  key={place.id}
                  type="button"
                  onClick={() => selectPlace(index)}
                  aria-pressed={index === selectedIndex}
                >
                  {place.city}
                  <span aria-hidden="true"> ↗</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="travel-gallery shell" aria-labelledby="gallery-title">
        <div className="travel-section-top travel-gallery-head">
          <div>
            <p className="travel-kicker">02 / UNAS CUANTAS POSTALES</p>
            <h2 id="gallery-title">
              Unas <em>postales.</em>
            </h2>
          </div>
          <p>
            De mi carrete al mapa.
            <br />
            Toca una foto para ver el lugar.
          </p>
        </div>
        <div className="travel-gallery-grid">
          {picturePlaces.map((id, index) => {
            const place = travelPlaces.find((item) => item.id === id)
            if (!place) return null
            return (
              <button
                className={`travel-gallery-card travel-gallery-card-${index + 1}`}
                key={place.id}
                type="button"
                onClick={() => openPlace(place.id)}
                aria-label={`Ver ${place.city} en el mapa`}
              >
                <span className="travel-gallery-photo">
                  <Image src={place.image} alt="" fill sizes="(max-width: 720px) 50vw, 25vw" />
                </span>
                <span className="travel-gallery-caption">
                  <strong>{place.city}</strong>
                  <small>{place.year} ↗</small>
                </span>
              </button>
            )
          })}
        </div>
        <div className="travel-closing-note">
          <span aria-hidden="true">✳</span>
          <p>
            Una selección de mis fotos.
            <br />
            <em>El mapa sigue creciendo.</em>
          </p>
        </div>
      </section>
    </>
  )
}
