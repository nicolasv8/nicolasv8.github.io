import { Arrow } from "@/components/icons"
import { writingMdxComponents } from "@/components/writing/mdx-components"
import { pageMetadata } from "@/lib/metadata"
import {
  formatWritingDate,
  getPublishedWritingEntries,
  getReadingMinutes,
  getWritingEntry,
  getWritingTypeLabel,
  isUnverifiedLegacyEntry,
  isWritingType,
} from "@/lib/writing"
import type { Metadata } from "next"
import { MDXRemote } from "next-mdx-remote/rsc"
import Link from "next/link"
import { notFound } from "next/navigation"
import "../../real-writing.css"

type WritingEntryPageProps = {
  params: Promise<{
    type: string
    slug: string
  }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return getPublishedWritingEntries().map((entry) => ({
    type: entry.type,
    slug: entry.slug,
  }))
}

export async function generateMetadata({ params }: WritingEntryPageProps): Promise<Metadata> {
  const { type, slug } = await params

  if (!isWritingType(type)) {
    return {}
  }

  const entry = getWritingEntry(type, slug)

  if (!entry) {
    return {}
  }

  if (isUnverifiedLegacyEntry(entry)) {
    return {
      ...pageMetadata(
        "Texto en revisión",
        "Esta página de una versión anterior del sitio está en revisión.",
        entry.url
      ),
      robots: { index: false, follow: true },
    }
  }

  return {
    ...pageMetadata(
      entry.title,
      entry.excerpt ?? `${getWritingTypeLabel(entry.type)} de La Vida de Nico.`,
      entry.url
    ),
  }
}

export default async function WritingEntryPage({ params }: WritingEntryPageProps) {
  const { type, slug } = await params

  if (!isWritingType(type)) {
    notFound()
  }

  const entry = getWritingEntry(type, slug)

  if (!entry) {
    notFound()
  }

  if (isUnverifiedLegacyEntry(entry)) {
    return (
      <main id="main-content" className="writing-surface">
        <article className="writing-shell max-w-3xl">
          <header className="writing-article-header">
            <h1 className="writing-article-title">Texto en revisión</h1>
            <p>La autoría del texto de esta página aún está pendiente de verificar.</p>
          </header>
          <Link href="/writing" className="writing-backlink">
            ← Volver al cuaderno
          </Link>
        </article>
      </main>
    )
  }

  const entries = getPublishedWritingEntries().filter((item) => !isUnverifiedLegacyEntry(item))
  const nextEntry = entries.length
    ? entries[(entries.findIndex((item) => item.url === entry.url) + 1) % entries.length]
    : undefined

  return (
    <main id="main-content" className="writing-surface">
      <article className={`writing-shell ${entry.type === "poems" ? "max-w-2xl" : "max-w-3xl"}`}>
        <Link href="/writing" className="writing-backlink">
          ← Volver al cuaderno
        </Link>

        <header className="writing-article-header">
          <p className="writing-kicker">{getWritingTypeLabel(entry.type)}</p>
          <h1 lang={entry.language} className="writing-article-title">
            {entry.title}
          </h1>
          <time className="writing-article-date" dateTime={entry.date}>
            {formatWritingDate(entry.date)}
          </time>
          <p className="reading-time">
            {getReadingMinutes(entry.content)} min de lectura ·{" "}
            {entry.language === "en" ? "En inglés" : "En español"}
          </p>
        </header>

        <div lang={entry.language} className="writing-prose" data-writing-type={entry.type}>
          <MDXRemote source={entry.content} components={writingMdxComponents} />
        </div>
        <nav className="article-next" aria-label="Seguir leyendo">
          <p className="eyebrow">Otra página del cuaderno</p>
          {nextEntry && nextEntry.url !== entry.url ? (
            <Link href={nextEntry.url}>
              <span lang={nextEntry.language}>{nextEntry.title}</span>
              <Arrow />
            </Link>
          ) : (
            <Link href="/writing">
              Todos los escritos <Arrow />
            </Link>
          )}
        </nav>
      </article>
    </main>
  )
}
