import { Link } from "gatsby"
import styled from "styled-components"

export const BreadcrumbWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
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
  white-space: nowrap;

  svg {
    width: 12px;
    transform: rotate(90deg);
    margin: 6px;
  }

  svg path {
    fill: ${(props) => (props.theme.name === "dark" ? "#f9f9f9" : "#172129")};
  }
`

export const StyledLink = styled(Link)`
  color: ${(props) => (props.theme.name === "dark" ? "#f9f9f9" : "#172129")};
  cursor: pointer;
  font-weight: 700;
  text-decoration: underline;

  &:hover {
    background: linear-gradient(92.97deg, #feaf6d 0%, #ff70a5 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

export const CurrentPage = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  white-space: nowrap;
`
