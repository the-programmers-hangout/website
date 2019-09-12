import { useContext } from "react"
import { IThemeContext, ThemeContext } from "../ThemeProvider"

export default function useTheme(): IThemeContext {
  const themeContext = useContext(ThemeContext)

  if (!themeContext) {
    throw Error("Need context")
  }

  return themeContext
}
