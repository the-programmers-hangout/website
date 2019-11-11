import React, { Fragment } from "react"

import { ColumnLink } from "../components/ColumnLink"
import { SEO } from "../components/SEO"

function ResourcesPage() {
  return (
    <Fragment>
      <SEO title="Tech Spotlights Archives" />
      <p>Welcome to the TPH tech spotlights archives.</p>
      <p>
        This regroups the archives of our occasional, temporary channels that
        cover a piece of technology that might be unknown to part of our users.
        You can find those on{" "}
        <ColumnLink to="/about">The Programmer's Hangout</ColumnLink>.
      </p>
    </Fragment>
  )
}

export default ResourcesPage
