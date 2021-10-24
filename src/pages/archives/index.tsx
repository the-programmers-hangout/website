import React, { Fragment } from "react"

import { HeaderBarebone } from "../../components/HeaderBarebone"
import { Link } from "../../components/Link"
import { PageContent } from "../../components/PageContent"
import { SEO } from "../../components/SEO"

function ArchivesPage() {
  return (
    <Fragment>
      <SEO title="Tech Spotlights" />
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
    </Fragment>
  )
}

export default ArchivesPage
