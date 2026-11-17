import { formatWritingDate, getWritingEntriesByType, isUnverifiedLegacyEntry } from "@/lib/writing"
import { MDXRemote } from "next-mdx-remote/rsc"
import { writingMdxComponents } from "./mdx-components"
import { PoetryBook } from "./poetry-book"

export function PoetryBookView({ initialSlug }: { initialSlug?: string }) {
  const poems = getWritingEntriesByType("poems").filter((entry) => !isUnverifiedLegacyEntry(entry))
  return (
    <PoetryBook
      initialSlug={initialSlug}
      poems={poems.map((poem) => ({
        slug: poem.slug,
        title: poem.title,
        date: poem.date,
        displayDate: formatWritingDate(poem.date),
        language: poem.language,
        body: <MDXRemote source={poem.content} components={writingMdxComponents} />,
      }))}
    />
  )
}
