import {
  formatWritingDate,
  getPublishedWritingEntries,
  getWritingTypeLabel,
  getReadingMinutes,
} from "@/lib/writing"
import { WritingIndex } from "@/components/writing/writing-index"
import { Asterisk } from "@/components/icons"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Escritos",
  description: "Ensayos, poemas y notas de Nico. Un cuaderno abierto para leer sin afán.",
}
export default function WritingPage() {
  const entries = getPublishedWritingEntries().map((entry) => ({
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
        <p className="eyebrow">El cuaderno / Ensayos, poemas y notas</p>
        <h1>
          Hay cosas que
          <br />
          piden <em>palabras.</em>
        </h1>
        <p className="page-description">
          Ideas que se quedan, preguntas que vuelven y pequeñas cosas que merecen una página.
          Siéntate un ratico.
        </p>
        <Asterisk />
      </header>
      <WritingIndex entries={entries} />
      <p className="writing-language-note">Los escritos conservan su idioma original.</p>
    </main>
  )
}
