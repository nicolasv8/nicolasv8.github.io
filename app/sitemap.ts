import { getPublishedWritingEntries, isUnverifiedLegacyEntry } from "@/lib/writing"
import type { MetadataRoute } from "next"

export const dynamic = "force-static"

const base = "https://nicolasv8.github.io"

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/about/", "/mapa/", "/videos/", "/writing/", "/resume/"]
  const writing = getPublishedWritingEntries()
    .filter((entry) => !isUnverifiedLegacyEntry(entry))
    .map((entry) => ({ url: `${base}${entry.url}/` }))

  return [...pages.map((page) => ({ url: `${base}${page}` })), ...writing]
}
