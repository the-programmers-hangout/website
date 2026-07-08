import styled, { css } from "styled-components"
import { AppLink as Link } from "../AppLink"

const extraLink = css`
  color: ${(props) => props.theme.main.foreground};
  text-decoration: none;
  word-break: break-word;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`

export const Anchor = styled.a`
  ${extraLink};
`

export const Internal = styled(Link)`
  ${extraLink};
`

export const External = styled.a`
  ${extraLink};
`
