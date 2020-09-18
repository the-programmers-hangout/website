import { WindowLocation } from "@reach/router"
import React, { FC, useMemo } from "react"

function appendSlashToPath(path: string): string {
  return path.endsWith("/") ? path : `${path}/`
}

function getSecondLevel(path: string): string | void {
  const [, , secondLevel] = path.split("/")

  return secondLevel
}

export interface ILocationContextInterface {
  location: WindowLocation | void
  isHome: boolean
  isMatchingPath: (path: string) => boolean
  getSecondLevel: (path: string) => string | void
}

interface ILocationProviderProps {
  location: WindowLocation | void
}

export const LocationContext = React.createContext<ILocationContextInterface | null>(
  null
)

export const LocationProvider: FC<ILocationProviderProps> = ({
  children,
  location,
}) => {
  const memoizedContextValue = useMemo(
    () => ({
      location,
      isHome: location ? location.pathname === "/" : false,
      isMatchingPath: (path: string) => {
        return location
          ? appendSlashToPath(location.pathname).startsWith(path)
          : false
      },
      getSecondLevel,
    }),
    [location]
  )

  return (
    <LocationContext.Provider value={memoizedContextValue}>
      {children}
    </LocationContext.Provider>
  )
}
