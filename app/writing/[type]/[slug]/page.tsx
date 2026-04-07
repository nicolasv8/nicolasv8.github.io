import { writingMdxComponents } from "@/components/writing/mdx-components"
import {
  formatWritingDate,
  getPublishedWritingEntries,
  getWritingEntry,
  getWritingTypeLabel,
  isWritingType,
} from "@/lib/writing"
import type { Metadata } from "next"
import { MDXRemote } from "next-mdx-remote/rsc"
import Link from "next/link"
import { notFound } from "next/navigation"

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

  return {
    title: `${entry.title} | Writing | La Vida de Nico`,
    description: entry.excerpt ?? `${getWritingTypeLabel(entry.type)} from La Vida de Nico.`,
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

  return (
    <main className="writing-surface">
      <article className={`writing-shell ${entry.type === "poems" ? "max-w-2xl" : "max-w-3xl"}`}>
        <Link href="/writing" className="writing-backlink">
          Writing
        </Link>

        <header className="writing-article-header">
          <p className="writing-kicker">{getWritingTypeLabel(entry.type)}</p>
          <h1 className="writing-article-title">{entry.title}</h1>
          <time className="writing-article-date" dateTime={entry.date}>
            {formatWritingDate(entry.date)}
          </time>
        </header>

        <div className="writing-prose" data-writing-type={entry.type}>
          <MDXRemote source={entry.content} components={writingMdxComponents} />
        </div>
      </article>
    </main>
  )
}
