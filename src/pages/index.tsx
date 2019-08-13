import { Link } from "gatsby"
import React, { Fragment } from "react"

import { SEO } from "../components/SEO"

function IndexPage() {
  return (
    <Fragment>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
      <Link to="/page-2/">Go to page 2</Link>
    </Fragment>
  )
}

export default IndexPage
