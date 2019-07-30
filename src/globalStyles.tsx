import { createGlobalStyle } from "styled-components"
import {
  BASE_FONT_SIZE,
  BASE_LINE_HEIGHT,
  fontFamily,
} from "./design/typography"

export const GlobalStyles = createGlobalStyle`
  html {
    font-family: ${fontFamily.body};
  }

  body {
    margin: 0;
    font-size: ${BASE_FONT_SIZE}px;
    line-height: ${BASE_LINE_HEIGHT}px;
  }

  /* TODO: probably extract this */
  .gatsby-highlight pre[class*="language-"].line-numbers {
    padding-left: 2.8em;
  }

  .gatsby-highlight {
    background-color: #fdf6e3;
    border-radius: 0.3em;
    margin: 0.5em 0;
    padding: 1em;
    overflow: auto;
  }

  .gatsby-highlight pre[class*="language-"].line-numbers {
    padding: 0;
    padding-left: 2.8em;
    overflow: initial;
  }
`
