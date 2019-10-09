import { darken, lighten } from "polished"
import styled, { css } from "styled-components"
import {
  BASE_FONT_SIZE,
  BASE_LINE_HEIGHT,
  fontFamily,
  modularScale,
} from "../../design/typography"

function modularScaleCSS(power: number) {
  const { fontSize, lineHeight } = modularScale(power)

  return css`
    font-size: ${fontSize}px;
    line-height: ${lineHeight}px;
  `
}

export const MarkdownWrapper = styled.div`
  font-size: ${BASE_FONT_SIZE}px;
  line-height: ${BASE_LINE_HEIGHT}px;

  & > :first-child {
    margin-top: 0;
  }

  & > :first-child {
    margin-bottom: 0;
  }

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
    ${modularScaleCSS(6)};
  }

  h2 {
    ${modularScaleCSS(5)};
  }

  h3 {
    ${modularScaleCSS(4)};
  }

  h4 {
    ${modularScaleCSS(3)};
  }

  h5 {
    ${modularScaleCSS(2)};
  }

  h6 {
    ${modularScaleCSS(1)};
  }

  code {
    background: #192129;
    padding: 4px 8px;
    display: inline;
    border-radius: 3px;
    letter-spacing: 0.25px;
    color: #ccc;
  }

  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    overflow-x: auto;
    background: #192129;
  }

  pre[class*="language-"] {
    .token.boolean,
    .token.number,
    .token.function {
      color: #d48d5d;
    }

    .token.operator,
    .token.entity,
    .token.url {
      color: #00add9;
    }

    .token.selector,
    .token.important,
    .token.atrule,
    .token.keyword,
    .token.builtin {
      color: #d1529d;
    }
  }

  a {
    color: ${props => props.theme.main.link};
    cursor: pointer;

    &:hover {
      color: ${props =>
        props.theme.name === "dark"
          ? lighten(0.15, props.theme.main.link)
          : darken(0.15, props.theme.main.link)};
    }
  }
`
