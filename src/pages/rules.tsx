import { graphql } from "gatsby"
import React, { Fragment } from "react"
import { MarkdownRemark } from "../../generated/graphql"
import { ComponentQuery } from "../../typings"
import { HeaderBarebone } from "../components/HeaderBarebone"
import { Markdown } from "../components/Markdown"
import { PageContent } from "../components/PageContent"
import { SEO } from "../components/SEO"

function RulesPage({ data }: ComponentQuery<{ md: MarkdownRemark }>) {
  const { md } = data

  return (
    <Fragment>
      <SEO title="Rules" />
      <HeaderBarebone title="Rules" />

      <PageContent content={<Markdown content={md.html!} />} />
    </Fragment>
  )
}

export const query = graphql`
  query RulesPage {
    md: markdownRemark(frontmatter: { path: { eq: "/rules" } }) {
      html
    }
  }
`

export default RulesPage
