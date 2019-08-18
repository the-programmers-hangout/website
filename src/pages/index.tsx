import React, { Fragment } from "react"

import { SEO } from "../components/SEO"
import { Markdown } from '../components/Markdown'
import { MarkdownRemark } from '../generated/graphql';
import { graphql } from 'gatsby';

function HomePage({ data }: ComponentQuery<{ md: MarkdownRemark }>) {
  const { md } = data;
  
  return (
    <Fragment>
      <SEO title="Home" />
      <Markdown content={md.html!} />
    </Fragment>
  )
}

export const query = graphql`
  query HomePage {
    md: markdownRemark(frontmatter: { path: { eq: "/" } }) {
      html
    }
  }
`

export default HomePage
