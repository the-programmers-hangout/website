import styled, { css } from "styled-components"
import { Link } from "gatsby"
import { fontFamily, modularScale } from "../../design/typography"

export const ResourceHeaderWrapper = styled.div`
  border-bottom: 1px solid #dbdbdb;
  padding-bottom: 32px;
  margin-bottom: 32px;
`

export const Top = styled.div`
  display: flex;
  align-items: center;
`

export const Title = styled.h1`
  font-family: ${fontFamily.header};
  font-size: ${modularScale(6).fontSize}px;
  line-height: ${modularScale(6).lineHeight}px;
  letter-spacing: -1.75px;
  margin-top: 0;
`

export const Meta = styled.div`
  & + &::before {
    content: "•";
    margin: 0 8px;
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
  color: #04b0a6;
  margin-top: 4px;
  margin-left: 20px;
  cursor: pointer;

  &:hover {
    color: #045551;
  }

  svg {
    width: 14px;
    transform: rotate(90deg);
    margin-right: 6px;
  }

  svg path {
    fill: #04b0a6;
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
