import React from "react"
import { Shell } from "./Shell"
import { Header } from "../components/Header"
import { Markdown } from "../components/Markdown"
import { PageContent } from "../components/PageContent"
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
      <Header
        relativePath={data.relativePath}
        basePath="/spotlights"
        title={data.title}
        authors={data.authors}
        createdAt={data.createdAt}
        timeToRead={data.timeToRead}
        shifted={false}
      />
      <PageContent content={<Markdown content={data.html} />} />
    </Shell>
  )
}
