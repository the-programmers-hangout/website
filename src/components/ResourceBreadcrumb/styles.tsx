import styled from "styled-components"
import { Link } from "gatsby"

export const ResourceBreadcrumbWrapper = styled.div`
  display: flex;
  align-items: flex-start;
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
    fill: #000000;
  }
`

export const StyledLink = styled(Link)`
  color: #000000;
  cursor: pointer;
`

export const CurrentPage = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
`
