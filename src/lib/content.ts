import matter from "gray-matter"
import { readFileSync } from "node:fs"
import path from "node:path"
import type { Author, } from "../appTypes"
import type { IExternalResource } from "../types"
import { resolveAuthors, type DiscordUser } from "./authors"
import {
  renderMarkdown,
  extractHeadings,
  excerpt as makeExcerpt,
  readingTime as makeReadingTime,
  type Heading,
} from "./markdown"
import { humanize } from "../utils"

// ---------------------------------------------------------------------------
// Raw content, loaded once at build time (replaces gatsby-source-filesystem).
// ---------------------------------------------------------------------------

const rawFiles = import.meta.glob("/src/content/**/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>

type SourceName = "languages" | "topics" | "spotlights" | "site"

interface Record_ {
  fullPath: string
  source: SourceName
  relativePath: string // relative to the source root, e.g. "javascript/intro.md"
  relativeDirectory: string // dirname of relativePath, e.g. "javascript"
  base: string // "intro.md"
  raw: string
  frontmatter: Record<string, any>
}

const ROOTS: { prefix: string; source: SourceName }[] = [
  { prefix: "/src/content/resources/language/", source: "languages" },
  { prefix: "/src/content/resources/topic/", source: "topics" },
  { prefix: "/src/content/spotlights/", source: "spotlights" },
  { prefix: "/src/content/site/", source: "site" },
]

const records: Record_[] = Object.entries(rawFiles).map(([fullPath, raw]) => {
  const root = ROOTS.find((r) => fullPath.startsWith(r.prefix))
  if (!root) {
    throw new Error(`Content file outside known roots: ${fullPath}`)
  }
  const relativePath = fullPath.slice(root.prefix.length)
  const relativeDirectory = relativePath.includes("/")
    ? relativePath.slice(0, relativePath.lastIndexOf("/"))
    : ""
  const base = relativePath.slice(relativePath.lastIndexOf("/") + 1)
  const { data } = matter(raw)
  return {
    fullPath,
    source: root.source,
    relativePath,
    relativeDirectory,
    base,
    raw,
    frontmatter: data,
  }
})

const resourceRecords = records.filter(
  (r) => r.source === "languages" || r.source === "topics"
)
const spotlightRecords = records.filter((r) => r.source === "spotlights")
const siteRecords = records.filter((r) => r.source === "site")

function body(raw: string): string {
  return matter(raw).content
}

// ---------------------------------------------------------------------------
// Users (for author avatar resolution) — optional users.json at project root.
// ---------------------------------------------------------------------------

let users: DiscordUser[] = []
try {
  users = JSON.parse(readFileSync(path.resolve("users.json"), "utf-8"))
} catch {
  users = []
}

function authorsFor(frontmatter: Record<string, any>): Author[] {
  if (!frontmatter.authors) return []
  return resolveAuthors(users, frontmatter.authors)
}

// ---------------------------------------------------------------------------
// Sidebar / tree data (shapes match the old graphql `edges` the components use)
// ---------------------------------------------------------------------------

export interface ResourceEdge {
  node: {
    relativePath: string
    relativeDirectory: string
    sourceInstanceName: string
    childMdx: { frontmatter: { authors?: string[]; title?: string } }
  }
}

export interface ResourceDataShape {
  languages: { edges: ResourceEdge[] }
  topics: { edges: ResourceEdge[] }
  spotlights: { edges: { node: { relativePath: string } }[] }
  resourcesAll: { edges: ResourceEdge[] }
}

function toResourceEdge(r: Record_): ResourceEdge {
  return {
    node: {
      relativePath: r.relativePath,
      relativeDirectory: r.relativeDirectory,
      sourceInstanceName: r.source,
      childMdx: {
        frontmatter: {
          authors: r.frontmatter.authors,
          title: r.frontmatter.title,
        },
      },
    },
  }
}

export function getResourceData(): ResourceDataShape {
  return {
    languages: {
      edges: resourceRecords
        .filter((r) => r.source === "languages")
        .map(toResourceEdge),
    },
    topics: {
      edges: resourceRecords
        .filter((r) => r.source === "topics")
        .map(toResourceEdge),
    },
    spotlights: {
      edges: spotlightRecords.map((r) => ({
        node: { relativePath: r.relativePath },
      })),
    },
    // No "resources" source existed in Gatsby, so ResourcesList renders empty.
    resourcesAll: { edges: [] },
  }
}

// ---------------------------------------------------------------------------
// Static path enumeration (replaces gatsby-node createPages)
// ---------------------------------------------------------------------------

/** Unique resource categories, e.g. "javascript", "web-development". */
export function getResourceCategories(): { category: string; source: SourceName }[] {
  const seen = new Map<string, SourceName>()
  for (const r of resourceRecords) {
    const category = r.relativePath.split("/")[0]
    if (!seen.has(category)) seen.set(category, r.source)
  }
  return [...seen.entries()].map(([category, source]) => ({ category, source }))
}

export function getResourceArticlePaths(): string[] {
  return resourceRecords.map((r) => r.relativePath)
}

export function getSpotlightPaths(): string[] {
  return spotlightRecords.map((r) => r.relativePath)
}

// ---------------------------------------------------------------------------
// Per-page data
// ---------------------------------------------------------------------------

export interface HeaderData {
  authors: Author[]
  createdAt: string
  timeToRead: number
}

export interface ResourcePageData {
  relativePath: string
  html: string
  headings: Heading[]
  excerpt: string
  authors: Author[]
  createdAt: string
  title: string
  recommendedReading?: string[]
  externalResources?: IExternalResource[]
  timeToRead: number
  next?: { relativePath: string; title: string }
  previous?: { relativePath: string; title: string }
}

export async function getResourcePageData(
  relativePath: string
): Promise<ResourcePageData> {
  const record = resourceRecords.find((r) => r.relativePath === relativePath)
  if (!record) throw new Error(`Resource not found: ${relativePath}`)
  const raw = body(record.raw)
  const fm = record.frontmatter

  // Siblings in the same directory, sorted like the old ASC relativePath query,
  // with intro pushed first (descend intro) to match resourcePage.tsx.
  const siblings = resourceRecords
    .filter((r) => r.relativeDirectory === record.relativeDirectory)
    .sort((a, b) => a.relativePath.localeCompare(b.relativePath))
  const ordered = [...siblings].sort((a, b) => {
    const ai = a.relativePath.includes("intro") ? 1 : -1
    const bi = b.relativePath.includes("intro") ? 1 : -1
    return bi - ai
  })
  const currentIndex = ordered.findIndex(
    (r) => r.relativePath === relativePath
  )
  const toNav = (r?: Record_) =>
    r
      ? { relativePath: r.relativePath, title: r.frontmatter.title ?? "" }
      : undefined

  return {
    relativePath,
    html: await renderMarkdown(raw),
    headings: extractHeadings(raw),
    excerpt: makeExcerpt(raw),
    authors: authorsFor(fm),
    createdAt: String(fm.created_at ?? ""),
    title: fm.title ?? "",
    recommendedReading: fm.recommended_reading,
    externalResources: fm.external_resources,
    timeToRead: makeReadingTime(raw),
    next: toNav(ordered[currentIndex + 1]),
    previous: toNav(ordered[currentIndex - 1]),
  }
}

export interface ResourceHomeData {
  relativePath: string
  language: string
  html: string
  excerpt: string
  authors: Author[]
  createdAt: string
  title: string
  recommendedReading?: string[]
  externalResources?: IExternalResource[]
  timeToRead: number
}

export async function getResourceHomeData(
  category: string
): Promise<ResourceHomeData> {
  const record = resourceRecords.find(
    (r) => r.relativeDirectory === category && r.base === "intro.md"
  )
  if (!record) throw new Error(`Resource home not found: ${category}`)
  const raw = body(record.raw)
  const fm = record.frontmatter
  return {
    relativePath: record.relativePath,
    language: category,
    html: await renderMarkdown(raw),
    excerpt: makeExcerpt(raw),
    authors: authorsFor(fm),
    createdAt: String(fm.created_at ?? ""),
    title: fm.title ?? "",
    recommendedReading: fm.recommended_reading,
    externalResources: fm.external_resources,
    timeToRead: makeReadingTime(raw),
  }
}

export interface SpotlightData {
  relativePath: string
  title: string
  html: string
  excerpt: string
  authors: Author[]
  createdAt: string
  timeToRead: number
}

export async function getSpotlightData(
  relativePath: string
): Promise<SpotlightData> {
  const record = spotlightRecords.find((r) => r.relativePath === relativePath)
  if (!record) throw new Error(`Spotlight not found: ${relativePath}`)
  const raw = body(record.raw)
  const fm = record.frontmatter
  return {
    relativePath,
    title: humanize(relativePath),
    html: await renderMarkdown(raw),
    excerpt: makeExcerpt(raw),
    authors: authorsFor(fm),
    createdAt: String(fm.created_at ?? ""),
    timeToRead: makeReadingTime(raw),
  }
}

export interface SitePageData {
  html: string
  headings: Heading[]
}

export async function getSitePageData(routePath: string): Promise<SitePageData> {
  const record = siteRecords.find((r) => r.frontmatter.path === routePath)
  if (!record) throw new Error(`Site page not found: ${routePath}`)
  const raw = body(record.raw)
  return {
    html: await renderMarkdown(raw),
    headings: extractHeadings(raw),
  }
}
