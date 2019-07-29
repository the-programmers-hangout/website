import { Link } from "gatsby"
import styled from "styled-components"

export const HeaderWrapper = styled.header``

export const InnerWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 122px;
`

export const Logo = styled.img`
  position: absolute;
  margin-right: 50px;
  left: calc(-122px - 50px);
  width: 122px;
  height: 122px;
`

export const Menu = styled.nav`
  margin-top: 16px;
  display: flex;
  align-items: flex-start;
`

export const MenuItem = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 22px;
  text-decoration: none;
  color: #555;
  position: relative;
  transition: color 0.3s;

  /* underline bar, getting animated through hover */
  &::after {
    z-index: -1;
    position: absolute;
    content: "";
    height: 2px;
    width: 100%;
    margin-top: -3px;
    bottom: 0;
    background: #555;
    transition: all 0.3s;
  }

  &:hover {
    color: #fff;
  }

  &:hover::after {
    padding: 8px;
    height: 100%;
    background: #000;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1), 0 5px 11px rgba(0, 0, 0, 0.25);
    margin-left: -8px;
    margin-bottom: -8px;
    border-radius: 3px;
  }

  &.active {
    font-weight: 700;
    color: #d33636;

    &::after {
      background: #d33636;
    }

    &:hover {
      color: #fff;
    }

    &:hover::after {
      background: #d33636;
    }
  }

  & + & {
    margin-left: 48px;
  }
`
