import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

export const WRITING_TYPES = ["essays", "poems", "notes"] as const

export type WritingType = (typeof WRITING_TYPES)[number]

type WritingFrontmatter = {
  title?: string
  date?: string | Date
  type?: string
  excerpt?: string
  published?: boolean
}

export type WritingEntry = {
  slug: string
  title: string
  date: string
  type: WritingType
  excerpt?: string
  published: boolean
  url: string
}

export type WritingDocument = WritingEntry & {
  content: string
}

const writingContentDirectory = path.join(process.cwd(), "content", "writing")

const writingTypeLabels: Record<WritingType, string> = {
  essays: "Essay",
  poems: "Poem",
  notes: "Note",
}

const writingDateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
})

export function isWritingType(value: string): value is WritingType {
  return WRITING_TYPES.includes(value as WritingType)
}

export function getWritingTypeLabel(type: WritingType) {
  return writingTypeLabels[type]
}

export function formatWritingDate(date: string) {
  return writingDateFormatter.format(new Date(`${date}T00:00:00`))
}

function getWritingDirectory(type: WritingType) {
  return path.join(writingContentDirectory, type)
}

function readWritingFile(type: WritingType, slug: string) {
  const filePath = path.join(getWritingDirectory(type), `${slug}.mdx`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  return parseWritingFile(filePath, type, slug)
}

function parseWritingFile(filePath: string, type: WritingType, slug: string): WritingDocument {
  const source = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(source)
  const frontmatter = data as WritingFrontmatter
  const title = normalizeFrontmatterString(frontmatter.title)
  const date = normalizeFrontmatterDate(frontmatter.date)
  const resolvedType = normalizeFrontmatterString(frontmatter.type)
  const excerpt = normalizeFrontmatterString(frontmatter.excerpt)

  if (!title) {
    throw new Error(`Missing title in ${filePath}`)
  }

  if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    throw new Error(`Invalid date in ${filePath}. Use YYYY-MM-DD.`)
  }

  if (!resolvedType || !isWritingType(resolvedType)) {
    throw new Error(`Invalid type in ${filePath}. Use essays, poems, or notes.`)
  }

  if (resolvedType !== type) {
    throw new Error(`Frontmatter type does not match folder in ${filePath}`)
  }

  return {
    slug,
    title,
    date,
    type,
    excerpt: excerpt || undefined,
    published: frontmatter.published === true,
    url: `/writing/${type}/${slug}`,
    content,
  }
}

function normalizeFrontmatterString(value: unknown) {
  return typeof value === "string" ? value.trim() : undefined
}

function normalizeFrontmatterDate(value: unknown) {
  if (typeof value === "string") {
    return value.trim()
  }

  if (value instanceof Date) {
    return value.toISOString().slice(0, 10)
  }

  return undefined
}

function getWritingSlugs(type: WritingType) {
  const directory = getWritingDirectory(type)

  if (!fs.existsSync(directory)) {
    return []
  }

  return fs
    .readdirSync(directory)
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => fileName.replace(/\.mdx$/, ""))
}

export function getWritingEntriesByType(
  type: WritingType,
  options?: { includeUnpublished?: boolean }
) {
  const includeUnpublished = options?.includeUnpublished ?? false
  const entries = getWritingSlugs(type)
    .map((slug) => readWritingFile(type, slug))
    .filter((entry): entry is WritingDocument => entry !== null)

  return entries
    .filter((entry) => includeUnpublished || entry.published)
    .sort((left, right) => right.date.localeCompare(left.date))
}

export function getPublishedWritingEntries() {
  return WRITING_TYPES.flatMap((type) => getWritingEntriesByType(type)).sort((left, right) =>
    right.date.localeCompare(left.date)
  )
}

export function getWritingEntry(type: WritingType, slug: string) {
  const entry = readWritingFile(type, slug)

  if (!entry || !entry.published) {
    return null
  }

  return entry
}
