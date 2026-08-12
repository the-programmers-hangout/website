import React, { FC } from "react"
import useTheme from "../../hooks/useTheme"

export const ThemeToggler: FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div onClick={toggleTheme}>
      <span className="inline-block cursor-pointer border-b-2 border-transparent hover:border-sidebar-fg/40">
        Switch to {theme === "dark" ? "light" : "dark"} mode
      </span>
    </div>
  )
}
