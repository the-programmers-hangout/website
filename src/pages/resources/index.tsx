import React from "react"

import packageJson from "../../../package.json"
import { HeaderBarebone } from "../../components/HeaderBarebone"
import { Link } from "../../components/Link"
import { PageContent } from "../../components/PageContent"
import { ResourcesList } from "../../components/ResourcesList"
import { SEO } from "../../components/SEO"

function ResourcesPage() {
  return (
    <>
      <SEO title="Resources" />
      <HeaderBarebone
        title="Welcome to the TPH resources"
        content={
          <>
            <p>
              This is meant as a small knowledge base for commonly answered
              questions on our Discord community,{" "}
              <Link to="/about">The Programmer&apos;s Hangout</Link>.
            </p>
            <p>
              All of it is open source, and you can contribute to it on{" "}
              <Link to={packageJson.repository.url}>GitHub</Link>.
            </p>
          </>
        }
      />

      <PageContent content={<ResourcesList />} />
    </>
  )
}

export default ResourcesPage
