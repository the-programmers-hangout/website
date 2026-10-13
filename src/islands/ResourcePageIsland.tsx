import React from "react"
import { Shell } from "./Shell"
import { Footer } from "../components/Footer"
import { Markdown } from "../components/Markdown"
import { PageNavigation } from "../components/PageNavigation"
import { Article } from "../components/Article"
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
  return (
    <Shell layout="resources" pathname={pathname} resourceData={resourceData}>
      <Article
        relativePath={data.relativePath}
        basePath="/resources"
        title={data.title}
        authors={data.authors}
        createdAt={data.createdAt}
        timeToRead={data.timeToRead}
        toc={buildToc(data.headings)}
        recommendedReading={data.recommendedReading}
        externalResources={data.externalResources}
        after={
          <>
            <PageNavigation next={data.next} previous={data.previous} />
            <Footer />
          </>
        }
      >
        <Markdown content={data.html} className="article-prose" />
      </Article>
    </Shell>
  )
}
