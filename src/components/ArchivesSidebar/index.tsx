import { graphql, useStaticQuery } from "gatsby"
import sort from "ramda/es/sort"
import React, { FC, HTMLAttributes } from "react"
import useBuildTree from "../../hooks/useBuildTree"
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll"
import useSidebar from "../../hooks/useSidebar"
import { IFileOrFolder } from "../../types"
import { humanize } from "../../utils"
import { Sidebar } from "../Sidebar"
import * as SC from "./styles"

const ALL_ARCHIVES = graphql`
  query {
    archives: allFile(
      filter: { sourceInstanceName: { eq: "what-is-archive" } }
    ) {
      edges {
        node {
          relativePath
        }
      }
    }
  }
`

function Tree({ item }: { item: IFileOrFolder }) {
  const { setOpenOnMobile } = useSidebar()
  const { unlock } = useLockBodyScroll()

  return (
    <SC.PageLink
      key={item.title}
      to={item.path}
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

export const ArchivesSidebar: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const { archives } = useStaticQuery(ALL_ARCHIVES)
  const tree = useBuildTree(archives, "/archives")
  const sortedTree = sort((a, b) => a.title.localeCompare(b.title), tree)

  return (
    <Sidebar {...props}>
      {sortedTree.map((node) => (
        <Tree item={node} key={node.path} />
      ))}
    </Sidebar>
  )
}
