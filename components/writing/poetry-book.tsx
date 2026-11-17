"use client"

import type { ReactNode } from "react"
import { useEffect, useRef, useState } from "react"

type Poem = {
  slug: string
  title: string
  date: string
  displayDate: string
  language: string
  body: ReactNode
}

export function PoetryBook({ poems, initialSlug }: { poems: Poem[]; initialSlug?: string }) {
  const startingIndex = Math.max(
    0,
    poems.findIndex((poem) => poem.slug === initialSlug)
  )
  const [opened, setOpened] = useState(Boolean(initialSlug))
  const [index, setIndex] = useState(startingIndex)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const focusTitle = useRef(false)
  const poem = poems[index]

  useEffect(() => {
    document.title =
      opened && poem ? `${poem.title} | La Vida de Nico` : "Escritos | La Vida de Nico"
  }, [opened, poem])

  useEffect(() => {
    function syncFromHistory() {
      const match = window.location.pathname.match(/^\/writing\/poems\/([^/]+)\/?$/)
      if (!match) {
        if (/^\/writing\/?$/.test(window.location.pathname)) setOpened(false)
        return
      }
      const next = poems.findIndex((item) => item.slug === match[1])
      if (next >= 0) {
        focusTitle.current = true
        setIndex(next)
        setOpened(true)
      }
    }
    window.addEventListener("popstate", syncFromHistory)
    return () => window.removeEventListener("popstate", syncFromHistory)
  }, [poems])

  useEffect(() => {
    if (!opened || !poem || !focusTitle.current) return
    focusTitle.current = false
    titleRef.current?.focus({ preventScroll: true })
    titleRef.current?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
      block: "start",
    })
  }, [opened, poem])

  function showPoem(next: number) {
    const nextPoem = poems[next]
    if (!nextPoem || (opened && next === index)) return
    focusTitle.current = true
    window.history.pushState(null, "", `/writing/poems/${nextPoem.slug}/`)
    setIndex(next)
    setOpened(true)
  }

  if (!poem) return null

  return (
    <section
      className={`poetry-book-section ${opened ? "is-open" : ""}`}
      aria-labelledby="poetry-book-heading"
    >
      <div className="poetry-book-intro">
        <p className="eyebrow">MIS POEMAS</p>
        <h2 id="poetry-book-heading">
          Mis <em>poemas.</em>
        </h2>
        <p>Los escribí en distintos momentos y lugares.</p>
      </div>
      {!opened ? (
        <div className="poetry-cover-wrap">
          <span className="poetry-cover-moon" aria-hidden="true">
            <span>✦</span>
          </span>
          <button type="button" className="poetry-cover" onClick={() => showPoem(index)}>
            <span className="poetry-cover-top">LA VIDA DE NICO</span>
            <span className="poetry-cover-art" aria-hidden="true">
              ✳ <i>☾</i>
            </span>
            <span className="poetry-cover-title">
              Poemas
              <br />
              <em>de Nico.</em>
            </span>
            <span className="poetry-cover-action">ABRIR EL LIBRO ↗</span>
          </button>
          <span className="poetry-cover-note" aria-hidden="true">
            pasa la página ↗
          </span>
        </div>
      ) : (
        <div className="poetry-book" aria-label="Libro de poemas">
          <aside className="poetry-book-index">
            <p className="eyebrow">LA VIDA DE NICO</p>
            <h3>
              Poemas
              <br />
              <em>de Nico.</em>
            </h3>
            <p>Índice</p>
            <nav aria-label="Índice de poemas">
              {poems.map((item, itemIndex) => (
                <button
                  key={item.slug}
                  type="button"
                  aria-current={itemIndex === index ? "page" : undefined}
                  onClick={() => showPoem(itemIndex)}
                >
                  <span>{String(itemIndex + 1).padStart(2, "0")}</span> {item.title}
                </button>
              ))}
            </nav>
          </aside>
          <div className="poetry-book-page">
            <div className="poetry-book-page-top">
              <span>POEMAS DE NICO</span>
              <span aria-live="polite">
                {String(index + 1).padStart(2, "0")} / {String(poems.length).padStart(2, "0")}
              </span>
            </div>
            <label className="poetry-book-select">
              Elegir poema
              <select value={index} onChange={(event) => showPoem(Number(event.target.value))}>
                {poems.map((item, itemIndex) => (
                  <option key={item.slug} value={itemIndex}>
                    {item.title}
                  </option>
                ))}
              </select>
            </label>
            <article className="poetry-book-content" key={poem.slug} lang={poem.language}>
              {poem.slug === "luna-lunita-luna" && (
                <span className="poetry-luna-orbit" aria-hidden="true">
                  <span>☾</span>
                  <i>✦</i>
                </span>
              )}
              {poem.slug === "kunshan-y-shanghai" && (
                <span className="poetry-book-motif" aria-hidden="true">
                  ↝
                </span>
              )}
              {initialSlug ? (
                <h1 ref={titleRef} tabIndex={-1}>
                  {poem.title}
                </h1>
              ) : (
                <h3 ref={titleRef} tabIndex={-1}>
                  {poem.title}
                </h3>
              )}
              <time className="poetry-book-date" dateTime={poem.date}>
                {poem.displayDate}
              </time>
              <div className="writing-prose" data-writing-type="poems">
                {poem.body}
              </div>
              {(poem.slug === "luna-lunita-luna" || poem.slug === "kunshan-y-shanghai") && (
                <a className="poetry-book-map-link" href="/mapa/?lugar=kunshan#explorar">
                  Ver Kunshan en el mapa ↗
                </a>
              )}
            </article>
            <nav className="poetry-book-nav" aria-label="Pasar páginas">
              <button type="button" disabled={index === 0} onClick={() => showPoem(index - 1)}>
                ← Anterior
              </button>
              <button
                type="button"
                disabled={index === poems.length - 1}
                onClick={() => showPoem(index + 1)}
              >
                Siguiente →
              </button>
            </nav>
          </div>
        </div>
      )}
    </section>
  )
}
