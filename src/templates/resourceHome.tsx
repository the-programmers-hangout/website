import { graphql } from "gatsby"
import React, { FC, Fragment } from "react"
import { Header } from "../components/Header"
import { ResourcesHomeContent } from "../components/ResourcesHomeContent"
import { SEO } from "../components/SEO"
import { PageContent } from "../components/PageContent"
import useSidebar from "../hooks/useSidebar"

// @todo maybe find alternative type for data
const ResourceHome: FC<any> = ({ data, pageContext }) => {
  const { current: language } = useSidebar()
  const { relativePath } = data.file
  const { body, excerpt, fields, frontmatter, timeToRead } = data.file.post

  const shiftLayout = Boolean(
    frontmatter.recommended_reading || frontmatter.external_resources
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
          <ResourcesHomeContent language={pageContext.language} body={body} />
        }
        recommendedReading={frontmatter.recommended_reading}
        externalResources={frontmatter.external_resources}
      />
    </Fragment>
  )
}

export default ResourceHome

export const query = graphql`
  query ResourceHome($resourceType: String!, $entry: String!) {
    file(
      sourceInstanceName: { eq: $resourceType }
      relativeDirectory: { eq: $entry }
      base: { eq: "intro.md" }
    ) {
      relativePath
      post: childMdx {
        body
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
