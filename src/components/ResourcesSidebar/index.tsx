import { graphql, useStaticQuery } from "gatsby"
import React, { FC, HTMLAttributes, memo, useState } from "react"
import TriangleDown from "../../icons/triangle-down.svg"
import { IAllResourcesQuery, IFileOrFolder, IFolder } from "../../types"
import { humanize } from "../../utils"
import { ColumnSidebar } from "../ColumnSidebar"
import useBuildTree from "./../../hooks/useBuildTree"
import useSidebar from "./../../hooks/useSidebar"
import * as SC from "./styles"
import useMatchingPath from "./useMatchingPath"

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

  useMatchingPath(item.path, () => {
    setCollapse(false)
  })

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

    useMatchingPath(item.path, () => {
      setCurrent(index)
    })

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

export const ResourcesSidebar: FC<HTMLAttributes<HTMLDivElement>> = props => {
  const resources = useStaticQuery<IAllResourcesQuery>(ALL_RESOURCES)
  const tree = useBuildTree(resources, "/resources")
  const sortedTree = tree.sort((a, b) => a.title.localeCompare(b.title))

  return (
    <ColumnSidebar {...props}>
      {sortedTree.map((node, index) => plantTree(node, index, true))}
    </ColumnSidebar>
  )
}
