import { Link } from "gatsby"
import { darken, lighten } from "polished"
import styled from "styled-components"

export const ResourceBreadcrumbWrapper = styled.div`
  display: flex;
  align-items: flex-start;

  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
    margin-bottom: 16px;
  }
`

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 30px;

  svg {
    width: 12px;
    transform: rotate(90deg);
    margin: 6px;
  }

  svg path {
    fill: ${props => props.theme.main.link};
  }
`

export const StyledLink = styled(Link)`
  color: ${props => props.theme.main.link};
  cursor: pointer;

  &:hover {
    color: #045551;
    color: ${props =>
      props.theme.name === "dark"
        ? lighten(0.15, props.theme.main.link)
        : darken(0.15, props.theme.main.link)};
  }
`

export const CurrentPage = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
`
