import { Asterisk } from "@/components/icons"
import { PoetryBookView } from "@/components/writing/poetry-book-view"
import { WritingIndex } from "@/components/writing/writing-index"
import { pageMetadata } from "@/lib/metadata"
import {
  formatWritingDate,
  getPublishedWritingEntries,
  getReadingMinutes,
  getWritingTypeLabel,
  isUnverifiedLegacyEntry,
} from "@/lib/writing"
import "./real-writing.css"

export const metadata = pageMetadata(
  "Escritos",
  "Publicaciones y conversaciones de Nicolás Velasco Pérez.",
  "/writing"
)
export default function WritingPage() {
  const entries = getPublishedWritingEntries()
    .filter((entry) => !isUnverifiedLegacyEntry(entry) && entry.type !== "poems")
    .map((entry) => ({
      url: entry.url,
      title: entry.title,
      type: entry.type,
      date: entry.date,
      excerpt: entry.excerpt,
      label: getWritingTypeLabel(entry.type),
      displayDate: formatWritingDate(entry.date),
      minutes: getReadingMinutes(entry.content),
      language: entry.language,
    }))
  return (
    <main id="main-content" className="shell interior-page writing-index-page">
      <header className="page-heading writing-heading">
        <p className="eyebrow">Poemas y publicaciones</p>
        <h1>
          Lo que
          <br />
          <em>escribo.</em>
        </h1>
        <p className="page-description">Aquí están algunos de mis poemas y publicaciones.</p>
        <Asterisk />
      </header>
      <PoetryBookView />
      <a
        className="writing-publication"
        href="https://repository.eafit.edu.co/bitstreams/82eee464-52b4-46d0-893a-977948190b2a/download"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="writing-publication-mark" aria-hidden="true">
          <span>UNA PUBLICACIÓN</span>
          <strong>↗</strong>
          <span>2022</span>
        </div>
        <div className="writing-publication-copy">
          <p className="eyebrow">Editorial EAFIT · Coautor</p>
          <h2>Aprende a gestionar tu negocio</h2>
          <p>
            Escribí junto a otros autores el capítulo «Estado de resultados» de esta guía para
            pequeños negocios y productores de cacao en Antioquia.
          </p>
          <span>Leer la publicación ↗</span>
        </div>
      </a>
      <a
        className="writing-interview"
        href="https://cscc.dukekunshan.edu.cn/featured-student-nicolas-velasco-perez/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <p className="eyebrow">Duke Kunshan University · Entrevista</p>
          <h2>Una conversación sobre jóvenes, China y Estados Unidos.</h2>
          <p>Después del US-China Hong Kong Forum de 2024, compartí algunas de mis impresiones.</p>
        </div>
        <span aria-hidden="true">↗</span>
      </a>
      {entries.length > 0 && (
        <section className="writing-archive" aria-labelledby="writing-poems-heading">
          <h2 id="writing-poems-heading" className="writing-poems-heading">
            Poemas y escritos
          </h2>
          <WritingIndex entries={entries} />
          <p className="writing-language-note">Los textos conservan su idioma original.</p>
        </section>
      )}
    </main>
  )
}
