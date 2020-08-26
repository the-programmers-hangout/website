import React, { Fragment } from "react"

import { HeaderBarebone } from "../../components/HeaderBarebone"
import { Link } from "../../components/Link"
import { PageContent } from "../../components/PageContent"
import { SEO } from "../../components/SEO"

function ArchivesPage() {
  return (
    <Fragment>
      <SEO title="Tech Spotlights Archives" />
      <HeaderBarebone title="Welcome to the TPH tech spotlights archives." />

      <PageContent
        content={
          <p>
            This regroups the archives of our occasional, temporary channels
            that cover a piece of technology that might be unknown to part of
            our users. You can find those on{" "}
            <Link to="/about">The Programmer&apos;s Hangout</Link>.
          </p>
        }
      />
    </Fragment>
  )
}

export default ArchivesPage
