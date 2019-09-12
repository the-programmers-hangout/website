import { Link } from "gatsby"
import styled, { css } from "styled-components"
import { fontFamily, modularScale } from "../../design/typography"
import { darken, lighten } from "polished"

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
