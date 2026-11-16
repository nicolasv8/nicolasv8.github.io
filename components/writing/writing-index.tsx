"use client"

import { Arrow } from "@/components/icons"
import Link from "next/link"
import { useState } from "react"

type Entry = {
  url: string
  title: string
  type: string
  label: string
  date: string
  displayDate: string
  excerpt?: string
  language: string
  minutes: number
}
const filters = [
  { value: "all", label: "Todo" },
  { value: "essays", label: "Ensayos" },
  { value: "poems", label: "Poemas" },
  { value: "notes", label: "Notas" },
]
export function WritingIndex({ entries }: { entries: Entry[] }) {
  const [filter, setFilter] = useState("all")
  const visible = entries.filter((entry) => filter === "all" || entry.type === filter)
  return (
    <>
      <fieldset className="writing-filters">
        <legend className="sr-only">Filtrar escritos por tipo</legend>
        {filters.map((item) => (
          <button
            key={item.value}
            type="button"
            aria-pressed={filter === item.value}
            onClick={() => setFilter(item.value)}
          >
            {item.label}
            <span>
              {entries.filter((entry) => item.value === "all" || entry.type === item.value).length}
            </span>
          </button>
        ))}
      </fieldset>
      <output className="results-count eyebrow" aria-live="polite">
        {visible.length}{" "}
        {visible.length === 1 ? "escrito para leer sin afán" : "escritos para leer sin afán"}
      </output>
      <ol className="writing-list">
        {visible.map((entry, index) => (
          <li key={entry.url}>
            <Link className="writing-entry" href={entry.url}>
              <span className="entry-number">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <div className="writing-list-meta">
                  <span>{entry.label}</span>
                  <span aria-hidden="true">·</span>
                  <time dateTime={entry.date}>{entry.displayDate}</time>
                  <span aria-hidden="true">·</span>
                  <span>{entry.minutes} min</span>
                </div>
                <h2 lang={entry.language}>{entry.title}</h2>
                {entry.excerpt && <p lang={entry.language}>{entry.excerpt}</p>}
              </div>
              <Arrow diagonal />
            </Link>
          </li>
        ))}
      </ol>
      {visible.length === 0 && (
        <p className="empty-state">
          Todavía no hay escritos por aquí. Puedes explorar otra categoría.
        </p>
      )}
    </>
  )
}
