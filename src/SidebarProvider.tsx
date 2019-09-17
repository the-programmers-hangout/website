import React, { FC, useMemo, useState } from "react"

export interface ISidebarContextInterface {
  current: number
  setCurrent: (index: number) => void
}

export const SidebarContext = React.createContext<ISidebarContextInterface | null>(
  null
)

export const SidebarProvider: FC = ({ children }) => {
  const [current, setCurrent] = useState(0)

  const memoizedContextValue = useMemo(
    () => ({
      current,
      setCurrent,
    }),
    [current, setCurrent]
  )

  return (
    <SidebarContext.Provider value={memoizedContextValue}>
      {children}
    </SidebarContext.Provider>
  )
}
