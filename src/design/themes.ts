interface ISet {
  background: string
  foreground: string
}

export interface ITheme {
  name: "dark" | "light"
  sidebar: ISet & { active: string }
  main: ISet & { link: string }
  discord: {
    base: string
    darker: string
  }
  code: {
    background: string
  }
}

const baseColors = {
  discord: {
    base: "#7289DA",
    darker: "#5265AD",
  },
  code: {
    background: "#0c1115",
  },
}

export const darkTheme: ITheme = {
  ...baseColors,
  name: "dark",
  sidebar: {
    background: "#19222A",
    foreground: "#FFFFFF",
    active: "#00FCFF",
  },
  main: {
    background: "#202C36",
    foreground: "#FFFFFF",
    link: "#04B0A6",
  },
}

export const lightTheme: ITheme = {
  ...baseColors,
  name: "light",
  sidebar: {
    background: "#F9F9F9",
    foreground: "#000000",
    active: "#499DEF",
  },
  main: {
    background: "#FFFFFF",
    foreground: "#000000",
    link: "#04B0A6",
  },
}
