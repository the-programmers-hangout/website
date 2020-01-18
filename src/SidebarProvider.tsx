import React, { FC, useMemo, useState } from "react"

export interface ISidebarContextInterface {
  current: number
  setCurrent: (index: number) => void
  openOnMobile: boolean
  setOpenOnMobile: (active: boolean) => void
}

export const SidebarContext = React.createContext<ISidebarContextInterface | null>(
  null
)

export const SidebarProvider: FC = ({ children }) => {
  const [current, setCurrent] = useState(0)
  const [openOnMobile, setOpenOnMobile] = useState(false)

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
