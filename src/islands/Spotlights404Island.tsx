import React from "react"
import { Shell } from "./Shell"
import { NotFound } from "../components/NotFound"
import type { ResourceDataShape } from "../lib/content"

interface Props {
  pathname: string
  resourceData: ResourceDataShape
}

export default function Spotlights404Island({ pathname, resourceData }: Props) {
  return (
    <Shell layout="spotlights" pathname={pathname} resourceData={resourceData}>
      <NotFound
        title="Spotlight not found"
        basePath="/spotlights"
        sectionTitle="Spotlights"
        candidates={resourceData.spotlights.edges.map(
          ({ node }) => node.relativePath
        )}
      />
    </Shell>
  )
}
