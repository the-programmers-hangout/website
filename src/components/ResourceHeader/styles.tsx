import { Link } from "gatsby"
import { darken, lighten } from "polished"
import styled, { css } from "styled-components"
import { fontFamily, modularScale } from "../../design/typography"

export const ResourceHeaderWrapper = styled.div`
  border-bottom: 1px solid #dbdbdb;
  padding-bottom: 32px;
  margin-bottom: 32px;
`

export const Top = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const Title = styled.h1`
  font-family: ${fontFamily.header};
  font-size: ${modularScale(6).fontSize}px;
  line-height: ${modularScale(6).lineHeight}px;
  letter-spacing: -1.75px;
  margin-top: 0;
`

export const Meta = styled.div`
  display: flex;
  align-items: center;

  & + &::before {
    content: "•";
    margin: 0 8px;
  }

  @media screen and (max-width: 767px) {
    & + & {
      margin-top: 8px;
    }

    & + &::before {
      display: none;
    }
  }
`

const ExtraLinks = styled.div`
  margin-top: 16px;
`

export const RecommendedReading = styled(ExtraLinks)``

export const ExternalResources = styled(ExtraLinks)``

const extraLink = css`
  display: flex;
  align-items: center;
  color: ${props => props.theme.main.link};
  margin-top: 4px;
  margin-left: 20px;
  cursor: pointer;

  &:hover {
    color: ${props =>
      props.theme.name === "dark"
        ? lighten(0.15, props.theme.main.link)
        : darken(0.15, props.theme.main.link)};
  }

  svg {
    width: 14px;
    flex: 0 0 14px;
    transform: rotate(90deg);
    margin-right: 6px;
  }

  svg path {
    fill: ${props => props.theme.main.link};
  }
`

export const ExtraLinkInternal = styled(Link)`
  ${extraLink};
`

export const ExtraLinkExternal = styled.a`
  ${extraLink};
`

export const ExtraLinkText = styled.div`
  text-decoration: underline;
`

export const Popover = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  margin-top: 8px;
  padding: 8px;
  border-radius: 4px;
  background: ${props =>
    props.theme.name === "dark"
      ? lighten(0.1, props.theme.main.background)
      : darken(0.1, props.theme.main.background)};

  &::before {
    position: absolute;
    left: 16px;
    bottom: 100%;
    content: "";
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 3.5px 4px 3.5px;
    border-color: transparent transparent
      ${props =>
        props.theme.name === "dark"
          ? lighten(0.1, props.theme.main.background)
          : darken(0.1, props.theme.main.background)}
      transparent;
  }
`

export const PopoverToggler = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  &:hover ${Popover} {
    display: block;
  }
`
