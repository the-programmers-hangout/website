import React from "react"

const ThemeScript = () => {
  const themeScript = `
(function() {
  function getInitialTheme() {
    const userSetTheme = window.localStorage.getItem("theme")
    const prefersLightTheme = window.matchMedia(
      "(prefers-color-scheme: light)"
    )

    if (userSetTheme && userSetTheme !== '"unset"') return userSetTheme
    else if (prefersLightTheme.matches === true) return "light"
    else return "dark"
  }

  if (typeof document === "undefined") return;

  document.documentElement.style.setProperty(
    "--initial-theme",
    getInitialTheme()
  )
})()
  `

  return <script dangerouslySetInnerHTML={{ __html: themeScript }} />
}

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<ThemeScript></ThemeScript>)
}
