import descend from "ramda/es/descend"
import sortWith from "ramda/es/sortWith"
import React, { FC, HTMLAttributes, memo, useState } from "react"
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll"
import useSidebar from "../../hooks/useSidebar"
import useLocation from "../../hooks/useLocation"
import { useResourceData } from "../../context/ResourceDataContext"
import TriangleDown from "../../icons/triangle-down.svg?react"
import Collapse from "../../icons/collapse.svg?react"
import Expand from "../../icons/expand.svg?react"
import { AppLink } from "../AppLink"
import { IFileOrFolder, IFolder } from "../../types"
import { getPath, humanize } from "../../utils"
import { cn } from "../../lib/cn"
import { Sidebar } from "../Sidebar"
import useMatchingPath from "./useMatchingPath"
import useTree from "./useTree"

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
      <AppLink
        key={item.title}
        to={path}
        activeClassName="active"
        className="rs-item"
        onClick={() => {
          setOpenOnMobile(false)
          unlock()
        }}
      >
        {humanize(item.title)}
      </AppLink>
    )
  }

  if (firstLevel) {
    return <FirstLevelFolder key={item.title} item={item} />
  }

  return <Folder key={item.title} item={item} />
}

function Folder({ item }: { item: IFolder }) {
  const { isMatchingPath } = useLocation()
  const [collapsed, setCollapse] = useState(() => !isMatchingPath(item.path))

  useMatchingPath(item.path, () => {
    setCollapse(false)
  })

  function toggleCollapse() {
    setCollapse((prevState) => !prevState)
  }

  const sortedChildren = childrenSort(item.children)

  return (
    <div className={cn("rs-tree", collapsed && "collapsed")}>
      <div className="rs-label" onClick={toggleCollapse}>
        <TriangleDown /> {humanize(item.title)}
      </div>
      <div className="rs-children">
        {sortedChildren.map((node) => (
          <Tree key={node.title + "-tree"} item={node} />
        ))}
      </div>
    </div>
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
    <div className="rs-tree firstLevel">
      <div className="rs-first-label">{humanize(item.title)}</div>
      <div className="rs-children">
        {sortedChildren
          .filter((child) => {
            // TODO: clean me up, temporary fix
            if (isProject && child.title === "intro") return false
            return true
          })
          .map((node) => (
            <Tree key={node.title + "-tree"} item={node} />
          ))}
      </div>
    </div>
  )
})

FirstLevelFolder.displayName = "FirstLevelFolder"

const ResourceList: FC<{
  items: IFileOrFolder[]
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ items, setExpanded }) => {
  const { current, setCurrent } = useSidebar()

  return (
    <div className="rs-list">
      {items.map((item) => (
        <AppLink
          key={item.title}
          to={getPath(item)}
          className={cn("rs-item", current === item.title && "active")}
          onClick={() => {
            setCurrent(item.title)
            setExpanded(false)
          }}
        >
          {item.title}
        </AppLink>
      ))}
    </div>
  )
}

const ExpandResources: FC<{
  expanded: boolean
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ children, expanded, setExpanded }) => {
  const { current } = useSidebar()

  const showList = expanded || !current

  return (
    <div className="rs-expand">
      {current && (
        <div
          className="rs-expand-header"
          onClick={() => setExpanded((prevState) => !prevState)}
        >
          Expand resources {expanded ? <Collapse /> : <Expand />}
        </div>
      )}
      {showList && children}
    </div>
  )
}

export const ResourcesSidebar: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const [expanded, setExpanded] = useState(false)
  const resources = useResourceData()
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
