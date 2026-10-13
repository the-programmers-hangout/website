import React from "react"
import { Shell } from "./Shell"
import { AppLink } from "../components/AppLink"
import { ResourceArticle } from "../components/ResourceArticle"
import { ResourcesList } from "../components/ResourcesList"
import packageJson from "../../package.json"
import type { ResourceDataShape } from "../lib/content"

interface Props {
  pathname: string
  resourceData: ResourceDataShape
}

export default function ResourcesIndexIsland({ pathname, resourceData }: Props) {
  return (
    <Shell layout="resources" pathname={pathname} resourceData={resourceData}>
      <ResourceArticle basePath="/resources" title="Welcome to the TPH resources">
        {/* Plain anchors: the .markdown layer gives them the article link
            style (Link's link-gradient would draw a second underline). */}
        <div className="markdown prose resource-prose max-w-none">
          <p>
            This is meant as a small knowledge base for commonly answered
            questions on our Discord community,{" "}
            <AppLink to="/about">The Programmer&apos;s Hangout</AppLink>.
          </p>
          <p>
            All of it is open source, and you can contribute to it on{" "}
            <a href={packageJson.repository.url} target="_blank" rel="noreferrer">
              GitHub
            </a>
            .
          </p>
        </div>
        <ResourcesList />
      </ResourceArticle>
    </Shell>
  )
}
