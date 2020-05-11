import { graphql } from "gatsby"
import React, { Fragment } from "react"
import { MarkdownRemark } from "../../generated/graphql"
import { ComponentQuery } from "../../typings"
import { Markdown } from "../components/Markdown"
import { SEO } from "../components/SEO"
import { PageContent } from "../components/PageContent"
import { HeaderBarebone } from "../components/HeaderBarebone"

function AboutPage({ data }: ComponentQuery<{ md: MarkdownRemark }>) {
  const { md } = data

  return (
    <Fragment>
      <SEO title="About" />
      <HeaderBarebone title="About us" />

      <PageContent content={<Markdown content={md.html!} />} />
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
