import React, { Fragment } from "react"

import { SEO } from "../components/SEO"
import { FourZeroFour } from "../components/FourZeroFour"

function NotFoundPage() {
  return (
    <Fragment>
      <SEO title="404: Not found" />
      <FourZeroFour title="NOT FOUND" />
    </Fragment>
  )
}

export default NotFoundPage
