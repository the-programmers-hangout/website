import React from "react"
import { Shell } from "./Shell"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Markdown } from "../components/Markdown"
import { PageContent } from "../components/PageContent"
import { PageNavigation } from "../components/PageNavigation"
import { buildToc } from "../utils"
import type { ResourcePageData, ResourceDataShape } from "../lib/content"

interface Props {
  pathname: string
  data: ResourcePageData
  resourceData: ResourceDataShape
}

export default function ResourcePageIsland({
  pathname,
  data,
  resourceData,
}: Props) {
  const toc = buildToc(data.headings)
  const shiftLayout = Boolean(
    data.recommendedReading || data.externalResources || toc.length
  )

  return (
    <Shell layout="resources" pathname={pathname} resourceData={resourceData}>
      <Header
        relativePath={data.relativePath}
        basePath="/resources"
        title={data.title}
        authors={data.authors}
        createdAt={data.createdAt}
        timeToRead={data.timeToRead}
        shifted={shiftLayout}
      />
      <PageContent
        content={
          <>
            <Markdown content={data.html} />
            <PageNavigation next={data.next} previous={data.previous} />
            <Footer />
          </>
        }
        toc={toc}
        recommendedReading={data.recommendedReading}
        externalResources={data.externalResources}
      />
    </Shell>
  )
}
