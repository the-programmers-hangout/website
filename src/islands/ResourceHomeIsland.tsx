import React from "react"
import { Shell } from "./Shell"
import { Header } from "../components/Header"
import { PageContent } from "../components/PageContent"
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
  const shiftLayout = Boolean(
    data.recommendedReading || data.externalResources
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
          <ResourcesHomeContent language={data.language} body={data.html} />
        }
        recommendedReading={data.recommendedReading}
        externalResources={data.externalResources}
      />
    </Shell>
  )
}
