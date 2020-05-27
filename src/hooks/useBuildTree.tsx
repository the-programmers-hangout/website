import { IAllFilesQuery, IFileQuery } from "../types"
import { join, traversePaths } from "../utils"

export default function useBuildTree(
  resources: IAllFilesQuery["allFile"],
  basePath: string
) {
  const objects = resources.edges.map(({ node: file }: IFileQuery) =>
    traversePaths(file.relativePath.split("/"), basePath)
  )

  return join(objects)
}
