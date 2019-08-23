import { graphql, Link, useStaticQuery } from "gatsby"
import React, { memo, PropsWithChildren, useState } from "react"
import TriangleDown from "../../icons/triangle-down.svg"
import Banner from "../../images/tph-banner.svg"
import useSidebar from "./../../hooks/useSidebar"
import * as SC from "./styles"
import useBuildTree from "./useBuildTree"

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
    <SC.TreeWrapper collapsed={collapsed}>
      <SC.Label onClick={toggleCollapse}>
        <TriangleDown /> {item.title}
      </SC.Label>
      <SC.Children>{item.children.map(node => plantTree(node))}</SC.Children>
    </SC.TreeWrapper>
  )
}

const FirstLevelFolder = memo(({ item, index }: { item: IFolder; index: number }) => {
  const { current, setCurrent } = useSidebar()
  const collapsed = current !== index

  return (
    <SC.TreeWrapper className="firstLevel" collapsed={collapsed}>
      <SC.FirstLabel
        className={!collapsed ? "active" : undefined}
        onClick={() => setCurrent(index)}
      >
        {item.title}
        <SC.CollapseToggler />
      </SC.FirstLabel>
      <SC.Children>{item.children.map(node => plantTree(node))}</SC.Children>
    </SC.TreeWrapper>
  )
})

function MenuItem({ children, to }: PropsWithChildren<{ to: string }>) {
  return (
    <SC.MenuItem to={to} activeClassName="active">
      {children}
    </SC.MenuItem>
  )
}

export function ResourcesSidebar() {
  const resources = useStaticQuery<IAllResourcesQuery>(ALL_RESOURCES)
  const tree = useBuildTree(resources)

  return (
    <SC.ResourcesSidebarWrapper>
      <Link to="/">
        <Banner />
      </Link>
      <SC.Inner>
        {tree.map((node, index) => plantTree(node, index, true))}

        <SC.Menu>
          <MenuItem to="/about">about</MenuItem>
          <MenuItem to="/rules">rules</MenuItem>
          <MenuItem to="/faq">faq</MenuItem>
          <MenuItem to="/">hotbot</MenuItem>
          <MenuItem to="/resources">resources</MenuItem>
          <MenuItem to="/">tech</MenuItem>
        </SC.Menu>
      </SC.Inner>
    </SC.ResourcesSidebarWrapper>
  )
}
