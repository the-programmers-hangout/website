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
  const languageResources = path.resolve(`src/templates/languagePost.tsx`)
  const languageHome = path.resolve(`src/templates/languageHome.tsx`)

  const result = await graphql(`
    query FetchResources {
      allFile(filter: { sourceInstanceName: { eq: "resources" } }) {
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

  const languages = result.data.allFile.edges.reduce((acc, { node }) => {
    const [language] = node.relativePath.split("/")
    if (!acc.includes(language)) {
      acc.push(language)
    }
    return acc
  }, [])

  // create home page for each languages
  languages.forEach(language => {
    createPage({
      path: path.join("resources", language),
      component: languageHome,
      context: {
        language,
        layout: LAYOUT_RESOURCES,
      },
    })
  })

  // create resource pages
  return result.data.allFile.edges.forEach(({ node }) => {
    createPage({
      path: path.join("resources", node.relativePath),
      component: languageResources,
      context: {
        file: node.relativePath,
        layout: LAYOUT_RESOURCES,
      },
    })
  })
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
      path: path.join("archives", node.relativePath),
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
  if (node.internal.type === "MarkdownRemark" && node.frontmatter.authors) {
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
  } else {
    page.context.layout = resolveLayout(page.path)
  }
  createPage(page)
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return Promise.all([
    createArchives({ createPage, graphql }),
    createResources({ createPage, graphql }),
  ])
}
