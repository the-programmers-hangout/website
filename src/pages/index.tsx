import React, { Fragment } from "react"

import { SEO } from "../components/SEO"

function IndexPage() {
  return (
    <Fragment>
      <SEO title="Home" />
      <p>The Programmer's Hangout (TPH) is a Discord community of programmers with members of
      all skill levels. If you're interested in programming, you're welcome here regardless
      of how much experience you have. You'll find that we're always learning here regardless
      of expertise.</p>

      <h1>How do I join?</h1>

      <p>All you need to do is click!</p>
    </Fragment>
  )
}

export default IndexPage
