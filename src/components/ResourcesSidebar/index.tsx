import descend from "ramda/es/descend"
import sortWith from "ramda/es/sortWith"
import React, { FC, HTMLAttributes, memo, useState } from "react"
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll"
import useSidebar from "../../hooks/useSidebar"
import useLocation from "../../hooks/useLocation"
import { useResourceData } from "../../context/ResourceDataContext"
import ArrowLeft from "../../icons/arrow-left-bold.svg?react"
import CaretDown from "../../icons/caret-down-fill.svg?react"
import { AppLink } from "../AppLink"
import { IFileOrFolder, IFolder } from "../../types"
import { getPath, humanize } from "../../utils"
import { cn } from "../../lib/cn"
import { Sidebar } from "../Sidebar"
import useMatchingPath from "./useMatchingPath"
import useTree from "./useTree"

// 20/26 IBM Plex Sans with tight tracking; the current page is bold with
// opened-up tracking, matching the main menu.
const itemClass =
  "text-xl leading-[26px] tracking-[-0.75px] text-sidebar-fg no-underline hover:underline [&.active]:font-bold [&.active]:tracking-[0.75px]"

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
        className={itemClass}
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

  const sortedChildren = childrenSort(item.children)

  return (
    <div className="flex flex-col items-start gap-1">
      <button
        type="button"
        aria-expanded={!collapsed}
        onClick={() => setCollapse((prevState) => !prevState)}
        className={cn(itemClass, "flex cursor-pointer items-center gap-2.5")}
      >
        {humanize(item.title)}
        <CaretDown
          aria-hidden="true"
          className={cn("shrink-0", !collapsed && "rotate-180")}
        />
      </button>
      {!collapsed && (
        <div className="flex flex-col items-start gap-1 pl-4">
          {sortedChildren.map((node) => (
            <Tree key={node.title + "-tree"} item={node} />
          ))}
        </div>
      )}
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
    <div className="flex w-full flex-col items-start gap-1 px-9">
      <div className="text-xl leading-[26px] font-bold tracking-[0.75px] text-sidebar-fg">
        {humanize(item.title)}
      </div>
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
  )
})

FirstLevelFolder.displayName = "FirstLevelFolder"

const ResourceList: FC<{
  items: IFileOrFolder[]
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ items, setExpanded }) => {
  const { current, setCurrent } = useSidebar()

  return (
    <div className="flex w-full flex-col items-start gap-1 px-9 [&+&]:mt-[13px]">
      {items.map((item) => (
        <AppLink
          key={item.title}
          to={getPath(item)}
          className={cn(itemClass, current === item.title && "active")}
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

export const ResourcesSidebar: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const [expanded, setExpanded] = useState(false)
  const resources = useResourceData()
  const languagesTree = useTree(resources.languages)
  const topicsTree = useTree(resources.topics)
  const { current } = useSidebar()

  const currentLanguage = languagesTree.find((lang) => lang.title === current)
  const currentTopic = topicsTree.find((topic) => topic.title === current)

  // Drill-down: inside a language/topic the card shows its tree, and
  // "other resources" steps back up to the list of all of them.
  const showList = expanded || !current

  return (
    <Sidebar variant="card" {...props}>
      <div className="flex w-full flex-col items-center gap-[17px]">
        {current && (
          <button
            type="button"
            aria-expanded={expanded}
            onClick={() => setExpanded((prevState) => !prevState)}
            className="flex w-full cursor-pointer items-center gap-2.5 px-2.5 text-left text-xl leading-[26px] tracking-[0.75px] text-sidebar-fg/50 underline decoration-from-font underline-offset-auto hover:text-sidebar-fg/70"
          >
            <ArrowLeft
              aria-hidden="true"
              className={cn("shrink-0", expanded && "rotate-180")}
            />
            other resources
          </button>
        )}
        {showList ? (
          <>
            <ResourceList items={languagesTree} setExpanded={setExpanded} />
            <ResourceList items={topicsTree} setExpanded={setExpanded} />
          </>
        ) : (
          <>
            {currentLanguage && (
              <Tree item={currentLanguage} firstLevel={true} />
            )}
            {currentTopic && <Tree item={currentTopic} firstLevel={true} />}
          </>
        )}
      </div>
    </Sidebar>
  )
}
