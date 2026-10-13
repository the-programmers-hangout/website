import React from "react"
import { Shell } from "./Shell"
import { NotFound } from "../components/NotFound"
import type { ResourceDataShape } from "../lib/content"

interface Props {
  pathname: string
  resourceData: ResourceDataShape
}

export default function Resources404Island({ pathname, resourceData }: Props) {
  const candidates = [
    ...resourceData.languages.edges,
    ...resourceData.topics.edges,
  ].map(({ node }) => node.relativePath)

  return (
    <Shell layout="resources" pathname={pathname} resourceData={resourceData}>
      <NotFound
        title="Resource not found"
        basePath="/resources"
        sectionTitle="Resources"
        candidates={candidates}
      />
    </Shell>
  )
}
