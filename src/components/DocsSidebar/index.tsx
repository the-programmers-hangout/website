import * as R from "ramda"
import React, { useState } from "react"
import Tree from "react-treeview"
import { useStaticQuery, graphql } from "gatsby"
import * as SC from "./styles"

interface IFile {
  title: string
  type: "file"
  path: string
}

interface IFolder {
  title: string
  type: "folder"
  path: string
  children: IFileOrFolder[]
}

type IFileOrFolder = IFile | IFolder

const traverse = (
  [head, ...tail]: string[],
  basePath = "/docs"
): IFileOrFolder => {
  const path = basePath + "/" + head
  const isFile = !tail.length
  if (isFile) {
    // probably not more than one dot
    const [name] = head.split(".")
    return {
      title: name,
      type: "file",
      path,
    }
  }
  return {
    title: head,
    type: "folder",
    path,
    children: [traverse(tail, path)],
  }
}

const generateFolder = ({
  title,
  path,
  targets,
}: {
  title: IFolder["title"]
  path: IFile["path"]
  targets: IFolder[]
}): IFolder => {
  const children = join(R.chain(target => target.children, targets))

  return {
    title,
    type: "folder",
    path,
    children,
  }
}

const generateFile = ({
  title,
  path,
}: {
  title: IFile["title"]
  path: IFile["path"]
}): IFile => {
  return {
    title,
    path,
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
  const { title, path } = head

  const current =
    head.type === "folder"
      ? generateFolder({ title, path, targets: targets as IFolder[] })
      : generateFile({ title, path })

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
    return (
      <SC.PageLink to={item.path} activeClassName="active">
        {item.title}
      </SC.PageLink>
    )
  }

  return <Folder item={item} />
}

function Folder({ item }: { item: IFolder }) {
  const [collapsed, setCollapse] = useState(false)

  function toggleCollapse() {
    setCollapse(prevState => !prevState)
  }

  return (
    <Tree
      collapsed={collapsed}
      nodeLabel={<div onClick={toggleCollapse}>{item.title}</div>}
    >
      {item.children.map(plantTree)}
    </Tree>
  )
}

const DocsSidebar = () => {
  const docs = useStaticQuery<IAllDocsQuery>(ALL_DOCS)

  const objects = docs.allFile.edges.map(({ node: file }: IFileQuery) =>
    traverse(file.relativePath.split("/"))
  )
  const results = join(objects)

  console.log(results)

  return (
    <SC.DocsSidebarWrapper>
      {results.map(node => plantTree(node))}
    </SC.DocsSidebarWrapper>
  )
}

export default DocsSidebar
