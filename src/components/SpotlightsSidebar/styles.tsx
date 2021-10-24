import { Link } from "gatsby"
import { transparentize } from "polished"
import styled from "styled-components"

export const PageLink = styled(Link)`
  display: block;
  padding: 4px 0 0;
  color: ${(props) => props.theme.sidebar.foreground};
  align-self: flex-start;
  text-decoration: none;

  &:hover {
    border-color: ${(props) =>
      transparentize(0.7, props.theme.sidebar.foreground)};
    text-decoration: underline;
  }

  & + & {
    margin-top: 4px;
  }

  &.active {
    font-weight: 700;
    color: ${(props) => props.theme.sidebar.active};
  }

  &.active:hover {
    border-color: ${(props) => transparentize(0.7, props.theme.sidebar.active)};
  }
`
