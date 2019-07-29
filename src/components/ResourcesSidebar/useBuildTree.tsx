import partition from "ramda/es/partition"
import chain from "ramda/es/chain"

import {
  IFileOrFolder,
  IFile,
  IFolder,
  IAllResourcesQuery,
  IFileQuery,
} from "./index"

function traverse(
  [head, ...tail]: string[],
  basePath = "/resources"
): IFileOrFolder {
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

function generateFolder({
  title,
  path,
  targets,
}: {
  title: IFolder["title"]
  path: IFile["path"]
  targets: IFolder[]
}): IFolder {
  const children = join(chain(target => target.children, targets))

  return {
    title,
    type: "folder",
    path,
    children,
  }
}

function generateFile({
  title,
  path,
}: {
  title: IFile["title"]
  path: IFile["path"]
}): IFile {
  return {
    title,
    type: "file",
    path,
  }
}

function join([head, ...tail]: IFileOrFolder[]): IFileOrFolder[] {
  if (!head) return []

  const [similarFs, remaining] = partition(
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

export default function useBuildTree(resources: IAllResourcesQuery) {
  const objects = resources.allFile.edges.map(({ node: file }: IFileQuery) =>
    traverse(file.relativePath.split("/"))
  )

  return join(objects)
}
