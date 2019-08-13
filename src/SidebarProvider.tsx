import React, { useState } from "react"

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
}: ISidebarProviderProps): JSX.Element {
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
