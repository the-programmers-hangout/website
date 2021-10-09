import { Link } from "gatsby"
import styled, { css } from "styled-components"
import { transparentize } from "polished"
import { fontFamily } from "../../design/typography"
import TPHLogo from "../../images/tph-logo"

export const SidebarWrapper = styled.div`
  box-sizing: border-box;
  flex: 0 0 320px;
  background: ${(props) => props.theme.sidebar.background};
  color: ${(props) => props.theme.sidebar.foreground};
  position: fixed;
  top: 0;
  bottom: 0;
  width: 320px;

  @media screen and (max-width: 768px) {
    z-index: 100;
    width: calc(100vw - 100px);
    transition: transform 0.2s ease-in-out;
    transform: translateX(-100vw)
  }

  &.is-open {
    transition: transform 0.3s ease-in-out;
    transform: translateX(0);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`

export const Header = styled(Link)`
  display: flex;
  align-items: stretch;
  text-decoration: none;
  height: 74px; /* previously logo chose the height of the header */
  @media screen and (max-width: 767px) {
    /* match mobile header height  */
    height:calc(35px + 32px);
  }
  &:hover > * {
    opacity: 0.85;
  }
`

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0b0f13;
  height: 100%; /* match height of the header*/
  flex: 0 0 74px;

`

export const StyledLogo = styled(TPHLogo)`
  height: 50px;
`

export const Title = styled.div`
  background: #263440;
  display: flex;
  flex: 1 0 auto;
  align-items: center;
  color: rgba(255, 255, 255, 0.9);
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  padding-left: 20px;
  font-family: ${fontFamily.header};
`

export const Inner = styled.div`
  padding: 20px 0 30px 20px;
`

export const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  margin: 20px 0 40px;
  padding-top: 20px;

  &.has-border {
    border-top: ${(props) =>
      `1px dashed ${transparentize(0.8, props.theme.sidebar.foreground)}`};
  }
`

export const menuItemStyles = css`
  padding: 4px 0;
  font-size: 20px;
  color: ${(props) => props.theme.sidebar.foreground};
  text-decoration: none;

  &:hover,
  &:active {
    text-decoration: underline;
  }

  &.active {
    font-weight: 700;
  }
`

export const MenuItem = styled(Link)`
  ${menuItemStyles};
`
