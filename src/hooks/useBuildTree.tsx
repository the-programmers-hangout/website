import { IAllFilesQuery, IFileQuery } from "../types"
import { join, traversePaths } from "../utils"

export default function useBuildTree(
  resources: IAllFilesQuery,
  basePath: string
) {
  const objects = resources.allFile.edges.map(({ node: file }: IFileQuery) =>
    traversePaths(file.relativePath.split("/"), basePath)
  )

  return join(objects)
}
