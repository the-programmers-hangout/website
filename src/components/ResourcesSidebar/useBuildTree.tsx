import { IAllResourcesQuery, IFileQuery } from "../../types"
import { join, traversePaths } from "../../utils"

export default function useBuildTree(resources: IAllResourcesQuery) {
  const objects = resources.allFile.edges.map(({ node: file }: IFileQuery) =>
    traversePaths(file.relativePath.split("/"))
  )

  return join(objects)
}
