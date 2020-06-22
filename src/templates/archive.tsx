import { graphql } from "gatsby"
import React, { FC, Fragment } from "react"
import { Header } from "../components/Header"
import { Markdown } from "../components/Markdown"
import { SEO } from "../components/SEO"
import { humanize } from "../utils"
import { PageContent } from "../components/PageContent"

// @todo maybe find alternative type for data
const Archive: FC<any> = ({ data }) => {
  const { relativePath, ctime } = data.file
  const { body, excerpt, timeToRead } = data.file.post

  const title = humanize(relativePath)

  return (
    <Fragment>
      <SEO title={title} description={excerpt} />
      <Header
        relativePath={relativePath}
        basePath="/archives"
        title={title}
        createdAt={ctime}
        timeToRead={timeToRead}
        shifted={false}
      />
      <PageContent content={<Markdown content={body} />} />
    </Fragment>
  )
}

export default Archive

export const query = graphql`
  query Archive($file: String!) {
    file(relativePath: { eq: $file }) {
      relativePath
      ctime
      post: childMdx {
        body
        excerpt
        timeToRead
      }
    }
  }
`
