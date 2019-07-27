import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import Layout from "../components/Layout";

// @todo maybe find alternative type for data
const LanguagePost = ({ data }: any) => {
  const { html, frontmatter } = data.file.post;
  console.log(data)
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout >
  )
}

export default LanguagePost;

export const query = graphql`
  query LanguagePost($file: String!) {
    file(relativePath: {eq: $file }) {
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
