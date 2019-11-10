import { Link } from "gatsby"
import styled, { css } from "styled-components"

const linkStyle = css`
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
`

export const ColumnLinkInternal = styled(Link)`
  ${linkStyle}
`

export const ColumnLinkExternal = styled.a`
  ${linkStyle}
`
