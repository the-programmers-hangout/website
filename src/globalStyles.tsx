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
    font-size: ${BASE_FONT_SIZE}px;
    line-height: ${BASE_LINE_HEIGHT}px;
  }
`
