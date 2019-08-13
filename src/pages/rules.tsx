import React, { Fragment } from "react"
import { graphql } from "gatsby"
import { Markdown } from "../components/Markdown"
import { MarkdownRemark, Query } from "../../generated/graphql"
import { SEO } from "../components/SEO"

function RulesPage({ data }: ComponentQuery<{ md: MarkdownRemark }>) {
  const { md } = data

  return (
    <Fragment>
      <SEO title="Rules" />
      <Markdown content={md.html!} />
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
