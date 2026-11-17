"use client"

import { PassportOpening } from "@/components/passport-opening"
import { travelPlaces } from "@/lib/travel"
import { type RegionId, regionForPlace, regions } from "@/lib/travel-regions"
import Image from "next/image"
import { type CSSProperties, useEffect, useLayoutEffect, useRef, useState } from "react"

// The projection matches the locally generated Natural Earth illustration.
function position(latitude: number, longitude: number) {
  return {
    left: `${Number((((longitude + 180) / 360) * 100).toFixed(4))}%`,
    top: `${Number(((((85 - latitude) / 145) * 480 + 20) / 5.2).toFixed(4))}%`,
  }
}

export function TravelMap() {
  const [selectedIndex, setSelectedIndex] = useState(() =>
    travelPlaces.findIndex((place) => place.id === "medellin")
  )
  const [zoom, setZoom] = useState(1)
  const [passportOpen, setPassportOpen] = useState(false)
  const passportTimer = useRef<number | null>(null)
  const [view, setView] = useState<RegionId | "world">("world")
  const backRef = useRef<HTMLButtonElement>(null)
  const postcardRef = useRef<HTMLElement>(null)
  const postcardTitleRef = useRef<HTMLHeadingElement>(null)
  const surpriseRef = useRef<HTMLButtonElement>(null)
  const revealSurprise = useRef<number | null>(null)
  const revealFromPicker = useRef<{ index: number; view: RegionId | "world" } | null>(null)
  const zoomInRef = useRef<HTMLButtonElement>(null)
  const zoomOutRef = useRef<HTMLButtonElement>(null)
  const zoomFocusAfter = useRef<"in" | "out" | null>(null)
  const focusAfterView = useRef<"back" | RegionId | null>(null)
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null)
  const [stamps, setStamps] = useState<string[]>([])
  const galleryRef = useRef<HTMLElement>(null)
  const pointerDown = useRef(false)
  const selected = travelPlaces[selectedIndex]
  const zoomPlace = travelPlaces[focusedIndex ?? selectedIndex]
  const anchorRegion = regionForPlace(zoomPlace.id)
  const zoomAnchor = anchorRegion
    ? (travelPlaces.find((place) => place.id === regions[anchorRegion].center) ?? zoomPlace)
    : zoomPlace
  const anchorNudge = anchorRegion ? regions[anchorRegion].worldNudge : zoomAnchor.nudge
  const selectedPosition = position(zoomAnchor.latitude, zoomAnchor.longitude)
  const picturePlaces = ["londres", "montreal", "hong-kong", "shanghai"]

  useEffect(() => {
    const gallery = galleryRef.current
    if (!gallery) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        gallery.classList.add("is-in-view")
        observer.disconnect()
      },
      { threshold: 0.15 }
    )
    observer.observe(gallery)
    return () => observer.disconnect()
  }, [])

  useEffect(
    () => () => {
      if (passportTimer.current !== null) window.clearTimeout(passportTimer.current)
    },
    []
  )

  function openPassport(fromIntro = false) {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (passportTimer.current !== null) window.clearTimeout(passportTimer.current)
    const showMap = () => {
      document
        .getElementById("explorar")
        ?.scrollIntoView({ behavior: reducedMotion ? "instant" : "smooth", block: "start" })
      document.getElementById("atlas-title")?.focus({ preventScroll: true })
    }
    if (passportOpen || reducedMotion) {
      setPassportOpen(true)
      showMap()
      return
    }
    const animatePassport = () => {
      setPassportOpen(true)
      passportTimer.current = window.setTimeout(showMap, 1000)
    }
    if (fromIntro && window.innerWidth <= 720) {
      document
        .querySelector(".passport-book")
        ?.scrollIntoView({ behavior: "smooth", block: "center" })
      passportTimer.current = window.setTimeout(animatePassport, 600)
    } else {
      animatePassport()
    }
  }

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("lugar")
    if (
      requested &&
      requested !== selected.id &&
      travelPlaces.some((place) => place.id === requested)
    )
      return
    setStamps((previous) =>
      previous.includes(selected.id) ? previous : [...previous, selected.id]
    )
  }, [selected.id])

  useEffect(() => {
    const releasePointer = () => {
      pointerDown.current = false
    }
    window.addEventListener("pointerup", releasePointer)
    window.addEventListener("pointercancel", releasePointer)
    window.addEventListener("blur", releasePointer)
    return () => {
      window.removeEventListener("pointerup", releasePointer)
      window.removeEventListener("pointercancel", releasePointer)
      window.removeEventListener("blur", releasePointer)
    }
  }, [])

  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("lugar")
    const index = travelPlaces.findIndex((place) => place.id === id)
    if (index >= 0) {
      setSelectedIndex(index)
      setView(regionForPlace(travelPlaces[index].id) ?? "world")
    }
  }, [])

  useEffect(() => {
    function restorePlace() {
      const id = new URLSearchParams(window.location.search).get("lugar")
      const found = travelPlaces.findIndex((place) => place.id === id)
      const next = found >= 0 ? found : travelPlaces.findIndex((place) => place.id === "medellin")
      const nextView = found >= 0 ? (regionForPlace(travelPlaces[next].id) ?? "world") : "world"
      if (next === selectedIndex && (found >= 0 || view === "world")) return

      if (view !== nextView) {
        const focused = document.activeElement
        if (
          focused instanceof HTMLElement &&
          focused.closest(
            ".travel-map-controls, .travel-map-return, .travel-map-canvas, .travel-region-canvas, .travel-region-places"
          )
        ) {
          document.getElementById("atlas-title")?.focus({ preventScroll: true })
        }
        setZoom(1)
      }
      revealSurprise.current = null
      revealFromPicker.current = null
      focusAfterView.current = null
      setSelectedIndex(next)
      setFocusedIndex(null)
      setView(nextView)
    }
    window.addEventListener("popstate", restorePlace)
    return () => window.removeEventListener("popstate", restorePlace)
  }, [selectedIndex, view])

  useEffect(() => {
    if (focusAfterView.current === "back" && view !== "world") backRef.current?.focus()
    else if (focusAfterView.current && focusAfterView.current !== "back" && view === "world")
      document.getElementById(`travel-cluster-${focusAfterView.current}`)?.focus()
    focusAfterView.current = null
  }, [view])

  useEffect(() => {
    if (zoom === 1 && zoomFocusAfter.current === "in") zoomInRef.current?.focus()
    if (zoom === 2 && zoomFocusAfter.current === "out") zoomOutRef.current?.focus()
    zoomFocusAfter.current = null
  }, [zoom])

  useLayoutEffect(() => {
    const target = revealSurprise.current
    revealSurprise.current = null
    if (target === null || target !== selectedIndex) return
    const card = postcardRef.current?.getBoundingClientRect()
    const button = surpriseRef.current?.getBoundingClientRect()
    if (!card || !button) return
    const padding = 16
    if (card.top < 0 || button.top < 0 || button.bottom > window.innerHeight) {
      const delta = Math.max(card.top - padding, button.bottom - window.innerHeight + padding)
      window.scrollBy({ top: delta, behavior: "instant" })
    }
  }, [selectedIndex])

  useLayoutEffect(() => {
    const target = revealFromPicker.current
    revealFromPicker.current = null
    if (target?.index === selectedIndex && target.view === view) revealPostcard()
  }, [selectedIndex, view])

  function revealPostcard() {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    postcardTitleRef.current?.focus({ preventScroll: true })
    postcardRef.current?.scrollIntoView({
      behavior: reducedMotion ? "instant" : "smooth",
      block: "start",
    })
  }

  function selectPlace(index: number) {
    const next = (index + travelPlaces.length) % travelPlaces.length
    setSelectedIndex(next)
    setFocusedIndex(null)
    const nextView = regionForPlace(travelPlaces[next].id) ?? "world"
    if (nextView !== view) setZoom(1)
    setView(nextView)
    const url = new URL(window.location.href)
    if (url.searchParams.get("lugar") !== travelPlaces[next].id) {
      url.searchParams.set("lugar", travelPlaces[next].id)
      window.history.replaceState(null, "", url)
    }
  }

  function selectFromPicker(index: number) {
    const nextView = regionForPlace(travelPlaces[index].id) ?? "world"
    if (index === selectedIndex && nextView === view) {
      selectPlace(index)
      revealPostcard()
      return
    }
    revealFromPicker.current = { index, view: nextView }
    selectPlace(index)
  }

  function openRegion(id: RegionId) {
    focusAfterView.current = "back"
    const index =
      regionForPlace(selected.id) === id
        ? selectedIndex
        : travelPlaces.findIndex((place) => place.id === regions[id].center)
    selectPlace(index)
  }

  function surprisePlace() {
    const choice = Math.floor(Math.random() * (travelPlaces.length - 1))
    const index = choice >= selectedIndex ? choice + 1 : choice
    revealSurprise.current =
      (regionForPlace(travelPlaces[index].id) ?? "world") !== view ? index : null
    selectPlace(index)
  }

  function returnToWorld() {
    if (view !== "world") focusAfterView.current = view
    setZoom(1)
    setFocusedIndex(null)
    setView("world")
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
            Algunos lugares donde he estado. Toca un punto para explorarlos.
          </p>
          <button type="button" className="travel-explore-link" onClick={() => openPassport(true)}>
            Abrir el mapa <span aria-hidden="true">↘</span>
          </button>
          <div className="travel-intro-meta" aria-label="Sobre esta selección">
            <span>
              <strong>{String(travelPlaces.length).padStart(2, "0")}</strong> lugares en esta
              selección
            </span>
            <span>
              <strong>03</strong> continentes
            </span>
          </div>
        </div>
        <PassportOpening open={passportOpen} onOpen={() => openPassport()} />
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
              Los puntos son aproximados. Elige uno para explorar.
            </p>
          </div>

          <div className="travel-map-layout">
            <div className="travel-map-panel">
              <div className="travel-map-bar">
                <span>
                  {" "}
                  {view === "world" ? "MI MAPA" : regions[view].label.toUpperCase()}{" "}
                  <span aria-hidden="true">✳</span>
                </span>
                {view === "world" ? (
                  <div className="travel-map-bar-actions">
                    <span className="travel-map-bar-caption">UNA VUELTA POR EL MUNDO</span>
                    <div className="travel-map-controls">
                      <button
                        type="button"
                        ref={zoomInRef}
                        aria-label="Acercar mapa"
                        onFocus={() => setFocusedIndex(null)}
                        onClick={(event) => {
                          setFocusedIndex(null)
                          if (
                            event.detail === 0 &&
                            document.activeElement === event.currentTarget &&
                            zoom === 1.5
                          )
                            zoomFocusAfter.current = "out"
                          setZoom((value) => Math.min(2, value + 0.5))
                        }}
                        disabled={zoom >= 2}
                      >
                        +
                      </button>
                      <button
                        type="button"
                        ref={zoomOutRef}
                        aria-label="Alejar mapa"
                        onFocus={() => setFocusedIndex(null)}
                        onClick={(event) => {
                          setFocusedIndex(null)
                          if (
                            event.detail === 0 &&
                            document.activeElement === event.currentTarget &&
                            zoom === 1.5
                          )
                            zoomFocusAfter.current = "in"
                          setZoom((value) => Math.max(1, value - 0.5))
                        }}
                        disabled={zoom <= 1}
                      >
                        −
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    type="button"
                    className="travel-map-return"
                    ref={backRef}
                    onClick={returnToWorld}
                    aria-label="Volver al mapa del mundo"
                  >
                    <span className="travel-map-return-long" aria-hidden="true">
                      ← Volver al mundo
                    </span>
                    <span className="travel-map-return-short" aria-hidden="true">
                      ← Mundo
                    </span>
                  </button>
                )}
              </div>
              <div className={`travel-map-viewport ${view !== "world" ? "is-region" : ""}`}>
                {view === "world" ? (
                  <div
                    className="travel-map-canvas"
                    style={{
                      transform: `scale(${zoom})`,
                      transformOrigin: `calc(${selectedPosition.left} + ${anchorNudge?.[0] ?? 0}px) calc(${selectedPosition.top} + ${anchorNudge?.[1] ?? 0}px)`,
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
                      if (regionForPlace(place.id)) return null
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
                          onPointerDown={() => {
                            pointerDown.current = true
                          }}
                          onFocus={() => {
                            if (!pointerDown.current) setFocusedIndex(index)
                          }}
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
                            <span
                              className={`travel-pin-label ${place.id === "amsterdam" ? "is-side is-left" : place.id === "montreal" ? "is-side" : ""}`}
                              aria-hidden="true"
                            >
                              {place.city}
                            </span>
                          )}
                        </button>
                      )
                    })}
                    {(Object.keys(regions) as RegionId[]).map((id) => {
                      const region = regions[id]
                      const index = travelPlaces.findIndex((place) => place.id === region.center)
                      const place = travelPlaces[index]
                      return (
                        <button
                          key={id}
                          id={`travel-cluster-${id}`}
                          type="button"
                          className={`travel-cluster ${regionForPlace(selected.id) === id ? "is-selected" : ""}`}
                          style={
                            {
                              ...position(place.latitude, place.longitude),
                              "--cluster-x": `${region.worldNudge[0]}px`,
                              "--cluster-y": `${region.worldNudge[1]}px`,
                            } as CSSProperties
                          }
                          onClick={() => openRegion(id)}
                          onPointerDown={() => {
                            pointerDown.current = true
                          }}
                          onFocus={() => {
                            if (!pointerDown.current) setFocusedIndex(index)
                          }}
                          aria-label={`${region.label}, ${region.ids.length} paradas. Abrir región`}
                        >
                          <span
                            className="travel-pin-leader"
                            style={{
                              width: `${Number(Math.hypot(...region.worldNudge).toFixed(3))}px`,
                              transform: `translate(${-region.worldNudge[0]}px, ${-region.worldNudge[1]}px) rotate(${Number(Math.atan2(region.worldNudge[1], region.worldNudge[0]).toFixed(4))}rad)`,
                            }}
                            aria-hidden="true"
                          />
                          <span className="travel-cluster-count" aria-hidden="true">
                            {region.ids.length}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                ) : (
                  <div className="travel-region-canvas" key={view}>
                    <div className="travel-map-grid" />
                    <Image
                      src={`/images/travel/map-${view}.svg`}
                      alt=""
                      fill
                      sizes="(max-width: 850px) 100vw, 70vw"
                      className="travel-region-world"
                    />
                    {regions[view].ids.map((id, number) => {
                      const index = travelPlaces.findIndex((place) => place.id === id)
                      const place = travelPlaces[index]
                      const [west, east, south, north] = regions[view].bounds
                      const x = (place.longitude - west) / (east - west)
                      const y = (north - place.latitude) / (north - south)
                      const [dx, dy] = (regions[view].nudges as Record<string, [number, number]>)[
                        id
                      ] ?? [0, 0]
                      const style = {
                        left: `calc(${Number((x * 100).toFixed(4))}% + ${Number((20 - 40 * x + dx).toFixed(4))}px)`,
                        top: `calc(${Number((y * 100).toFixed(4))}% + ${Number((20 - 40 * y + dy).toFixed(4))}px)`,
                      }
                      return (
                        <button
                          key={id}
                          type="button"
                          className={`travel-region-pin ${index === selectedIndex ? "is-selected" : ""}`}
                          style={style}
                          aria-label={`${place.city}, ${place.country}`}
                          aria-pressed={index === selectedIndex}
                          onClick={() => selectPlace(index)}
                        >
                          {(dx !== 0 || dy !== 0) && (
                            <span
                              className="travel-pin-leader"
                              style={{
                                width: `${Number(Math.hypot(dx, dy).toFixed(3))}px`,
                                transform: `translate(${-dx}px, ${-dy}px) rotate(${Number(Math.atan2(dy, dx).toFixed(4))}rad)`,
                              }}
                              aria-hidden="true"
                            />
                          )}
                          <span className="travel-region-number" aria-hidden="true">
                            {number + 1}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                )}
                <span className="travel-map-compass" aria-hidden="true">
                  N<br />
                  <span>✳</span>
                </span>
              </div>
              {view === "world" && (
                <div className="travel-region-places" aria-label="Abrir una región">
                  {(Object.keys(regions) as RegionId[]).map((id) => (
                    <button type="button" key={id} onClick={() => openRegion(id)}>
                      {regions[id].label} · {regions[id].ids.length} ↗
                    </button>
                  ))}
                </div>
              )}
              {view !== "world" && (
                <div
                  className="travel-region-places"
                  aria-label={`Paradas en ${regions[view].label}`}
                >
                  {regions[view].ids.map((id, number) => {
                    const index = travelPlaces.findIndex((place) => place.id === id)
                    return (
                      <button
                        type="button"
                        key={id}
                        aria-pressed={index === selectedIndex}
                        onClick={() => selectPlace(index)}
                      >
                        {number + 1} · {travelPlaces[index].city}
                      </button>
                    )
                  })}
                </div>
              )}
              <button type="button" className="travel-show-postcard" onClick={revealPostcard}>
                Ver postal: <span aria-live="polite">{selected.city}</span> ↓
              </button>
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

            <article className="travel-postcard" aria-label="Lugar seleccionado" ref={postcardRef}>
              <div className="travel-postcard-heading">
                <span>DE MI CARRETE</span>
                <span>
                  {String(selectedIndex + 1).padStart(2, "0")} /{" "}
                  {String(travelPlaces.length).padStart(2, "0")}
                </span>
              </div>
              <div className="travel-postcard-photo" key={selected.id}>
                {selected.image ? (
                  <img
                    src={selected.image.replace(".webp", "-960.webp")}
                    srcSet={`${selected.image.replace(".webp", "-480.webp")} 480w, ${selected.image.replace(".webp", "-960.webp")} 960w`}
                    sizes="(max-width: 720px) calc(100vw - 72px), 300px"
                    alt={selected.imageAlt ?? ""}
                    style={{ objectPosition: selected.photoPosition }}
                    decoding="async"
                  />
                ) : (
                  <div className="travel-postcard-no-photo">
                    <span lang="zh-Hans">{selected.chineseName}</span>
                    <small>Una parada en el mapa</small>
                  </div>
                )}
                {selected.id === "shanghai" && (
                  <span className="travel-night-lights" aria-hidden="true" />
                )}
                <span className="travel-postcard-tape" aria-hidden="true" />
                <span className="travel-postcard-star" aria-hidden="true">
                  ✳
                </span>
              </div>
              <div className="travel-postcard-body" aria-live="polite" aria-atomic="true">
                <p className="travel-postcard-location">
                  {selected.country}
                  {selected.year && ` / ${selected.year}`}
                </p>
                <h3 ref={postcardTitleRef} tabIndex={-1}>
                  <span className="travel-place-name" key={selected.id}>
                    {selected.city}
                  </span>
                  <span className="travel-place-period" aria-hidden="true">
                    .
                  </span>
                </h3>
                {selected.chineseName && (
                  <span className="travel-chinese-name" lang="zh-Hans" key={selected.id}>
                    {selected.chineseName}
                  </span>
                )}
                {selected.note && <p className="travel-postcard-note">{selected.note}</p>}
                {(selected.id === "kunshan" || selected.id === "shanghai") && (
                  <div className="travel-rail" aria-label="Entre Kunshan y Shanghái">
                    <div className="travel-rail-stations">
                      <button
                        type="button"
                        aria-pressed={selected.id === "kunshan"}
                        onClick={() =>
                          selectPlace(travelPlaces.findIndex((place) => place.id === "kunshan"))
                        }
                      >
                        Kunshan <span lang="zh-Hans">昆山</span>
                      </button>
                      <button
                        type="button"
                        aria-pressed={selected.id === "shanghai"}
                        onClick={() =>
                          selectPlace(travelPlaces.findIndex((place) => place.id === "shanghai"))
                        }
                      >
                        Shanghái <span lang="zh-Hans">上海</span>
                      </button>
                    </div>
                    <div className="travel-rail-track" aria-hidden="true">
                      <span
                        className={`travel-rail-train ${selected.id === "kunshan" ? "to-kunshan" : ""}`}
                        key={selected.id}
                      >
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 32 22"
                          width="32"
                          height="22"
                          fill="none"
                        >
                          <rect x="3" y="2" width="26" height="16" rx="5" fill="currentColor" />
                          <path d="M8 6h16v5H8z" fill="#fffcf2" />
                          <path
                            d="M9 18l-2 2m16-2 2 2"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    </div>
                    <a href="/writing/poems/kunshan-y-shanghai/">
                      Un poema que escribí sobre estas dos ciudades ↗
                    </a>
                  </div>
                )}
                {selected.link && (
                  <a href={selected.link.href} target="_blank" rel="noopener noreferrer">
                    {selected.link.label} ↗
                  </a>
                )}
                {selected.id === "hong-kong" && (
                  <a
                    href="https://cscc.dukekunshan.edu.cn/featured-student-nicolas-velasco-perez/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mi experiencia en el US-China Hong Kong Forum ↗
                  </a>
                )}
              </div>
              <div className="travel-surprise">
                <button type="button" ref={surpriseRef} onClick={surprisePlace}>
                  <span aria-hidden="true">✳</span> Sorpréndeme
                </button>
              </div>
              <div className="travel-postcard-nav">
                <span>OTRA PARADA</span>
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

          <div className="travel-passport" aria-label="Lugares explorados en esta visita">
            <div>
              <p className="travel-kicker">TU PASAPORTE</p>
              <p>Los lugares que has abierto en esta visita.</p>
            </div>
            <div className="travel-passport-stamps" aria-live="polite">
              {stamps.map((id) => {
                const place = travelPlaces.find((item) => item.id === id)
                if (!place) return null
                return (
                  <button
                    type="button"
                    key={id}
                    onClick={() => openPlace(id)}
                    aria-label={`Volver a ${place.city}`}
                  >
                    <strong>{place.city}</strong>
                    <span>{place.chineseName ?? place.country}</span>
                  </button>
                )
              })}
            </div>
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
                  onClick={() => selectFromPicker(index)}
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

      <section className="travel-gallery shell" aria-labelledby="gallery-title" ref={galleryRef}>
        <div className="travel-section-top travel-gallery-head">
          <div>
            <p className="travel-kicker">02 / UNAS CUANTAS POSTALES</p>
            <h2 id="gallery-title">
              Unas <em>postales.</em>
            </h2>
          </div>
          <p>
            Algunas fotos de mis viajes.
            <br />
            Toca una foto para ver el lugar.
          </p>
        </div>
        <div className="travel-gallery-grid">
          {picturePlaces.map((id, index) => {
            const place = travelPlaces.find((item) => item.id === id)
            if (!place?.image) return null
            return (
              <button
                className={`travel-gallery-card travel-gallery-card-${index + 1}`}
                key={place.id}
                type="button"
                onClick={() => openPlace(place.id)}
                aria-label={`Ver ${place.city} en el mapa`}
              >
                <span className="travel-gallery-photo">
                  <img
                    src={place.image.replace(".webp", "-960.webp")}
                    srcSet={`${place.image.replace(".webp", "-480.webp")} 480w, ${place.image.replace(".webp", "-960.webp")} 960w`}
                    sizes="(max-width: 720px) 45vw, 24vw"
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
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
            Gracias por explorar
            <br />
            <em>mi mapa.</em>
          </p>
        </div>
      </section>
    </>
  )
}
