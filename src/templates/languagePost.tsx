import React, { Fragment } from "react"
import { graphql } from "gatsby"
import { Markdown } from "../components/Markdown"
import { SEO } from "../components/SEO"
import { ResourceHeader } from "../components/ResourceHeader"

// @todo maybe find alternative type for data
function LanguagePost({ data }: any) {
  const { relativePath } = data.file
  const { html, fields, frontmatter, timeToRead } = data.file.post
  console.log(data)
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
