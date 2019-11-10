import React, { Fragment } from "react"

import packageJson from "../../package.json"
import { ColumnLink } from "../components/ColumnLink"
import { ResourcesList } from "../components/ResourcesList"
import { SEO } from "../components/SEO"

function ResourcesPage() {
  return (
    <Fragment>
      <SEO title="Resources" />
      <p>Welcome to the TPH resources.</p>
      <p>
        This is meant as a small knowledge base for commonly answered questions
        on our Discord community,{" "}
        <ColumnLink to="/about">The Programmer's Hangout</ColumnLink>.
      </p>
      <p>
        All of it is open source, and you can contribute to it on{" "}
        <ColumnLink to={packageJson.repository.url}>GitHub</ColumnLink>.
      </p>
      <ResourcesList />
    </Fragment>
  )
}

export default ResourcesPage
