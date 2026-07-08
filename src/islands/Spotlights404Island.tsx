import React from "react"
import { Shell } from "./Shell"
import { FourZeroFour } from "../components/FourZeroFour"
import { FourZeroFourHint } from "../components/FourZeroFourHint"
import type { ResourceDataShape } from "../lib/content"

interface Props {
  pathname: string
  resourceData: ResourceDataShape
}

export default function Spotlights404Island({ pathname, resourceData }: Props) {
  const location = {
    pathname:
      typeof window !== "undefined" ? window.location.pathname : pathname,
  }

  return (
    <Shell layout="spotlights" pathname={pathname} resourceData={resourceData}>
      <FourZeroFour title="SPOTLIGHT NOT FOUND">
        <FourZeroFourHint
          basepath="spotlights/"
          location={location}
          data={{ allFile: { edges: resourceData.spotlights.edges } }}
        />
      </FourZeroFour>
    </Shell>
  )
}
