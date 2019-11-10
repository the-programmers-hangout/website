import { Link } from "gatsby"
import { transparentize } from "polished"
import styled from "styled-components"

export const PageLink = styled(Link)`
  display: block;
  padding: 4px 0 0;
  margin-bottom: 4px;
  color: ${props => props.theme.sidebar.foreground};
  align-self: flex-start;
  text-decoration: none;
  border-bottom: 2px solid transparent;

  &:hover {
    border-color: ${props =>
      transparentize(0.7, props.theme.sidebar.foreground)};
  }

  & + & {
    margin-top: 4px;
  }

  &.active {
    font-weight: 700;
    color: ${props => props.theme.sidebar.active};
  }

  &.active:hover {
    border-color: ${props => transparentize(0.7, props.theme.sidebar.active)};
  }
`
