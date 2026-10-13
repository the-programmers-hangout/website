import React, { FC } from "react"
import useTheme from "../../hooks/useTheme"

export const ThemeToggler: FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-block cursor-pointer border-b-2 border-transparent text-left hover:border-sidebar-fg/40"
    >
      Switch to {theme === "dark" ? "light" : "dark"} mode
    </button>
  )
}
