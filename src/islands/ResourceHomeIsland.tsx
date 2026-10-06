import React from "react"
import { Shell } from "./Shell"
import { ResourceArticle } from "../components/ResourceArticle"
import { ResourcesHomeContent } from "../components/ResourcesHomeContent"
import type { ResourceHomeData, ResourceDataShape } from "../lib/content"

interface Props {
  pathname: string
  data: ResourceHomeData
  resourceData: ResourceDataShape
}

export default function ResourceHomeIsland({
  pathname,
  data,
  resourceData,
}: Props) {
  return (
    <Shell layout="resources" pathname={pathname} resourceData={resourceData}>
      <ResourceArticle
        relativePath={data.relativePath}
        basePath="/resources"
        title={data.title}
        authors={data.authors}
        createdAt={data.createdAt}
        timeToRead={data.timeToRead}
        recommendedReading={data.recommendedReading}
        externalResources={data.externalResources}
      >
        <ResourcesHomeContent language={data.language} body={data.html} />
      </ResourceArticle>
    </Shell>
  )
}
