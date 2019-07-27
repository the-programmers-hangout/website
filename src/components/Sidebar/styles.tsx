import { Link } from "gatsby"
import styled from "styled-components"

export const SidebarWrapper = styled.aside`
  width: 200px;
`

export const Logo = styled.img`
  width: 122px;
`

export const Menu = styled.nav`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
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

  &::after {
    position: absolute;
    content: "";
    height: 2px;
    transition: width 0.3s;
    width: 0;
    bottom: -3px;
    background: #bf1e2e;
  }

  &:hover {
    color: #bf1e2e;
  }

  &:hover::after {
    width: calc(100% - 8px - 6px);
  }

  & + & {
    margin-top: 8px;
  }

  svg {
    margin-left: 6px;
    width: 8px;
    height: 15px;
  }
`
