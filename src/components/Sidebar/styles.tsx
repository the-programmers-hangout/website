import { Link } from "gatsby"
import styled, { css } from "styled-components"
import { transparentize } from "polished"
import { fontFamily } from "../../design/typography"
import TPHLogo from "../../images/tph-logo.svg"

export const SidebarWrapper = styled.div`
  box-sizing: border-box;
  flex: 0 0 320px;
  background: ${(props) => props.theme.sidebar.background};
  color: ${(props) => props.theme.sidebar.foreground};
  position: fixed;
  top: 0;
  bottom: 0;
  width: 320px;

  @media screen and (max-width: 767px) {
    z-index: 100;
    width: auto;
    /* TODO: maybe find a less "awkward" way to animate this */
    left: calc(-100% - 100px);
    right: calc(100% - 0px);
    transition: left 0.3s, right 0.3s;
  }

  &.is-open {
    left: 0;
    right: 100px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`

export const Header = styled(Link)`
  display: flex;
  align-items: stretch;
  text-decoration: none;

  &:hover > * {
    opacity: 0.85;
  }
`

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0b0f13;
  width: 74px;
  height: 74px;
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
  color: ${(props) => transparentize(0.1, props.theme.sidebar.foreground)};
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
