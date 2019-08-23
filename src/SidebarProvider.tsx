import React, { useMemo, useState } from "react"

interface ISidebarProviderProps {
  children: React.ReactNode
}

export interface ISidebarContextInterface {
  current: number
  setCurrent: (index: number) => void
}

export const SidebarContext = React.createContext<ISidebarContextInterface | null>(
  null
)

export function SidebarProvider({
  children,
}: ISidebarProviderProps) {
  const [current, setCurrent] = useState(0)

  const memoizedContextValue = useMemo(() => ({
    current,
    setCurrent,
  }), [current, setCurrent])

  return (
    <SidebarContext.Provider value={memoizedContextValue}>
      {children}
    </SidebarContext.Provider>
  )
}
