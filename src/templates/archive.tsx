import { graphql } from "gatsby"
import React, { FC, Fragment } from "react"
import { ColumnHeader } from "../components/ColumnHeader"
import { Markdown } from "../components/Markdown"
import { SEO } from "../components/SEO"
import { humanize } from "../utils"

// @todo maybe find alternative type for data
const Archive: FC<any> = ({ data }) => {
  const { relativePath, ctime } = data.file
  const { html, excerpt, timeToRead } = data.file.post

  const title = humanize(relativePath)

  return (
    <Fragment>
      <SEO title={title} description={excerpt} />
      <ColumnHeader
        relativePath={relativePath}
        basePath="/archives"
        title={title}
        createdAt={ctime}
        timeToRead={timeToRead}
      />
      <Markdown content={html} />
    </Fragment>
  )
}

export default Archive

export const query = graphql`
  query Archive($file: String!) {
    file(relativePath: { eq: $file }) {
      relativePath
      ctime
      post: childMarkdownRemark {
        html
        excerpt
        timeToRead
      }
    }
  }
`
