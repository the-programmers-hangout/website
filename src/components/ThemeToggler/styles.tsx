import { transparentize } from "polished"
import styled from "styled-components"

export const ThemeTogglerWrapper = styled.button`
  display: block;
  width: 100%;
  padding: 0;
  border: none;
  background: none;
  font: inherit;
  color: inherit;
  text-align: left;
  cursor: pointer;
`

export const Link = styled.span`
  display: inline-block;
  cursor: pointer;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid
      ${(props) => transparentize(0.6, props.theme.sidebar.foreground)};
  }
`
