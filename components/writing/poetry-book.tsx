"use client"

import type { ReactNode } from "react"
import { useState } from "react"

type Poem = { slug: string; title: string; language: string; body: ReactNode }

export function PoetryBook({ poems, initialSlug }: { poems: Poem[]; initialSlug?: string }) {
  const startingIndex = Math.max(
    0,
    poems.findIndex((poem) => poem.slug === initialSlug)
  )
  const [opened, setOpened] = useState(Boolean(initialSlug))
  const [index, setIndex] = useState(startingIndex)
  const poem = poems[index]
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
          <button type="button" className="poetry-cover" onClick={() => setOpened(true)}>
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
                  onClick={() => setIndex(itemIndex)}
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
              <select value={index} onChange={(event) => setIndex(Number(event.target.value))}>
                {poems.map((item, itemIndex) => (
                  <option key={item.slug} value={itemIndex}>
                    {item.title}
                  </option>
                ))}
              </select>
            </label>
            <article className="poetry-book-content" key={poem.slug} lang={poem.language}>
              {(poem.slug === "luna-lunita-luna" || poem.slug === "kunshan-y-shanghai") && (
                <span className="poetry-book-motif" aria-hidden="true">
                  {poem.slug === "luna-lunita-luna" ? "☾" : "↝"}
                </span>
              )}
              <h3>{poem.title}</h3>
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
              <button type="button" disabled={index === 0} onClick={() => setIndex(index - 1)}>
                ← Anterior
              </button>
              <button
                type="button"
                disabled={index === poems.length - 1}
                onClick={() => setIndex(index + 1)}
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
