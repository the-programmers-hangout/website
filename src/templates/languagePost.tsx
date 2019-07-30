import React from "react"
import { graphql } from "gatsby"
import { Markdown } from "../components/Markdown"
import { SEO } from "../components/SEO"
import { ResourcesLayout } from "../components/ResourcesLayout"
import { ResourceHeader } from "../components/ResourceHeader"

// @todo maybe find alternative type for data
function LanguagePost({ data }: any) {
  const { html, fields, frontmatter, timeToRead } = data.file.post
  console.log(data)
  return (
    <ResourcesLayout>
      <SEO title={frontmatter.title} />
      <ResourceHeader
        title={frontmatter.title}
        authors={fields.authors}
        createdAt={frontmatter.created_at}
        timeToRead={timeToRead}
        recommendedReading={frontmatter.recommended_reading}
      />
      <Markdown content={html} />
    </ResourcesLayout>
  )
}

export default LanguagePost

export const query = graphql`
  query LanguagePost($file: String!) {
    file(relativePath: { eq: $file }) {
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
        }
        timeToRead
      }
    }
  }
`
