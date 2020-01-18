import { graphql, useStaticQuery } from "gatsby"
import { descend, sort, sortWith } from "ramda"
import React, { FC, HTMLAttributes, memo, useState } from "react"
import useBuildTree from "../../hooks/useBuildTree"
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll"
import useSidebar from "../../hooks/useSidebar"
import TriangleDown from "../../icons/triangle-down.svg"
import { IAllResourcesQuery, IFileOrFolder, IFolder } from "../../types"
import { getPath, humanize } from "../../utils"
import { Sidebar } from "../Sidebar"
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

const childrenSort = sortWith<IFileOrFolder>([
  descend(f => {
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
    setCollapse(prevState => !prevState)
  }

  const sortedChildren = childrenSort(item.children)

  return (
    <SC.TreeWrapper collapsed={collapsed}>
      <SC.Label onClick={toggleCollapse}>
        <TriangleDown /> {humanize(item.title)}
      </SC.Label>
      <SC.Children>
        {sortedChildren.map(node => (
          <Tree item={node} />
        ))}
      </SC.Children>
    </SC.TreeWrapper>
  )
}

const FirstLevelFolder = memo(({ item }: { item: IFolder }) => {
  const { setCurrent } = useSidebar()

  useMatchingPath(item.path, () => {
    setCurrent(item.title)
  })

  const sortedChildren = childrenSort(item.children)

  return (
    <SC.TreeWrapper className="firstLevel">
      <SC.FirstLabel>{humanize(item.title)}</SC.FirstLabel>
      <SC.Children>
        {sortedChildren.map(node => (
          <Tree item={node} />
        ))}
      </SC.Children>
    </SC.TreeWrapper>
  )
})

const AllLanguages: FC<{
  items: IFileOrFolder[]
  expanded: boolean
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ items, expanded, setExpanded }) => {
  const { current, setCurrent } = useSidebar()

  return (
    <SC.ExpandLanguages>
      <SC.ExpandLanguagesHeader
        onClick={() => setExpanded(prevState => !prevState)}
      >
        Expand languages {expanded ? <SC.CollapseIcon /> : <SC.ExpandIcon />}
      </SC.ExpandLanguagesHeader>
      {expanded && (
        <SC.ExpandLanguagesList>
          {items.map(item => (
            <SC.Language
              className={current === item.title ? "active" : ""}
              onClick={() => {
                setCurrent(item.title)
                setExpanded(false)
              }}
            >
              {item.title}
            </SC.Language>
          ))}
        </SC.ExpandLanguagesList>
      )}
    </SC.ExpandLanguages>
  )
}

export const ResourcesSidebar: FC<HTMLAttributes<HTMLDivElement>> = props => {
  const [expandedLanguages, setExpandedLanguages] = useState(false)
  const resources = useStaticQuery<IAllResourcesQuery>(ALL_RESOURCES)
  const languages = useBuildTree(resources, "/resources")
  const { current } = useSidebar()
  const sortedLanguages = sort(
    (a, b) => a.title.localeCompare(b.title),
    languages
  )

  const currentLanguage =
    sortedLanguages.find(lang => lang.title === current) || sortedLanguages[0]

  return (
    <Sidebar {...props}>
      <AllLanguages
        items={sortedLanguages}
        expanded={expandedLanguages}
        setExpanded={setExpandedLanguages}
      />
      <Tree item={currentLanguage} firstLevel={true} />
    </Sidebar>
  )
}
