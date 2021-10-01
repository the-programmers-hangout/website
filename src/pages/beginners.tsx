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

function Beginners({ data }: ComponentQuery<{ md: Mdx }>) {
  const { md } = data

  const toc = buildToc(md.headings!)

  return (
    <Fragment>
      <SEO title="Beginners" />
      <HeaderBarebone
        title="Beginners"
        className={cx({ shifted: toc.length })}
      />

      <PageContent content={<Markdown content={md.body!} />} toc={toc} />
    </Fragment>
  )
}

export const query = graphql`
  query beginners {
    md: mdx(frontmatter: { path: { eq: "/beginners" } }) {
      body
      headings {
        depth
        value
      }
    }
  }
`

export default Beginners
