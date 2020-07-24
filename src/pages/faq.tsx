import { graphql } from "gatsby"
import React, { Fragment } from "react"
import cx from "classnames"
import { MarkdownRemark } from "../../generated/graphql"
import { ComponentQuery } from "../../typings"
import { Markdown } from "../components/Markdown"
import { SEO } from "../components/SEO"
import { PageContent } from "../components/PageContent"
import { HeaderBarebone } from "../components/HeaderBarebone"
import { buildToc } from "../utils"

function FaqPage({ data }: ComponentQuery<{ md: MarkdownRemark }>) {
  const { md } = data

  const toc = buildToc(md.headings!)

  return (
    <Fragment>
      <SEO title="FAQ" />
      <HeaderBarebone
        title="Frequently Asked Questions"
        className={cx({ shifted: toc.length })}
      />

      <PageContent content={<Markdown content={md.html!} />} toc={toc} />
    </Fragment>
  )
}

export const query = graphql`
  query FaqPage {
    md: markdownRemark(frontmatter: { path: { eq: "/faq" } }) {
      html
      headings {
        depth
        value
      }
    }
  }
`

export default FaqPage
