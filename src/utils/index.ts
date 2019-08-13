import { IFileOrFolder } from "../components/ResourcesSidebar/index"

export function traversePaths(
  [head, ...tail]: string[],
  basePath: string = "/resources"
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
    children: [traversePaths(tail, path)],
  }
}
