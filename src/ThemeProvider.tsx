import React, { createContext, FC, useEffect, useMemo } from "react"
import {
  ThemeProvider as BaseThemeProvider,
  StyleSheetManager,
} from "styled-components"

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

  // Bridge to the Tailwind side: drive the data-theme attribute the CSS variables
  // key off. (Once every component is on Tailwind, styled-components + this
  // provider go away and only the attribute remains.)
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
      {/*
        disableCSSOMInjection keeps styled-components' rules in the <style> tag's
        text content (not the CSSOM), so they survive being moved into the next
        document during Astro's client-side navigation (see ClientRouter hook in
        Base.astro). Without this the next page renders unstyled.
      */}
      <StyleSheetManager disableCSSOMInjection>
        <BaseThemeProvider theme={themeObject}>
          {isBrowser ? children : undefined}
        </BaseThemeProvider>
      </StyleSheetManager>
    </ThemeContext.Provider>
  )
}

export { ThemeProvider }
