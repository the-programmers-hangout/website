import { WindowLocation } from "@reach/router"
import React, { FC, PropsWithChildren, useMemo } from "react"

export interface ILocationContextInterface {
  location: WindowLocation | void
  isHome: boolean
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
    }),
    [location]
  )

  return (
    <LocationContext.Provider value={memoizedContextValue}>
      {children}
    </LocationContext.Provider>
  )
}
