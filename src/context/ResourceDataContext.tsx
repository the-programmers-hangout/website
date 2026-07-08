import React, { createContext, FC, useContext } from "react"
import type { ResourceDataShape } from "../lib/content"

// Provides the resource / spotlight file listings that the sidebars used to
// pull with gatsby's useStaticQuery. Populated at build time by the island.

const empty: ResourceDataShape = {
  languages: { edges: [] },
  topics: { edges: [] },
  spotlights: { edges: [] },
  resourcesAll: { edges: [] },
}

export const ResourceDataContext = createContext<ResourceDataShape>(empty)

export const ResourceDataProvider: FC<{ value: ResourceDataShape }> = ({
  value,
  children,
}) => {
  return (
    <ResourceDataContext.Provider value={value}>
      {children}
    </ResourceDataContext.Provider>
  )
}

export function useResourceData(): ResourceDataShape {
  return useContext(ResourceDataContext)
}
