import React, { createContext, FC, useMemo } from "react"
import { ThemeProvider as BaseThemeProvider } from "styled-components"

import { darkTheme, lightTheme } from "./design/themes"
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

  const themeObject = useMemo(
    () => (theme === "dark" ? darkTheme : lightTheme),
    [theme]
  )

  return {
    theme,
    themeObject,
    setTheme: setUserSelectedTheme,
  }
}

const ThemeProvider: FC<IScopedDownChildren> = ({ children }) => {
  const isBrowser = useIsBrowser()
  const { theme, themeObject, setTheme } = useTheme()

  const contextValue = useMemo(
    () => ({
      theme,
      toggleTheme: () => setTheme(theme === "light" ? "dark" : "light"),
    }),
    [theme, setTheme]
  )

  return (
    <ThemeContext.Provider value={contextValue}>
      <BaseThemeProvider theme={themeObject}>
        {isBrowser ? children : undefined}
      </BaseThemeProvider>
    </ThemeContext.Provider>
  )
}

export { ThemeProvider }
