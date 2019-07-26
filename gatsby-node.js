const { graphql } = require('gatsby');
const { createFilePath } = require("gatsby-source-filesystem");
const path = require(`path`)

const usersEndpoint = (id) => `https://discordapp.com/api/guilds/${id}/members`;

const fetchUsers = () => {
  // Fetch user data from discord using bot token here
}

const createDocs = async ({ createPage, graphql }) => {
  const languageDocs = path.resolve(`src/templates/languagePost.tsx`)

  const result = await graphql(`
    {
      allFile(filter: {sourceInstanceName: {eq: "docs"}}) {
        edges {
          node {
            relativePath
            childMarkdownRemark {
              frontmatter {
                author
                date
              }
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    return Promise.reject(result.errors)
  }

  return result.data.allFile.edges.forEach(({ node }) => {
    createPage({
      path: path.join('docs', node.relativePath),
      component: languageDocs,
      context: {
        file: node.relativePath
      },
    })
  })
}

exports.onCreateNode = async ({ node, getNode, actions }) => {
  const { createPage, createNodeField } = actions;
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: "src/content/docs" })
    createNodeField({
      node,
      name: "slug",
      value: slug
    });
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  return createDocs({ createPage, graphql });
}