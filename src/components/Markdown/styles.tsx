import styled, { css } from "styled-components"
import {
  BASE_FONT_SIZE,
  BASE_LINE_HEIGHT,
  fontFamily,
  modularScale,
} from "../../design/typography"

function modularScaleCSS(power: number) {
  const { fontSize } = modularScale(power)

  return css`
    font-size: ${fontSize}px;
    line-height: 1.4;
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
    ${modularScaleCSS(4)};
  }

  h2 {
    ${modularScaleCSS(3)};

    @media screen and (min-width: 1440px) {
      margin-left: -27px;
    }
  }

  h3 {
    ${modularScaleCSS(2)};
  }

  h4 {
    ${modularScaleCSS(1)};
  }

  h5,
  h6 {
    font-size: ${BASE_FONT_SIZE}px;
    line-height: ${BASE_LINE_HEIGHT}px;
  }

  h2 + h3 {
    margin-top: ${BASE_LINE_HEIGHT}px;
  }

  h3 + h4 {
    margin-top: ${BASE_LINE_HEIGHT}px;
  }

  h4 + h5 {
    margin-top: ${BASE_LINE_HEIGHT}px;
  }

  h5 + h6 {
    margin-top: ${BASE_LINE_HEIGHT}px;
  }

  h2 ~ h2::before {
    display: block;
    margin-bottom: ${BASE_LINE_HEIGHT * 2}px;
    content: "";
    height: 1px;
    margin-right: -27px;
    background: ${(props) =>
      props.theme.name === "dark" ? "#34414e" : "#a3beda"};
  }

  h1 .anchor svg,
  h2 .anchor svg,
  h3 .anchor svg,
  h4 .anchor svg,
  h5 .anchor svg,
  h6 .anchor svg {
    fill: ${(props) => props.theme.main.foreground};
  }

  code {
    background: ${(props) => props.theme.code.background};
    padding: 2px 4px;
    display: inline;
    border-radius: 3px;
    letter-spacing: 0.25px;
    color: #ebedee;
    font-family: "IBM Plex Mono", monospace;
  }

  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    overflow-x: auto;
    background: ${(props) => props.theme.code.background};
    font-size: 18px;
  }

  pre > code[class*="language-"] {
    padding: 0;
  }

  img {
    max-width: 100%;
  }

  pre[class*="language-"] {
    .token.boolean,
    .token.number,
    .token.function {
      color: #eca371;
    }

    .token.property,
    .token.class-name,
    .token.constant,
    .token.symbol {
      color: #ffd664;
    }

    .token.operator,
    .token.entity,
    .token.url {
      color: #11beea;
    }

    .token.selector,
    .token.important,
    .token.atrule,
    .token.keyword,
    .token.builtin {
      color: #ee5cb2;
    }
  }

  blockquote {
    border-left: 2px solid ${(props) => props.theme.main.foreground};
    margin-top: ${BASE_LINE_HEIGHT}px;
    margin-bottom: ${BASE_LINE_HEIGHT}px;
    margin-right: ${BASE_LINE_HEIGHT * 2}px;
    margin-left: 0;
    padding-left: ${BASE_LINE_HEIGHT}px;
  }

  a:not(.anchor):not(.button) {
    text-decoration: none;
    color: inherit;
    background-image: linear-gradient(120deg, #feaf6d 0%, #ff70a5 100%);
    background-repeat: no-repeat;
    background-size: 100% 3px;
    background-position: 0 100%;
    transition: all 0.125s ease-in;
    font-weight: 700;

    &:hover {
      color: black;
      background-size: 100% 100%;
    }
  }
`
