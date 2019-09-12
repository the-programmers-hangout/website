import React, { createContext } from "react"
import { ThemeProvider as BaseThemeProvider } from "styled-components"

import { darkTheme, lightTheme } from "./design/themes"
import { useLocalStorage } from "./hooks/useLocalStorage"

interface IThemeProviderProps {
  // TODO: type this properly, BaseThemeProvider doesn't like React.ReactNode
  children: any
}

export interface IThemeContext {
  theme: "dark" | "light"
  setTheme: () => void
  toggleTheme: () => void
}

export const ThemeContext = createContext<IThemeContext | null>(null)

const ThemeProvider = ({ children }: IThemeProviderProps) => {
  const [theme, setTheme] = useLocalStorage("theme", "light")
  const themeObject = theme === "dark" ? darkTheme : lightTheme

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      <BaseThemeProvider theme={themeObject}>{children}</BaseThemeProvider>
    </ThemeContext.Provider>
  )
}

export { ThemeProvider }
