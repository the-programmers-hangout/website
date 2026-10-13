import React from "react"
import { Shell } from "./Shell"
import { Article } from "../components/Article"
import { Markdown } from "../components/Markdown"
import { sentenceCase } from "../utils"
import type { SpotlightData, ResourceDataShape } from "../lib/content"

interface Props {
  pathname: string
  data: SpotlightData
  resourceData: ResourceDataShape
}

export default function SpotlightIsland({
  pathname,
  data,
  resourceData,
}: Props) {
  return (
    <Shell layout="spotlights" pathname={pathname} resourceData={resourceData}>
      <Article
        relativePath={data.relativePath}
        basePath="/spotlights"
        title={sentenceCase(data.title)}
        authors={data.authors}
        createdAt={data.createdAt}
        timeToRead={data.timeToRead}
      >
        <Markdown content={data.html} className="article-prose" />
      </Article>
    </Shell>
  )
}
