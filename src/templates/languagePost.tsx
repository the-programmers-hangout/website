import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const LanguagePost = ({ data }) => {
  const { html } = data.file.post;
  console.log(data)
  return (
    <Layout>
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
          author
          date
        }
      }
    }
  }
`