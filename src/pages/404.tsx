import React, { Fragment } from "react"

import { Link } from "gatsby"
import { SEO } from "../components/SEO"

function NotFoundPage() {
  return (
    <Fragment>
      <SEO title="404: Not found" />
      <h1>404</h1>
      <p>Are you lost?</p>
      <Link to="/">Go back to safety</Link>
    </Fragment>
  )
}

export default NotFoundPage
