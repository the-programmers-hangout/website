import styled from "styled-components"
import { Link } from "gatsby"
import fontFamily from "../../design/typography"
import ArrowRight from "../../icons/arrow-right.svg"

export const PageNavigationContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
}
`

export const PageNavigationText = styled.p`
  font-family: ${fontFamily.body};
  font-weight: 700;
  font-size: 18px;
  margin: 0 19px 7px 17px;
`

export const PageNavigationLink = styled(Link)`
  display: flex;
  text-decoration: none;
  text-align: right;

  & > svg ~ p {
    text-align: left;
  }

  &:hover,
  &:focus {
    color: ${(props) => props.theme.main.foreground};
    text-decoration: underline;
  }
`

export const PageNavigationPageContent = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;

  &:last-of-type {
    align-items: flex-end;
  }

  & > div {
    display: flex;
    justify-content: start;
  }
`

export const PageNavigationPageTitle = styled(PageNavigationText)`
  margin: 0 10px;
  margin-bottom: 0;
  background: -webkit-linear-gradient(91.81deg, #feaf6d 0%, #ff70a5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const NextArrow = styled(ArrowRight)`
  width: 8px;
  path {
    fill: #ff74a2;
  }
`

export const PreviousArrow = styled(ArrowRight)`
  width: 8px;
  transform: rotate(180deg);
  path {
    fill: #feac71;
  }
`
