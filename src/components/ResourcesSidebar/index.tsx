import { graphql, useStaticQuery } from "gatsby"
import descend from "ramda/es/descend"
import sortWith from "ramda/es/sortWith"
import React, { FC, HTMLAttributes, memo, useState } from "react"
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll"
import useSidebar from "../../hooks/useSidebar"
import TriangleDown from "../../icons/triangle-down.svg"
import { IFileOrFolder, IFolder } from "../../types"
import { getPath, humanize } from "../../utils"
import { Sidebar } from "../Sidebar"
import * as SC from "./styles"
import useMatchingPath from "./useMatchingPath"
import useTree from "./useTree"

const ALL_RESOURCES = graphql`
  query AllTopicsAndAllLanguages {
    languages: allFile(filter: { sourceInstanceName: { eq: "languages" } }) {
      edges {
        node {
          relativePath
          childMdx {
            frontmatter {
              authors
              title
            }
          }
        }
      }
    }
    topics: allFile(filter: { sourceInstanceName: { eq: "topics" } }) {
      edges {
        node {
          relativePath
          childMdx {
            frontmatter {
              authors
              title
            }
          }
        }
      }
    }
  }
`

const childrenSort = sortWith<IFileOrFolder>([
  descend((f) => {
    if (f.title === "intro") {
      return 1
    }

    if (f.type === "folder") {
      return 0
    }

    return -1
  }),
])

function Tree({
  item,
  firstLevel,
}: {
  item: IFileOrFolder
  index?: number
  firstLevel?: boolean
}) {
  const { setOpenOnMobile } = useSidebar()
  const { unlock } = useLockBodyScroll()

  if (item.type === "file") {
    const path = getPath(item)

    return (
      <SC.PageLink
        key={item.title}
        to={path}
        activeClassName="active"
        onClick={() => {
          setOpenOnMobile(false)
          unlock()
        }}
      >
        {humanize(item.title)}
      </SC.PageLink>
    )
  }

  if (firstLevel) {
    return <FirstLevelFolder key={item.title} item={item} />
  }

  return <Folder key={item.title} item={item} />
}

function Folder({ item }: { item: IFolder }) {
  const [collapsed, setCollapse] = useState(true)

  useMatchingPath(item.path, () => {
    setCollapse(false)
  })

  function toggleCollapse() {
    setCollapse((prevState) => !prevState)
  }

  const sortedChildren = childrenSort(item.children)

  return (
    <SC.TreeWrapper collapsed={collapsed}>
      <SC.Label onClick={toggleCollapse}>
        <TriangleDown /> {humanize(item.title)}
      </SC.Label>
      <SC.Children>
        {sortedChildren.map((node) => (
          <Tree key={node.title + "-tree"} item={node} />
        ))}
      </SC.Children>
    </SC.TreeWrapper>
  )
}

const FirstLevelFolder = memo(({ item }: { item: IFolder }) => {
  const { setCurrent } = useSidebar()

  const isProject = item.path.startsWith("/resources/projects")

  useMatchingPath(item.path, () => {
    setCurrent(item.title)
  })

  const sortedChildren = childrenSort(item.children)

  return (
    <SC.TreeWrapper className="firstLevel">
      <SC.FirstLabel>{humanize(item.title)}</SC.FirstLabel>
      <SC.Children>
        {sortedChildren
          .filter((child) => {
            // TODO: clean me up, temporary fix
            if (isProject && child.title === "intro") return false
            return true
          })
          .map((node) => (
            <Tree key={node.title + "-tree"} item={node} />
          ))}
      </SC.Children>
    </SC.TreeWrapper>
  )
})

FirstLevelFolder.displayName = "FirstLevelFolder"

const ResourceList: FC<{
  items: IFileOrFolder[]
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ items, setExpanded }) => {
  const { current, setCurrent } = useSidebar()

  return (
    <SC.StyledResourceList>
      {items.map((item) => (
        <SC.PageLink
          key={item.title}
          to={getPath(item)}
          className={current === item.title ? "active" : ""}
          onClick={() => {
            setCurrent(item.title)
            setExpanded(false)
          }}
        >
          {item.title}
        </SC.PageLink>
      ))}
    </SC.StyledResourceList>
  )
}

const ExpandResources: FC<{
  expanded: boolean
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ children, expanded, setExpanded }) => {
  const { current } = useSidebar()

  const showList = expanded || !current

  return (
    <SC.ExpandResources>
      {current && (
        <SC.ExpandResourcesHeader
          onClick={() => setExpanded((prevState) => !prevState)}
        >
          Expand resources {expanded ? <SC.CollapseIcon /> : <SC.ExpandIcon />}
        </SC.ExpandResourcesHeader>
      )}
      {showList && children}
    </SC.ExpandResources>
  )
}

export const ResourcesSidebar: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const [expanded, setExpanded] = useState(false)
  const resources = useStaticQuery(ALL_RESOURCES)
  const languagesTree = useTree(resources.languages)
  const topicsTree = useTree(resources.topics)
  const { current } = useSidebar()

  const currentLanguage = languagesTree.find((lang) => lang.title === current)
  const currentTopic = topicsTree.find((topic) => topic.title === current)

  return (
    <Sidebar {...props}>
      <ExpandResources expanded={expanded} setExpanded={setExpanded}>
        <ResourceList items={languagesTree} setExpanded={setExpanded} />
        <ResourceList items={topicsTree} setExpanded={setExpanded} />
      </ExpandResources>
      {currentLanguage && <Tree item={currentLanguage} firstLevel={true} />}
      {currentTopic && <Tree item={currentTopic} firstLevel={true} />}
    </Sidebar>
  )
}
