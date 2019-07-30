import React, { useState } from "react"

interface SidebarProviderProps {
  children: React.ReactNode
}

export interface SidebarContextInterface {
  current: number
  setCurrent: (index: number) => void
}

export const SidebarContext = React.createContext<SidebarContextInterface | null>(
  null
)

export function SidebarProvider({
  children,
}: SidebarProviderProps): JSX.Element {
  const [current, setCurrent] = useState(0)

  function selectFirstLevel(index: number) {
    setCurrent(index)
  }

  return (
    <SidebarContext.Provider
      value={{
        current,
        setCurrent: selectFirstLevel,
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}
