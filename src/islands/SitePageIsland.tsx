import React from "react"
import { Shell } from "./Shell"
import { Article } from "../components/Article"
import { Markdown } from "../components/Markdown"
import { buildToc } from "../utils"
import type { Heading } from "../lib/markdown"
import type { ResourceDataShape } from "../lib/content"

interface SitePageIslandProps {
  pathname: string
  headerTitle: string
  html: string
  headings: Heading[]
  resourceData: ResourceDataShape
}

export default function SitePageIsland({
  pathname,
  headerTitle,
  html,
  headings,
  resourceData,
}: SitePageIslandProps) {
  return (
    <Shell layout="regular" pathname={pathname} resourceData={resourceData}>
      <Article title={headerTitle} toc={buildToc(headings)}>
        <Markdown content={html} className="article-prose" />
      </Article>
    </Shell>
  )
}
