import { graphql } from "gatsby"
import React, { Fragment } from "react"
import cx from "classnames"
import { Mdx } from "../../generated/graphql"
import { ComponentQuery } from "../../typings"
import { Markdown } from "../components/Markdown"
import { SEO } from "../components/SEO"
import { PageContent } from "../components/PageContent"
import { HeaderBarebone } from "../components/HeaderBarebone"
import { buildToc } from "../utils"

function BotPage({ data }: ComponentQuery<{ md: Mdx }>) {
  const { md } = data

  const toc = buildToc(md.headings!)

  return (
    <Fragment>
      <SEO title="BOTS" />
      <HeaderBarebone
        title="Bots"
        className={cx({ shifted: toc.length })}
      />

      <PageContent content={<Markdown content={md.body!} />} toc={toc} />
    </Fragment>
  )
}

export const query = graphql`
  query BotPage {
    md: mdx(frontmatter: { path: { eq: "/bots" } }) {
      body
      headings {
        depth
        value
      }
    }
  }
`

export default BotPage
