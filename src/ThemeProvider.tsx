import React, { createContext, FC, useEffect, useMemo } from "react"

import { useIsBrowser } from "./hooks/useIsBrowser"
import { useLocalStorage } from "./hooks/useLocalStorage"
import { useMedia } from "./hooks/useMedia"

type ThemeType = "dark" | "light"

export interface IThemeContext {
  theme: ThemeType
  toggleTheme: () => void
}

interface IScopedDownChildren {
  children: JSX.Element
}

export const ThemeContext = createContext<IThemeContext | null>(null)

function useTheme() {
  const preferredTheme = useMedia<ThemeType>(
    ["(prefers-color-scheme: light)", "(prefers-color-scheme: dark)"],
    ["light", "dark"],
    "dark"
  )

  const [userSelectedTheme, setUserSelectedTheme] = useLocalStorage<
    ThemeType | "unset"
  >("user-selected-theme", "unset")

  const theme = useMemo(
    () => (userSelectedTheme !== "unset" ? userSelectedTheme : preferredTheme),
    [preferredTheme, userSelectedTheme]
  )

  return {
    theme,
    setTheme: setUserSelectedTheme,
  }
}

const ThemeProvider: FC<IScopedDownChildren> = ({ children }) => {
  const isBrowser = useIsBrowser()
  const { theme, setTheme } = useTheme()

  // Drive the data-theme attribute the Tailwind CSS variables key off.
  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  const contextValue = useMemo(
    () => ({
      theme,
      toggleTheme: () => setTheme(theme === "light" ? "dark" : "light"),
    }),
    [theme, setTheme]
  )

  return (
    <ThemeContext.Provider value={contextValue}>
      {isBrowser ? children : undefined}
    </ThemeContext.Provider>
  )
}

export { ThemeProvider }
