import { Location } from "@reach/router"
import { graphql } from "gatsby"
import React, { Fragment } from "react"

import { FileConnection } from "../../../generated/graphql"
import { ComponentQuery } from "../../../typings"
import { PossibleCorrections } from "../../components/404LinkCorrection"
import { SEO } from "../../components/SEO"
import { FourZeroFour } from "../../components/FourZeroFour"

export default ({ data }: ComponentQuery<{ allFile: FileConnection }>) => (
  <Fragment>
    <SEO title="404: Resource Not found" />
    <FourZeroFour title="RESOURCE NOT FOUND">
      <Location>
        {({ location }) => (
          <PossibleCorrections
            basepath="resources/"
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
    allFile(filter: { sourceInstanceName: { eq: "resources" } }) {
      edges {
        node {
          relativePath
        }
      }
    }
  }
`
