import { graphql } from "gatsby"
import React, { FC, Fragment } from "react"
import { Header } from "../components/Header"
import { Markdown } from "../components/Markdown"
import { SEO } from "../components/SEO"

import "katex/dist/katex.min.css"
import { PageContent } from "../components/PageContent"
import { Footer } from "../components/Footer"

// @todo maybe find alternative type for data
const LanguagePost: FC<any> = ({ data }) => {
  const { relativePath } = data.file
  const { html, excerpt, fields, frontmatter, timeToRead } = data.file.post

  const shiftLayout = Boolean(
    frontmatter.recommended_reading || frontmatter.external_resources
  )

  return (
    <Fragment>
      <SEO title={frontmatter.title} description={excerpt} />
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
          external_resources
        }
        timeToRead
      }
    }
  }
`
