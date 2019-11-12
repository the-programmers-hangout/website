import { graphql, useStaticQuery } from "gatsby"
import React, { FC, HTMLAttributes } from "react"
import { IAllArchivesQuery, IFileOrFolder } from "../../types"
import { humanize } from "../../utils"
import { Sidebar } from "../Sidebar"
import useBuildTree from "./../../hooks/useBuildTree"
import * as SC from "./styles"

const ALL_ARCHIVES = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "what-is-archive" } }) {
      edges {
        node {
          relativePath
        }
      }
    }
  }
`

function plantTree(item: IFileOrFolder) {
  return (
    <SC.PageLink key={item.title} to={item.path} activeClassName="active">
      {humanize(item.title)}
    </SC.PageLink>
  )
}

export const ArchivesSidebar: FC<HTMLAttributes<HTMLDivElement>> = props => {
  const archives = useStaticQuery<IAllArchivesQuery>(ALL_ARCHIVES)
  const tree = useBuildTree(archives, "/archives")
  const sortedTree = tree.sort((a, b) => a.title.localeCompare(b.title))

  return <Sidebar {...props}>{sortedTree.map(plantTree)}</Sidebar>
}
