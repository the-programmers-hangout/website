import React from "react"
import cx from "classnames"
import { Shell } from "./Shell"
import { HeaderBarebone } from "../components/HeaderBarebone"
import { Markdown } from "../components/Markdown"
import { PageContent } from "../components/PageContent"
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
  const toc = buildToc(headings)

  return (
    <Shell layout="regular" pathname={pathname} resourceData={resourceData}>
      <HeaderBarebone
        title={headerTitle}
        className={cx({ shifted: toc.length })}
      />
      <PageContent content={<Markdown content={html} />} toc={toc} />
    </Shell>
  )
}
