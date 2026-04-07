import { formatWritingDate, getPublishedWritingEntries, getWritingTypeLabel } from "@/lib/writing"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Writing | La Vida de Nico",
  description: "Essays, poems, and short notes from Nico.",
}

export default function WritingPage() {
  const entries = getPublishedWritingEntries()

  return (
    <main className="writing-surface">
      <div className="writing-shell max-w-3xl">
        <Link href="/" className="writing-backlink">
          La Vida de Nico
        </Link>

        <header className="writing-intro">
          <p className="writing-kicker">Writing</p>
          <h1 className="writing-page-title">Writing</h1>
          <p className="writing-summary">
            Essays, poems, and short notes. This part of the site is meant to stay simple: quiet
            pages, clear typography, and room for the words to do the work.
          </p>
        </header>

        {entries.length > 0 ? (
          <ol className="writing-list">
            {entries.map((entry) => (
              <li key={entry.url} className="writing-list-item">
                <div className="writing-list-meta">
                  <span>{getWritingTypeLabel(entry.type)}</span>
                  <span aria-hidden="true">/</span>
                  <time dateTime={entry.date}>{formatWritingDate(entry.date)}</time>
                </div>

                <h2 className="writing-list-title">
                  <Link href={entry.url}>{entry.title}</Link>
                </h2>

                {entry.excerpt ? <p className="writing-list-excerpt">{entry.excerpt}</p> : null}
              </li>
            ))}
          </ol>
        ) : (
          <p className="writing-empty-state">No published writing yet.</p>
        )}
      </div>
    </main>
  )
}
