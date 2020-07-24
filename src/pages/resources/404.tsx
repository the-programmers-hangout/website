import { Location } from "@reach/router"
import { graphql } from "gatsby"
import React, { Fragment } from "react"
import * as SC from "../styles"

import { FileConnection } from "../../../generated/graphql"
import { ComponentQuery } from "../../../typings"
import { PossibleCorrections } from "../../components/404LinkCorrection"
import { SEO } from "../../components/SEO"

export default ({ data }: ComponentQuery<{ allFile: FileConnection }>) => (
  <Fragment>
    <SEO title="404: Resource Not found" />
    <SC.StyledDiv>
        <SC.StyledH1>RESOURCE NOT FOUND</SC.StyledH1>
        <SC.StyledPara>You just hit a route that doesn&#39;t exist... the sadness.</SC.StyledPara>
    </SC.StyledDiv>
    <Location>
      {({ location }) => (
        <PossibleCorrections
          basepath="resources/"
          location={location}
          data={data}
        />
      )}
    </Location>
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
