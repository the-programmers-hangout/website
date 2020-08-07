import { Location } from "@reach/router"
import { graphql } from "gatsby"
import React, { Fragment } from "react"

import { FileConnection } from "../../../generated/graphql"
import { ComponentQuery } from "../../../typings"
import { SEO } from "../../components/SEO"

import { PossibleCorrections } from "../../components/404LinkCorrection"
import { FourZeroFour } from "../../components/FourZeroFour"

export default ({ data }: ComponentQuery<{ allFile: FileConnection }>) => (
  <Fragment>
    <SEO title="404: Archive Not found" />
    <FourZeroFour title="ARCHIVE NOT FOUND">
      <Location>
        {({ location }) => (
          <PossibleCorrections
            basepath="archives/"
            location={location}
            data={data}
          />
        )}
      </Location>
    </FourZeroFour>
  </Fragment>
)

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "what-is-archive" } }) {
      edges {
        node {
          relativePath
        }
      }
    }
  }
`
