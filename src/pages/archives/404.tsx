import { Location } from "@reach/router"
import { graphql } from "gatsby"
import React, { Fragment } from "react"
import * as SC from "../styles"

import { FileConnection } from "../../../generated/graphql"
import { ComponentQuery } from "../../../typings"
import { SEO } from "../../components/SEO"

import { PossibleCorrections } from "../../components/404LinkCorrection"

export default ({ data }: ComponentQuery<{ allFile: FileConnection }>) => (
  <Fragment>
    <SEO title="404: Archive Not found" />
    <SC.StyledDiv>
        <SC.StyledH1>RESOURCE NOT FOUND</SC.StyledH1>
        <SC.StyledPara>You just hit a route that doesn&#39;t exist... the sadness.</SC.StyledPara>
    </SC.StyledDiv>
    <Location>
      {({ location }) => (
        <PossibleCorrections
          basepath="archives/"
          location={location}
          data={data}
        />
      )}
    </Location>
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
