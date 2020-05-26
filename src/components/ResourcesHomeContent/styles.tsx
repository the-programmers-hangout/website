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
    color: #fff !important;
    font-weight: 400 !important;
    border-bottom: 1px solid #fff;
    margin-bottom: 1px;
    display: inline-flex;
    align-items: center;
    font-size: 18px;

    &:hover {
      background: none;
      -webkit-background-clip: none;
      -webkit-text-fill-color: #fff;
      border-bottom-width: 2px;
      margin-bottom: 0;
    }

    &::after {
      position: absolute;
      margin-top: -6px;
      top: 50%;
      left: 100%;
      margin-left: 10px;
      display: block;
      content: "";
      /* I would prefer a svg, but could not get it to work */
      background-image: url("${externalLink}");
      background-size: 16px 16px;
      width: 16px;
      height: 16px;
    }
  }
`
