import styled, { css } from "styled-components"
import {
  BASE_FONT_SIZE,
  BASE_LINE_HEIGHT,
  MODULAR_SCALE,
  fontFamily,
} from "../../design/typography"

function modularFontSize(power: number) {
  return BASE_FONT_SIZE * Math.pow(MODULAR_SCALE, power)
}

function modularScale(power: number) {
  const fontSize = modularFontSize(power)

  // attempt to fit line-height a little larger than font-size
  const paddedLineHeight = fontSize * 1.1
  const lineHeight =
    paddedLineHeight - (paddedLineHeight % BASE_LINE_HEIGHT) + BASE_LINE_HEIGHT

  return css`
    font-size: ${fontSize}px;
    line-height: ${lineHeight}px;
  `
}

export const MarkdownWrapper = styled.div`
  font-size: ${BASE_FONT_SIZE}px;
  line-height: ${BASE_LINE_HEIGHT}px;

  p {
    margin: ${BASE_LINE_HEIGHT}px 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${fontFamily.header};
    letter-spacing: -1.75px;
    margin-top: ${BASE_LINE_HEIGHT * 2}px;
    margin-bottom: ${BASE_LINE_HEIGHT}px;
  }

  h1 {
    ${modularScale(6)};
  }

  h2 {
    ${modularScale(5)};
  }

  h3 {
    ${modularScale(4)};
  }

  h4 {
    ${modularScale(3)};
  }

  h5 {
    ${modularScale(2)};
  }

  h6 {
    ${modularScale(1)};
  }
`
