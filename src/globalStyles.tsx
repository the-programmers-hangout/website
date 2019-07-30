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

  /* TODO: probably extract this */
  .tree-view {
    overflow-y: hidden;
  }

  .tree-view_item {
    display: flex;
    cursor: pointer;
  }

  .tree-view_item,
  .tree-view_children > div {
    padding: 4px 0;
  }

  .tree-view_children {
    margin-left: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .tree-view_children-collapsed {
    height: 0px;
  }

  .tree-view_arrow {
    cursor: pointer;
    margin-right: 6px;
    display: inline-block;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .tree-view_arrow:after {
    content: "▾";
  }

  .tree-view_arrow-collapsed {
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
  }
`
