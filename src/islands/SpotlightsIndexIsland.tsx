import React from "react"
import { Shell } from "./Shell"
import { HeaderBarebone } from "../components/HeaderBarebone"
import { Link } from "../components/Link"
import { PageContent } from "../components/PageContent"
import type { ResourceDataShape } from "../lib/content"

interface Props {
  pathname: string
  resourceData: ResourceDataShape
}

export default function SpotlightsIndexIsland({
  pathname,
  resourceData,
}: Props) {
  return (
    <Shell layout="spotlights" pathname={pathname} resourceData={resourceData}>
      <HeaderBarebone title="Welcome to the TPH tech spotlights." />
      <PageContent
        content={
          <p>
            This is a collection of our technology spotlights that have been
            highlighted in our discord server. Spotlights run for one month
            within the server before appearing here. You can find those on{" "}
            <Link to="/about">The Programmer&apos;s Hangout</Link>.
          </p>
        }
      />
    </Shell>
  )
}
