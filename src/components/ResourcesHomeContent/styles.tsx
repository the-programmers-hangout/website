import styled from "styled-components"
import fontFamily, { BASE_LINE_HEIGHT } from "../../design/typography"
import externalLink from "../../icons/external-link.png"

export const ResourcesHomeContentWrapper = styled.div``

export const Title = styled.h2`
  font-size: 24px;
  font-family: ${fontFamily.header};
`

export const Intro = styled.p`
  font-size: 16px;
  font-weight: 700;
  font-family: ${fontFamily.header};
`

// most of this should probably be elsewhere and not attempt to overwrite markdown styles
export const Box = styled.div`
  background: ${(props) => props.theme.sidebar.background};
  margin: 32px -16px;
  padding: 16px;

  ${Title} {
    margin-top: 0;
  }

  h6 {
    margin-top: ${BASE_LINE_HEIGHT}px;
  }

  h6 ~ h6::before {
    display: block;
    margin-bottom: ${BASE_LINE_HEIGHT}px;
    content: "";
    height: 1px;
    background: ${(props) =>
      props.theme.name === "dark" ? "#34414e" : "#a3beda"};
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul li + li {
      margin-top: 8px;
  }

  a:not(.anchor) {
    position: relative;
    color: ${(props) =>
      props.theme.name === "dark" ? "#fff" : "#000"} !important;
    font-weight: 400 !important;
    background: none !important;
    border-bottom: 1px solid ${(props) =>
      props.theme.name === "dark" ? "#fff" : "#000"};
    margin-bottom: 1px;
    display: inline-flex;
    align-items: center;
    font-size: 18px;
    transition: none !important;

    &:hover {
      background: none;
      -webkit-background-clip: none;
      -webkit-text-fill-color: ${(props) =>
        props.theme.name === "dark" ? "#fff" : "#000"};
      border-bottom-width: 2px;
      margin-bottom: 0;
    }

    &::after {
      margin-left: 4px;
      position: absolute;
      left: 100%;
      display: block;
      content: "";
      /* I would prefer a svg, but could not get it to work */
      background-image: url("${externalLink}");
      filter: ${(props) =>
        props.theme.name === "dark" ? "invert(0%)" : "invert(100%)"} ;
      background-size: 16px 16px;
      width: 16px;
      height: 16px;
    }
  }
`
