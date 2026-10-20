import React from "react"
import { Shell } from "./Shell"
import { Article } from "../components/Article"
import { Markdown } from "../components/Markdown"
import { buildToc } from "../utils"
import { cn } from "../lib/cn"
import type { Heading } from "../lib/markdown"
import type { ResourceDataShape } from "../lib/content"

interface SitePageIslandProps {
  pathname: string
  headerTitle: string
  html: string
  headings: Heading[]
  resourceData: ResourceDataShape
  // Extra class on the prose wrapper, for page-specific styles (".faq").
  proseClassName?: string
}

export default function SitePageIsland({
  pathname,
  headerTitle,
  html,
  headings,
  resourceData,
  proseClassName,
}: SitePageIslandProps) {
  return (
    <Shell layout="regular" pathname={pathname} resourceData={resourceData}>
      <Article title={headerTitle} toc={buildToc(headings)}>
        <Markdown
          content={html}
          className={cn("article-prose", proseClassName)}
        />
      </Article>
    </Shell>
  )
}
