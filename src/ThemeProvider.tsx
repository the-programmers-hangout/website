import React, { createContext, FC, useMemo } from "react"
import { ThemeProvider as BaseThemeProvider } from "styled-components"

import { darkTheme, lightTheme } from "./design/themes"
import { useLocalStorage } from "./hooks/useLocalStorage"

export interface IThemeContext {
  theme: "dark" | "light"
  setTheme: () => void
  toggleTheme: () => void
}

interface IScopedDownChildren {
  children: JSX.Element
}

export const ThemeContext = createContext<IThemeContext | null>(null)

const ThemeProvider: FC<IScopedDownChildren> = ({ children }) => {
  const [theme, setTheme] = useLocalStorage("theme", "dark")

  const themeObject = useMemo(
    () => (theme === "dark" ? darkTheme : lightTheme),
    [theme]
  )

  const contextValue = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme: () => {
        setTheme(theme === "light" ? "dark" : "light")
      },
    }),
    [theme, setTheme]
  )

  return (
    <ThemeContext.Provider value={contextValue}>
      <BaseThemeProvider theme={themeObject}>{children}</BaseThemeProvider>
    </ThemeContext.Provider>
  )
}

export { ThemeProvider }
