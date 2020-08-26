import cx from "classnames"
import { graphql, useStaticQuery } from "gatsby"
import sort from "ramda/es/sort"
import React, { FC, HTMLAttributes, memo, useMemo } from "react"
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

function plantTree(item: IFileOrFolder, single?: boolean) {
  if (item.type === "file") {
    // remove the first elements, treat as hardcoded
    const [, , , ...cleanedUpPath] = item.path.split("/")
    const path = getPath(item)

    return (
      <SC.PageLink key={item.title} to={path}>
        {cleanedUpPath.map((node) => humanize(node)).join(" / ")}
      </SC.PageLink>
    )
  }

  return <Language key={item.title} item={item} single={Boolean(single)} />
}

const Language = memo(
  ({ item, single }: { item: IFolder; single: boolean }) => {
    const children = useMemo(() => {
      if (single) {
        return item.children.filter((child) => {
          const [, , , title] = child.title.split("/")
          return title !== "intro"
        })
      }

      return item.children
    }, [item.children, single])

    return (
      <SC.TreeWrapper>
        {!single && <SC.LanguageLabel>{humanize(item.title)}</SC.LanguageLabel>}
        <SC.Children className={cx({ "is-single": single })}>
          {children.map((node) => plantTree(node))}
        </SC.Children>
      </SC.TreeWrapper>
    )
  }
)

Language.displayName = "Language"

function sortTree(tree: IFileOrFolder[]) {
  return sort((a, b) => a.title.localeCompare(b.title), tree)
}

interface IResourcesList extends HTMLAttributes<HTMLDivElement> {
  relativeDirectory?: string
}

export const ResourcesList: FC<IResourcesList> = (props) => {
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
  const sortedTree = sortTree(tree)
  const isSingle = Boolean(props.relativeDirectory)

  return (
    <SC.ResourcesListWrapper {...props}>
      {sortedTree.map((node) => plantTree(node, isSingle))}
    </SC.ResourcesListWrapper>
  )
}
