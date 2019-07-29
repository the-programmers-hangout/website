import React, { useState } from "react"
import Tree from "react-treeview"
import { useStaticQuery, graphql } from "gatsby"
import useBuildTree from "./useBuildTree"
import * as SC from "./styles"

export interface IFile {
  title: string
  type: "file"
  path: string
}

export interface IFolder {
  title: string
  type: "folder"
  path: string
  children: IFileOrFolder[]
}

export type IFileOrFolder = IFile | IFolder

export interface IFileQuery {
  node: {
    relativePath: string
    childMarkdownRemark: {
      frontmatter: {
        author: string
        date: string
      }
    }
  }
}

export interface IAllDocsQuery {
  allFile: {
    edges: IFileQuery[]
  }
}

const ALL_DOCS = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "docs" } }) {
      edges {
        node {
          relativePath
          childMarkdownRemark {
            frontmatter {
              authors
              title
              date
            }
          }
        }
      }
    }
  }
`

function plantTree(item: IFileOrFolder) {
  if (item.type === "file") {
    return (
      <SC.PageLink to={item.path} activeClassName="active">
        {item.title}
      </SC.PageLink>
    )
  }

  return <Folder item={item} />
}

function Folder({ item }: { item: IFolder }) {
  const [collapsed, setCollapse] = useState(false)

  function toggleCollapse() {
    setCollapse(prevState => !prevState)
  }

  return (
    <Tree
      collapsed={collapsed}
      nodeLabel={<div onClick={toggleCollapse}>{item.title}</div>}
    >
      {item.children.map(plantTree)}
    </Tree>
  )
}

export function DocsSidebar() {
  const docs = useStaticQuery<IAllDocsQuery>(ALL_DOCS)
  const tree = useBuildTree(docs)

  return (
    <SC.DocsSidebarWrapper>
      {tree.map(node => plantTree(node))}
    </SC.DocsSidebarWrapper>
  )
}
