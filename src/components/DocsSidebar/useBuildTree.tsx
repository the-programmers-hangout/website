import * as R from "ramda"
import {
  IFileOrFolder,
  IFile,
  IFolder,
  IAllDocsQuery,
  IFileQuery,
} from "./index"

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

export default function useBuildTree(docs: IAllDocsQuery) {
  const objects = docs.allFile.edges.map(({ node: file }: IFileQuery) =>
    traverse(file.relativePath.split("/"))
  )

  return join(objects)
}
