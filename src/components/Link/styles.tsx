import { Link } from "gatsby"
import styled, { css } from "styled-components"

const linkStyle = css`
  display: inline-block;
  font-weight: 700;
  color: #fff;
  color: ${(props) => props.theme.main.foreground};
  font-weight: 700;
  text-decoration: none;
  position: relative;

  &::after {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background: linear-gradient(92.97deg, #feaf6d 0%, #ff70a5 100%);
  }

  &:hover,
  &:focus {
    background: linear-gradient(92.97deg, #feaf6d 0%, #ff70a5 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

export const LinkInternal = styled(Link)`
  ${linkStyle}
`

export const LinkExternal = styled.a`
  ${linkStyle}
`
