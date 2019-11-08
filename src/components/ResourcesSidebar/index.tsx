import { graphql, Link, useStaticQuery } from "gatsby"
import React, { FC, HTMLAttributes, memo, useState } from "react"
import Scrollbar from "react-perfect-scrollbar"
import "react-perfect-scrollbar/dist/css/styles.css"
import TriangleDown from "../../icons/triangle-down.svg"
import Banner from "../../images/tph-banner.svg"
import { IAllResourcesQuery, IFileOrFolder, IFolder } from "../../types"
import { humanize } from "../../utils"
import { ThemeToggler } from "../ThemeToggler"
import useSidebar from "./../../hooks/useSidebar"
import * as SC from "./styles"
import useBuildTree from "./useBuildTree"

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
        {humanize(item.title)}
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
        <TriangleDown /> {humanize(item.title)}
      </SC.Label>
      <SC.Children>{item.children.map(node => plantTree(node))}</SC.Children>
    </SC.TreeWrapper>
  )
}

const FirstLevelFolder = memo(
  ({ item, index }: { item: IFolder; index: number }) => {
    const { current, setCurrent } = useSidebar()
    const collapsed = current !== index

    return (
      <SC.TreeWrapper className="firstLevel" collapsed={collapsed}>
        <SC.FirstLabel
          className={!collapsed ? "active" : undefined}
          onClick={() => setCurrent(index)}
        >
          {humanize(item.title)}
          <SC.CollapseToggler />
        </SC.FirstLabel>
        <SC.Children>{item.children.map(node => plantTree(node))}</SC.Children>
      </SC.TreeWrapper>
    )
  }
)

interface IMenuItemProps {
  to: string
}

const MenuItem: FC<IMenuItemProps> = ({ children, to }) => {
  return (
    <SC.MenuItem to={to} activeClassName="active">
      {children}
    </SC.MenuItem>
  )
}

export const ResourcesSidebar: FC<HTMLAttributes<HTMLDivElement>> = props => {
  const resources = useStaticQuery<IAllResourcesQuery>(ALL_RESOURCES)
  const tree = useBuildTree(resources)
  const sortedTree = tree.sort((a, b) => a.title.localeCompare(b.title))

  return (
    <SC.ResourcesSidebarWrapper {...props}>
      <Scrollbar>
        <Link to="/">
          <Banner />
        </Link>
        <SC.Inner>
          {sortedTree.map((node, index) => plantTree(node, index, true))}

          <SC.Menu>
            <MenuItem to="/about">about</MenuItem>
            <MenuItem to="/rules">rules</MenuItem>
            <MenuItem to="/faq">faq</MenuItem>
            <MenuItem to="/">hotbot</MenuItem>
            <MenuItem to="/resources">resources</MenuItem>
            <MenuItem to="/">tech</MenuItem>
          </SC.Menu>

          <ThemeToggler />
        </SC.Inner>
      </Scrollbar>
    </SC.ResourcesSidebarWrapper>
  )
}
