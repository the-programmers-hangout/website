const { graphql } = require("gatsby")
const { createFilePath } = require("gatsby-source-filesystem")
const helper = require("./scripts/buildHelpers")
const path = require(`path`)
const fs = require("fs")

const requiredArticleFrontmatter = ["authors", "date"]

let users = []
try {
  users = JSON.parse(fs.readFileSync("./users.json", "utf-8"))
  console.log("(◕◡◕✿) Users list loaded!")
} catch (e) {
  console.log("(◕‸ ◕✿) Users list not present, skipping user resolution...")
}

const validateResourceArticle = node => {
  const missingField = requiredArticleFrontmatter.find(
    required => node.frontmatter[required]
  )
  if (missingField) {
    console.error(
      `Article ${node.fileAbsolutePath} is missing field '${missingField}'`
    )
    process.exit(1)
  }
}

const createResources = async ({ createPage, graphql }) => {
  const languageResources = path.resolve(`src/templates/languagePost.tsx`)

  const result = await graphql(`
    query FetchResources {
      allFile(filter: { sourceInstanceName: { eq: "resources" } }) {
        edges {
          node {
            relativePath
          }
        }
      }
    }
  `)

  if (result.errors) {
    return Promise.reject(result.errors)
  }

  return result.data.allFile.edges.forEach(({ node }) => {
    createPage({
      path: path.join("resources", node.relativePath),
      component: languageResources,
      context: {
        file: node.relativePath,
      },
    })
  })
}

exports.onCreateNode = async ({ node, getNode, actions }) => {
  const { createPage, createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const { frontmatter } = node
    const isDoc = Boolean(!frontmatter.path)

    const githubLink = helper.findMarkdownLink(node.fileAbsolutePath)

    createNodeField({
      node,
      name: "githubLink",
      value: githubLink,
    })

    if (!isDoc) {
      return
    }

    const authors = helper.resolveAuthors(users, frontmatter.authors)

    createNodeField({
      node,
      name: "authors",
      value: authors,
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  return createResources({ createPage, graphql })
}
