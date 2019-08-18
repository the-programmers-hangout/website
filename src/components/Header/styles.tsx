import { Link } from "gatsby"
import styled from "styled-components"

export const HeaderWrapper = styled.header`
  margin-bottom: 20px;
  padding: 80px 0 40px 0;
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
  padding-top: 34px;
`

export const MenuItem = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 28px;
  text-decoration: none;
  color: #000;
  position: relative;
  transition: color 0.3s;
  margin: 5px 47px;

  &:hover {
    color: #FF70A5;
  }

  &.active {
    color: #000;
    padding-bottom: 5px;
    border-bottom: 5px solid #FF70A5;

    &::after {
      background: #FF70A5;
    }

    &:hover {
      color: #FF70A5;
    }

    &:hover::after {
      background: #FF70A5;
    }
  }
`
