import React, { useState } from "react"
import Tree from "react-treeview"
import { useStaticQuery, graphql } from "gatsby"
import useBuildTree from "./useBuildTree"
import useSidebar from "./../../hooks/useSidebar"
import banner from "../../images/tph-banner.png"
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

export interface IAllResourcesQuery {
  allFile: {
    edges: IFileQuery[]
  }
}

const ALL_RESOURCES = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "resources" } }) {
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

function plantTree(item: IFileOrFolder, index?: number, firstLevel?: boolean) {
  if (item.type === "file") {
    return (
      <SC.PageLink key={item.title} to={item.path} activeClassName="active">
        {item.title}
      </SC.PageLink>
    )
  }

  if (firstLevel && index !== undefined) {
    return <FirstLevelFolder key={item.title} item={item} index={index} />
  }

  return <Folder key={item.title} item={item} />
}

function Folder({ item }: { item: IFolder }) {
  const [collapsed, setCollapse] = useState(true)

  function toggleCollapse() {
    setCollapse(prevState => !prevState)
  }

  return (
    <SC.TreeWrapper>
      <Tree
        collapsed={collapsed}
        nodeLabel={<div onClick={toggleCollapse}>{item.title}</div>}
      >
        {item.children.map(node => plantTree(node))}
      </Tree>
    </SC.TreeWrapper>
  )
}

function FirstLevelFolder({ item, index }: { item: IFolder; index: number }) {
  const { current, setCurrent } = useSidebar()
  const collapsed = current !== index

  return (
    <SC.TreeWrapper>
      <Tree
        collapsed={collapsed}
        nodeLabel={<div onClick={() => setCurrent(index)}>{item.title}</div>}
      >
        {item.children.map(node => plantTree(node))}
      </Tree>
    </SC.TreeWrapper>
  )
}

export function ResourcesSidebar() {
  const resources = useStaticQuery<IAllResourcesQuery>(ALL_RESOURCES)
  const tree = useBuildTree(resources)

  return (
    <SC.ResourcesSidebarWrapper>
      <SC.Banner src={banner} />
      <SC.Inner>
        {tree.map((node, index) => plantTree(node, index, true))}
      </SC.Inner>
    </SC.ResourcesSidebarWrapper>
  )
}
