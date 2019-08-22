import { Link } from "gatsby"
import styled from "styled-components"

export const FooterWrapper = styled.footer`
  & a {
    display: inline;
    color: #0090d8;
    font-weight: 700;
    border-bottom: 2px solid;
    text-decoration: none;
    transition: color 0.3s;

    &:hover,
    &:focus {
      color: #5dbbea;
      transition: none;
    }
  }
`
