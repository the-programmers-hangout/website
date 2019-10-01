import { graphql } from "gatsby"
import React, { FC, Fragment } from "react"
import { Markdown } from "../components/Markdown"
import { ResourceHeader } from "../components/ResourceHeader"
import { SEO } from "../components/SEO"

import "katex/dist/katex.min.css"

// @todo maybe find alternative type for data
const LanguagePost: FC<any> = ({ data }) => {
  const { relativePath } = data.file
  const { html, fields, frontmatter, timeToRead } = data.file.post

  return (
    <Fragment>
      <SEO title={frontmatter.title} />
      <ResourceHeader
        relativePath={relativePath}
        title={frontmatter.title}
        authors={fields.authors}
        createdAt={frontmatter.created_at}
        timeToRead={timeToRead}
        recommendedReading={frontmatter.recommended_reading}
        externalResources={frontmatter.external_resources}
      />
      <Markdown content={html} />
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
