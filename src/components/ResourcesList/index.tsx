import { graphql, useStaticQuery } from "gatsby"
import React, { memo } from "react"
import "react-perfect-scrollbar/dist/css/styles.css"
import { IAllResourcesQuery, IFileOrFolder, IFolder } from "../../types"
import { humanize } from "../../utils"
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

function plantTree(item: IFileOrFolder, index?: number) {
  if (item.type === "file") {
    // remove the first elements, treat as hardcoded
    const [, , , ...cleanedUpPath] = item.path.split("/")
    return (
      <SC.PageLink key={item.title} to={item.path}>
        {cleanedUpPath.map(node => (
          // TODO: use helper to format path
          <SC.NodePart key={node}>{humanize(node)}</SC.NodePart>
        ))}
      </SC.PageLink>
    )
  }

  return <Language key={item.title} item={item} index={index!} />
}

const Language = memo(({ item }: { item: IFolder; index: number }) => {
  return (
    <SC.TreeWrapper>
      <SC.LanguageLabel>{humanize(item.title)}</SC.LanguageLabel>
      <SC.Children>{item.children.map(node => plantTree(node))}</SC.Children>
    </SC.TreeWrapper>
  )
})

export function ResourcesList(props: React.HTMLAttributes<HTMLDivElement>) {
  const resources = useStaticQuery<IAllResourcesQuery>(ALL_RESOURCES)
  const tree = useBuildTree(resources)

  return (
    <SC.ResourcesListWrapper {...props}>
      {tree.map((node, index) => plantTree(node, index))}
    </SC.ResourcesListWrapper>
  )
}
