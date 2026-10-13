import React from "react"
import { Shell } from "./Shell"
import { AppLink } from "../components/AppLink"
import { Article } from "../components/Article"
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
      <Article title="Welcome to the TPH tech spotlights.">
        {/* Plain anchor: the .markdown layer gives it the article link style. */}
        <div className="markdown prose article-prose max-w-none">
          <p>
            This is a collection of our technology spotlights that have been
            highlighted in our discord server. Spotlights run for one month
            within the server before appearing here. You can find those on{" "}
            <AppLink to="/about">The Programmer&apos;s Hangout</AppLink>.
          </p>
        </div>
      </Article>
    </Shell>
  )
}
