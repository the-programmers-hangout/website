import { graphql, useStaticQuery } from "gatsby"
import { sort } from "ramda"
import React, { FC, HTMLAttributes, memo } from "react"
import "react-perfect-scrollbar/dist/css/styles.css"
import { IAllResourcesQuery, IFileOrFolder, IFolder } from "../../types"
import { getPath, humanize } from "../../utils"
import * as SC from "./styles"
import useBuildTree from "./useBuildTree"

const ALL_RESOURCES = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "resources" } }) {
      edges {
        node {
          relativePath
          relativeDirectory
          childMarkdownRemark {
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

function plantTree(item: IFileOrFolder, index?: number) {
  if (item.type === "file") {
    // remove the first elements, treat as hardcoded
    const [, , , ...cleanedUpPath] = item.path.split("/")
    const path = getPath(item)

    return (
      <SC.PageLink key={item.title} to={path}>
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

interface IResourcesList extends HTMLAttributes<HTMLDivElement> {
  relativeDirectory?: string
}

export const ResourcesList: FC<IResourcesList> = props => {
  const resources = useStaticQuery<IAllResourcesQuery>(ALL_RESOURCES)

  const filteredResources = {
    ...resources,
    allFile: {
      ...resources.allFile,
      edges: resources.allFile.edges.filter(({ node }) => {
        if (!props.relativeDirectory) {
          return true
        }

        const [language] = node.relativeDirectory.split("/")
        return props.relativeDirectory === language
      }),
    },
  }

  const tree = useBuildTree(filteredResources)
  const sortedTree = sort((a, b) => a.title.localeCompare(b.title), tree)

  return (
    <SC.ResourcesListWrapper {...props}>
      {sortedTree.map((node, index) => plantTree(node, index))}
    </SC.ResourcesListWrapper>
  )
}
