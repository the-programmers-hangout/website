import React, { FC, useEffect, useMemo, useState } from "react"
import useLocation from "./hooks/useLocation"

export interface ISidebarContextInterface {
  current: string | null
  setCurrent: (key: string) => void
  openOnMobile: boolean
  setOpenOnMobile: (active: boolean) => void
}

export const SidebarContext = React.createContext<ISidebarContextInterface | null>(
  null
)

export const SidebarProvider: FC = ({ children }) => {
  const { location, getSecondLevel } = useLocation()
  const [current, setCurrent] = useState<string | null>(null)
  const [openOnMobile, setOpenOnMobile] = useState(false)

  useEffect(() => {
    if (location && location.pathname) {
      const secondLevel = getSecondLevel(location.pathname)
      setCurrent(secondLevel || null)
    } else {
      setCurrent(null)
    }
  }, [location, getSecondLevel])

  const memoizedContextValue = useMemo(
    () => ({
      current,
      setCurrent,
      openOnMobile,
      setOpenOnMobile,
    }),
    [current, setCurrent, openOnMobile, setOpenOnMobile]
  )

  return (
    <SidebarContext.Provider value={memoizedContextValue}>
      {children}
    </SidebarContext.Provider>
  )
}
