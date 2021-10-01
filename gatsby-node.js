const { graphql } = require("gatsby")
const { createFilePath } = require("gatsby-source-filesystem")
const helper = require("./scripts/buildHelpers")
const path = require(`path`)
const fs = require("fs")

const requiredArticleFrontmatter = ["authors", "date"]

const LAYOUT_RESOURCES = "resources"
const LAYOUT_ARCHIVES = "archives"
const LAYOUT_REGULAR = "regular"
const LAYOUT_HOME = "home"

function resolveLayout(path) {
  if (path === "/") {
    return LAYOUT_HOME
  }

  if (path.match(/resources/)) {
    return LAYOUT_RESOURCES
  }

  if (path.match(/archives/)) {
    return LAYOUT_ARCHIVES
  }

  return LAYOUT_REGULAR
}

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
  const resourcePage = path.resolve(`src/templates/resourcePage.tsx`)
  const resourceHome = path.resolve(`src/templates/resourceHome.tsx`)

  const languagesQuery = await graphql(
    `
      query FetchLanguages {
        allFile(filter: { sourceInstanceName: { eq: "languages" } }) {
          edges {
            node {
              relativePath
              relativeDirectory
              sourceInstanceName
            }
          }
        }
      }
    `
  )

  const topicsQuery = await graphql(
    `
      query FetchTopics {
        allFile(filter: { sourceInstanceName: { eq: "topics" } }) {
          edges {
            node {
              relativePath
              relativeDirectory
              sourceInstanceName
            }
          }
        }
      }
    `
  )

  const resources = [
    { key: "topics", query: topicsQuery },
    { key: "languages", query: languagesQuery },
  ]

  for ({ key, query } of resources) {
    if (query.errors) {
      return Promise.reject(query.errors)
    }

    const resources = query.data.allFile.edges.reduce((acc, { node }) => {
      const [resourceCategory] = node.relativePath.split("/")
      if (!acc.includes(resourceCategory)) {
        acc.push(resourceCategory)
      }
      return acc
    }, [])

    // create home page for each resources
    resources.forEach((resource) => {
      createPage({
        path: path.posix.join("resources", resource),
        component: resourceHome,
        context: {
          resourceType: key,
          entry: resource,
          layout: LAYOUT_RESOURCES,
        },
      })
    })

    query.data.allFile.edges.forEach(({ node }) => {
      createPage({
        path: path.posix.join("resources", node.relativePath),
        component: resourcePage,
        context: {
          file: node.relativePath,
          directory: node.relativeDirectory,
          layout: LAYOUT_RESOURCES,
        },
      })
    })
  }
}

const createArchives = async ({ createPage, graphql }) => {
  const archive = path.resolve(`src/templates/archive.tsx`)

  const result = await graphql(`
    query FetchArchives {
      allFile(filter: { sourceInstanceName: { eq: "what-is-archive" } }) {
        edges {
          node {
            relativePath
            sourceInstanceName
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
      path: path.posix.join("archives", node.relativePath),
      component: archive,
      context: {
        file: node.relativePath,
        layout: LAYOUT_ARCHIVES,
      },
    })
  })
}

exports.onCreateNode = async ({ node, getNode, actions }) => {
  const { createPage, createNodeField } = actions
  // TODO: find a better way to avoid handling non-resources
  // or better, attach authors to what-is archives
  if (node.internal.type === "Mdx" && node.frontmatter.authors) {
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

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions

  if (page.path.match(/^\/resources\/404/)) {
    const oldPage = { ...page }
    page.matchPath = `/resources/*`
    deletePage(oldPage)
  } else if (page.path.match(/^\/archives\/404/)) {
    const oldPage = { ...page }
    page.matchPath = `/archives/*`
    deletePage(oldPage)
  }

  page.context.layout = resolveLayout(page.path)
  createPage(page)
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return Promise.all([
    createArchives({ createPage, graphql }),
    createResources({ createPage, graphql }),
  ])
}
