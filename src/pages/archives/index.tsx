import React, { Fragment } from "react"

import { Link } from "../../components/Link"
import { SEO } from "../../components/SEO"

function ArchivesPage() {
  return (
    <Fragment>
      <SEO title="Tech Spotlights Archives" />
      <p>Welcome to the TPH tech spotlights archives.</p>
      <p>
        This regroups the archives of our occasional, temporary channels that
        cover a piece of technology that might be unknown to part of our users.
        You can find those on <Link to="/about">The Programmer's Hangout</Link>.
      </p>
    </Fragment>
  )
}

export default ArchivesPage
