import React, { FC } from "react"

/*
  The theme lives on <html data-theme>, set before paint by the inline script
  in layouts/Base.astro. React never reads it while rendering: the server
  can't know it, so the label switches in CSS and the click handler reads the
  attribute at click time.
*/
function toggleTheme() {
  const next =
    document.documentElement.dataset.theme === "light" ? "dark" : "light"
  try {
    localStorage.setItem("user-selected-theme", JSON.stringify(next))
  } catch (e) {
    // Storage blocked: the switch still applies to this page.
  }
  document.documentElement.dataset.theme = next
}

export const ThemeToggler: FC = () => {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-block cursor-pointer border-b-2 border-transparent text-left hover:border-sidebar-fg/40"
    >
      Switch to <span className="dark:hidden">dark</span>
      <span className="hidden dark:inline">light</span> mode
    </button>
  )
}
