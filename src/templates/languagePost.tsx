import { graphql } from "gatsby"
import React, { FC, Fragment } from "react"
import "katex/dist/katex.min.css"

import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Markdown } from "../components/Markdown"
import { PageContent } from "../components/PageContent"
import { SEO } from "../components/SEO"
import useSidebar from "../hooks/useSidebar"
import { buildToc } from "../utils"

// @todo maybe find alternative type for data
const LanguagePost: FC<any> = ({ data }) => {
  const { current: language } = useSidebar()
  const { relativePath } = data.file
  const {
    html,
    headings,
    excerpt,
    fields,
    frontmatter,
    timeToRead,
  } = data.file.post

  const toc = buildToc(headings)

  const shiftLayout = Boolean(
    frontmatter.recommended_reading ||
      frontmatter.external_resources ||
      toc.length
  )

  return (
    <Fragment>
      <SEO
        title={frontmatter.title}
        subCategory={language}
        description={excerpt}
      />
      <Header
        relativePath={relativePath}
        basePath="/resources"
        title={frontmatter.title}
        authors={fields.authors}
        createdAt={frontmatter.created_at}
        timeToRead={timeToRead}
        shifted={shiftLayout}
      />
      <PageContent
        content={
          <>
            <Markdown content={html} />
            <Footer />
          </>
        }
        toc={toc}
        recommendedReading={frontmatter.recommended_reading}
        externalResources={frontmatter.external_resources}
      />
    </Fragment>
  )
}

export default LanguagePost

export const query = graphql`
  query LanguagePost($file: String!) {
    file(relativePath: { eq: $file }) {
      relativePath
      post: childMarkdownRemark {
        html
        headings {
          depth
          value
        }
        excerpt
        fields {
          authors {
            name
            hash
            avatar
          }
        }
        frontmatter {
          created_at
          title
          recommended_reading
          external_resources {
            text
            href
          }
        }
        timeToRead
      }
    }
  }
`
