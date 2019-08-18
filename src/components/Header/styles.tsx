import { Link } from "gatsby"
import styled from "styled-components"

export const HeaderWrapper = styled.header`
  margin-bottom: 20px;
`

export const InnerWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Menu = styled.nav`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
`

export const MenuItem = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 22px;
  text-decoration: none;
  color: #555;
  position: relative;
  transition: color 0.3s;
  margin: 5px 10px;

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
`
