import { Location } from "@reach/router"
import { graphql } from "gatsby"
import React, { Fragment } from "react"

import { FileConnection } from "../../../generated/graphql"
import { ComponentQuery } from "../../../typings"
import { SEO } from "../../components/SEO"

import { FourZeroFourHint } from "../../components/FourZeroFourHint"
import { FourZeroFour } from "../../components/FourZeroFour"

// TODO: there has to be a better type for this
const FourZeroFourPage: React.FC<{ data: { allFile: FileConnection } }> = ({
  data,
}: ComponentQuery<{ allFile: FileConnection }>) => (
  <Fragment>
    <SEO title="404: Archive Not found" />
    <FourZeroFour title="ARCHIVE NOT FOUND">
      <Location>
        {({ location }) => (
          <FourZeroFourHint
            basepath="archives/"
            location={location}
            data={data}
          />
        )}
      </Location>
    </FourZeroFour>
  </Fragment>
)

export default FourZeroFourPage

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
