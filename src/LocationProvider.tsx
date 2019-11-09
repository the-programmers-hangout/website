import { WindowLocation } from "@reach/router"
import React, { FC, PropsWithChildren, useMemo } from "react"

function appendSlashToPath(path: string): string {
  return path.endsWith("/") ? path : `${path}/`
}

export interface ILocationContextInterface {
  location: WindowLocation | void
  isHome: boolean
  isMatchingPath: (path: string) => boolean
}

interface ILocationProviderProps {
  location: WindowLocation | void
}

export const LocationContext = React.createContext<ILocationContextInterface | null>(
  null
)

export const LocationProvider: FC<
  PropsWithChildren<ILocationProviderProps>
> = ({ children, location }) => {
  const memoizedContextValue = useMemo(
    () => ({
      location,
      isHome: location ? location.pathname === "/" : false,
      isMatchingPath: (path: string) => {
        return location
          ? appendSlashToPath(location.pathname).startsWith(path)
          : false
      },
    }),
    [location]
  )

  return (
    <LocationContext.Provider value={memoizedContextValue}>
      {children}
    </LocationContext.Provider>
  )
}
