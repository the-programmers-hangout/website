import { graphql } from "gatsby"
import React, { FC, Fragment } from "react"
import { Header } from "../components/Header"
import { Markdown } from "../components/Markdown"
import { ResourcesList } from "../components/ResourcesList"
import { SEO } from "../components/SEO"
import { PageContent } from "../components/PageContent"
import { Footer } from "../components/Footer"

// @todo maybe find alternative type for data
const LanguageHome: FC<any> = ({ data, pageContext }) => {
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
            <ResourcesList relativeDirectory={pageContext.language} />
            <Footer />
          </>
        }
        recommendedReading={frontmatter.recommended_reading}
        externalResources={frontmatter.external_resources}
      />
    </Fragment>
  )
}

export default LanguageHome

export const query = graphql`
  query LanguageHome($language: String!) {
    file(
      sourceInstanceName: { eq: "resources" }
      relativeDirectory: { eq: $language }
      base: { eq: "intro.md" }
    ) {
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
