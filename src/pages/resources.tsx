import { Link } from "gatsby"
import React, { Fragment } from "react"

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
        <Link to="/about">The Programmer's Hangout</Link>.
      </p>
      <ResourcesList />
    </Fragment>
  )
}

export default ResourcesPage
