import React from "react"
import { Shell } from "./Shell"
import { FourZeroFour } from "../components/FourZeroFour"
import { FourZeroFourHint } from "../components/FourZeroFourHint"
import type { ResourceDataShape } from "../lib/content"

interface Props {
  pathname: string
  resourceData: ResourceDataShape
}

export default function Resources404Island({ pathname, resourceData }: Props) {
  const location = {
    pathname:
      typeof window !== "undefined" ? window.location.pathname : pathname,
  }

  // Mirrors the old query (sourceInstanceName "resources" — which had no files).
  return (
    <Shell layout="resources" pathname={pathname} resourceData={resourceData}>
      <FourZeroFour title="RESOURCE NOT FOUND">
        <FourZeroFourHint
          basepath="resources/"
          location={location}
          data={{ allFile: { edges: [] } }}
        />
      </FourZeroFour>
    </Shell>
  )
}
