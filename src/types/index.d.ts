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
  }
}

export interface IFileResourceQuery {
  node: {
    relativePath: string
    relativeDirectory: string
    childMdx: {
      frontmatter: {
        author: string
        date: string
      }
    }
  }
}

export interface IFileArchiveQuery {
  node: {
    relativePath: string
  }
}

export interface IAllFilesQuery {
  allFile: {
    edges: IFileQuery[]
  }
}

export interface IAllResourcesQuery extends IAllFilesQuery {
  allFile: {
    edges: IFileResourceQuery[]
  }
}

export interface IAllArchivesQuery extends IAllFilesQuery {
  allFile: {
    edges: IFileArchiveQuery[]
  }
}

export interface IExternalResource {
  text: string
  href: string
}

export interface ITocItem {
  depth: number
  link: string
  title: string
}
