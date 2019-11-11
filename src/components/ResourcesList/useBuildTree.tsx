import { IAllResourcesQuery, IFileQuery } from "../../types"
import { join, traversePathsToFiles } from "../../utils"

export default function useBuildTree(resources: IAllResourcesQuery) {
  const objects = resources.allFile.edges.map(({ node: file }: IFileQuery) =>
    traversePathsToFiles(file.relativePath.split("/"), "/resources")
  )

  return join(objects)
}
