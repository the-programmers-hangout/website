import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import DocsLayout from "../components/DocsLayout"

// @todo maybe find alternative type for data
function LanguagePost({ data }: any) {
  const { html, frontmatter } = data.file.post
  console.log(data)
  return (
    <DocsLayout>
      <SEO title={frontmatter.title} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </DocsLayout>
  )
}

export default LanguagePost

export const query = graphql`
  query LanguagePost($file: String!) {
    file(relativePath: { eq: $file }) {
      post: childMarkdownRemark {
        html
        frontmatter {
          authors
          title
        }
      }
    }
  }
`
