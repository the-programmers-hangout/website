import { graphql, useStaticQuery } from "gatsby"
import React, { memo } from "react"
import "react-perfect-scrollbar/dist/css/styles.css"
import * as SC from "./styles"
import useBuildTree from "./useBuildTree"

export interface IFile {
  title: string
  type: "file"
  path: string
}

export interface IFolder {
  title: string
  type: "folder"
  path: string
  children: IFileOrFolder[]
}

export type IFileOrFolder = IFile | IFolder

export interface IFileQuery {
  node: {
    relativePath: string
    childMarkdownRemark: {
      frontmatter: {
        author: string
        date: string
      }
    }
  }
}

export interface IAllResourcesQuery {
  allFile: {
    edges: IFileQuery[]
  }
}

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
          <SC.NodePart key={node}>{node.replace(".md", "")}</SC.NodePart>
        ))}
      </SC.PageLink>
    )
  }

  return <Language key={item.title} item={item} index={index!} />
}

const Language = memo(({ item }: { item: IFolder; index: number }) => {
  return (
    <SC.TreeWrapper>
      <SC.LanguageLabel>{item.title}</SC.LanguageLabel>
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
