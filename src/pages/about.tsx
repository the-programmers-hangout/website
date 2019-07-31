import React, { Fragment } from "react"
import { graphql } from "gatsby"
import { Markdown } from "../components/Markdown"
import { MarkdownRemark, Query } from "../generated/graphql"
import { SEO } from "../components/SEO"

function AboutPage({ data }: ComponentQuery<{ md: MarkdownRemark }>) {
  const { md } = data

  return (
    <Fragment>
      <SEO title="About" />
      <Markdown content={md.html!} />
    </Fragment>
  )
}

export const query = graphql`
  query AboutPage {
    md: markdownRemark(frontmatter: { path: { eq: "/about" } }) {
      html
    }
  }
`

export default AboutPage
