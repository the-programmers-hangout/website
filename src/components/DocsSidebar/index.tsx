import * as R from "ramda"
import React from "react"
import Tree from "react-treeview"
import { useStaticQuery, graphql } from "gatsby"

export interface DocsSidebarProps {
  readonly width: string | number
}

interface IFile {
  title: string
  type: "file"
}

interface IFolder {
  title: string
  type: "folder"
  children: IFileOrFolder[]
}

type IFileOrFolder = IFile | IFolder

const traverse = ([head, ...tail]: string[]): IFileOrFolder => {
  const isFile = !tail.length
  if (isFile) {
    // probably not more than one dot
    const [name] = head.split(".")
    return {
      title: name,
      type: "file",
    }
  }
  return {
    title: head,
    type: "folder",
    children: [traverse(tail)],
  }
}

const generateFolder = ({
  title,
  targets,
}: {
  title: IFolder["title"]
  targets: IFolder[]
}): IFolder => {
  const children = join(R.chain(target => target.children, targets))

  return {
    title,
    type: "folder",
    children,
  }
}

const generateFile = ({ title }: { title: IFile["title"] }): IFile => {
  return {
    title,
    type: "file",
  }
}

const join = ([head, ...tail]: IFileOrFolder[]): IFileOrFolder[] => {
  if (!head) return []

  const [similarFs, remaining] = R.partition(
    obj => obj.title === head.title && obj.type === head.type,
    tail
  )
  const targets = [head, ...similarFs]
  const { title } = head

  const current =
    head.type === "folder"
      ? generateFolder({ title, targets: targets as IFolder[] })
      : generateFile({ title })

  return [current, ...join(remaining)]
}

interface IFileQuery {
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

interface IAllDocsQuery {
  allFile: {
    edges: IFileQuery[]
  }
}

const ALL_DOCS = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "docs" } }) {
      edges {
        node {
          relativePath
          childMarkdownRemark {
            frontmatter {
              author
              date
            }
          }
        }
      }
    }
  }
`

const plantTree = (item: IFileOrFolder) => {
  if (item.type === "file") {
    return <div>{item.title}</div>
  }

  return (
    <Tree nodeLabel={<div>{item.title}</div>}>
      {item.children.map(plantTree)}
    </Tree>
  )
}

const DocsSidebar = ({ width }: DocsSidebarProps) => {
  const docs = useStaticQuery<IAllDocsQuery>(ALL_DOCS)

  const objects = docs.allFile.edges.map(({ node: file }: IFileQuery) =>
    traverse(file.relativePath.split("/"))
  )
  const results = join(objects)

  console.log(results)

  return <div style={{ width }}>{results.map(node => plantTree(node))}</div>
}

export default DocsSidebar
