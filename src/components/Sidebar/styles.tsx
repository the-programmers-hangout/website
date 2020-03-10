import { Link } from "gatsby"
import styled, { css } from "styled-components"

export const SidebarWrapper = styled.div`
  box-sizing: border-box;
  flex: 0 0 320px;
  background: ${props => props.theme.sidebar.background};
  color: ${props => props.theme.sidebar.foreground};
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

export const Inner = styled.div`
  padding: 30px 0 30px 20px;
`

export const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  border-top: ${props =>
    props.borderVisibility ? "1px dashed #a5a5a5" : "none"};
  margin: 20px 0 40px;
  padding-top: 20px;
`

export const menuItemStyles = css`
  padding: 4px 0;
  font-size: 20px;
  color: ${props => props.theme.sidebar.foreground};
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
