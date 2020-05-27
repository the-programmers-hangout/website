import sort from "ramda/es/sort"
import useBuildTree from "../../hooks/useBuildTree"
import { IAllResourcesQuery } from "../../types"

export default function useTree(resources: IAllResourcesQuery["allFile"]) {
  const resourcesTree = useBuildTree(resources, "/resources")
  const sortedResources = sort(
    (a, b) => a.title.localeCompare(b.title),
    resourcesTree
  )

  return sortedResources
}
