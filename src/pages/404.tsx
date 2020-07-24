import React, { Fragment } from "react"
import * as SC from "./styles"

import { SEO } from "../components/SEO"

function NotFoundPage() {
  return (
    <Fragment>
      <SEO title="404: Not found" />
      <SC.StyledDiv>
          <SC.StyledH1>NOT FOUND</SC.StyledH1>
          <SC.StyledPara>You just hit a route that doesn&#39;t exist... the sadness.</SC.StyledPara>
      </SC.StyledDiv>
    </Fragment>
  )
}

export default NotFoundPage
