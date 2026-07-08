import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkGfm from "remark-gfm"
import remarkRehype from "remark-rehype"
import rehypeRaw from "rehype-raw"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeStringify from "rehype-stringify"
import { visit } from "unist-util-visit"
import { toString } from "mdast-util-to-string"
import type { Root } from "mdast"

export interface Heading {
  depth: number
  value: string
}

// Inline SVG for the Discord logo (mirrors src/images/discord-logo.tsx),
// used when transforming <DiscordButton> from MDX content into static HTML.
const DISCORD_LOGO_SVG = `<svg fill="none" viewBox="0 0 43 48" class="discord-logo" aria-hidden="true"><path fill="#fff" fill-rule="evenodd" d="M15.17 21.01c0-1.19 1.04-2.17 2.34-2.17 1.3 0 2.36.98 2.34 2.17 0 1.2-1.03 2.18-2.34 2.18-1.28 0-2.34-.98-2.34-2.18zm8.37 0c0-1.19 1.03-2.17 2.34-2.17 1.3 0 2.34.98 2.34 2.17 0 1.2-1.03 2.18-2.34 2.18-1.28 0-2.34-.98-2.34-2.18z" clip-rule="evenodd"/><path fill="#fff" fill-rule="evenodd" d="M5.6 0h32.2c2.71 0 4.92 2.2 4.92 4.93v42.9l-5.16-4.55-2.9-2.68-3.08-2.84 1.27 4.42H5.6a4.92 4.92 0 01-4.92-4.92V4.93A4.92 4.92 0 015.6 0zm21.33 29.3c.72.9 1.59 1.93 1.59 1.93 5.3-.17 7.35-3.63 7.35-3.63 0-7.7-3.46-13.95-3.46-13.95-3.46-2.58-6.75-2.5-6.75-2.5l-.34.38c4.08 1.24 5.98 3.03 5.98 3.03a19.64 19.64 0 00-12.49-2.2 18.1 18.1 0 00-6.87 2.2s2-1.89 6.32-3.13l-.24-.29s-3.29-.07-6.75 2.51c0 0-3.46 6.25-3.46 13.95 0 0 2.02 3.46 7.33 3.63 0 0 .89-1.08 1.6-1.98-3.04-.91-4.2-2.83-4.2-2.83a10 10 0 00.78.48c.03.03.07.04.1.06l.11.06a20.23 20.23 0 005.28 1.84 16.9 16.9 0 009.7-1c.85-.31 1.78-.77 2.77-1.41 0 0-1.2 1.96-4.35 2.84z" clip-rule="evenodd"/></svg>`

/**
 * Strip MDX `import`/`export` statements and turn the two custom components
 * that appear in site content (<Role>, <DiscordButton>) into static HTML that
 * MarkdownWrapper styles via `.role` / `.discord-button` rules.
 */
function preprocess(raw: string): string {
  return raw
    .split("\n")
    .filter((line) => !/^\s*(import|export)\s/.test(line))
    .join("\n")
    .replace(
      /<Role\s+color=["']([^"']*)["']\s*>([\s\S]*?)<\/Role>/g,
      (_m, color, inner) =>
        `<span class="role" style="color:${color};border-color:${color}">${inner}</span>`
    )
    .replace(
      /<DiscordButton\s*>([\s\S]*?)<\/DiscordButton>/g,
      (_m, inner) =>
        `<a class="button discord-button" rel="noreferrer" href="https://discord.gg/programming">${DISCORD_LOGO_SVG} ${inner.trim()}</a>`
    )
}

function processor() {
  return unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, {
      behavior: "wrap",
      properties: { className: ["anchor"] },
    })
    .use(rehypeStringify, { allowDangerousHtml: true })
}

export async function renderMarkdown(raw: string): Promise<string> {
  const file = await processor().process(preprocess(raw))
  return String(file)
}

/** Heading list (depth + text) for the table of contents. */
export function extractHeadings(raw: string): Heading[] {
  const stripped = raw
    .split("\n")
    .filter((line) => !/^\s*(import|export)\s/.test(line))
    .join("\n")
  const tree = unified().use(remarkParse).use(remarkGfm).parse(stripped) as Root
  const headings: Heading[] = []
  visit(tree, "heading", (node) => {
    headings.push({ depth: node.depth, value: toString(node) })
  })
  return headings
}

/** Plain-text of the document, for excerpt + reading-time computation. */
function plainText(raw: string): string {
  const stripped = raw
    .split("\n")
    .filter((line) => !/^\s*(import|export)\s/.test(line))
    .join("\n")
  const tree = unified().use(remarkParse).use(remarkGfm).parse(stripped) as Root
  return toString(tree)
}

export function excerpt(raw: string, length = 140): string {
  const text = plainText(raw).replace(/\s+/g, " ").trim()
  if (text.length <= length) return text
  const truncated = text.slice(0, length)
  const lastSpace = truncated.lastIndexOf(" ")
  return `${truncated.slice(0, lastSpace > 0 ? lastSpace : length)}…`
}

export function readingTime(raw: string): number {
  // Matches gatsby-plugin-mdx's timeToRead (≈265 words per minute); prose only,
  // excluding fenced/inline code the way the old counter effectively did.
  const prose = raw
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
  const words = plainText(prose).split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / 200))
}
