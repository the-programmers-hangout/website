import React, { FC } from "react"
import useTheme from "../../hooks/useTheme"
import * as SC from "./styles"

export const ThemeToggler: FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <SC.ThemeTogglerWrapper onClick={toggleTheme}>
      <SC.Link>Switch to {theme === "dark" ? "light" : "dark"} mode</SC.Link>
    </SC.ThemeTogglerWrapper>
  )
}
