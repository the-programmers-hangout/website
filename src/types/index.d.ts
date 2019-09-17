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
