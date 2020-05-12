import { graphql } from "gatsby"
import React, { Fragment } from "react"
import cx from "classnames"
import { MarkdownRemark } from "../../generated/graphql"
import { ComponentQuery } from "../../typings"
import { HeaderBarebone } from "../components/HeaderBarebone"
import { Markdown } from "../components/Markdown"
import { PageContent } from "../components/PageContent"
import { SEO } from "../components/SEO"
import { buildToc } from "../utils"

function RulesPage({ data }: ComponentQuery<{ md: MarkdownRemark }>) {
  const { md } = data

  const toc = buildToc(md.headings!)

  return (
    <Fragment>
      <SEO title="Rules" />
      <HeaderBarebone title="Rules" className={cx({ shifted: toc.length })} />

      <PageContent content={<Markdown content={md.html!} />} toc={toc} />
    </Fragment>
  )
}

export const query = graphql`
  query RulesPage {
    md: markdownRemark(frontmatter: { path: { eq: "/rules" } }) {
      html
      headings {
        depth
        value
      }
    }
  }
`

export default RulesPage
