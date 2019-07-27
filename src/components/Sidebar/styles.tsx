import styled from "styled-components"

export const SidebarWrapper = styled.aside`
  width: 200px;
`

export const Logo = styled.img`
  width: 122px;
`

export const Menu = styled.nav`
  margin-top: 16px;
`

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 22px;

  & + & {
    margin-top: 8px;
  }

  svg {
    margin-left: 6px;
    width: 8px;
    height: 15px;
  }
`
