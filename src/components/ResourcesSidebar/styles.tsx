import { Link } from "gatsby"
import styled from "styled-components"
import ChevronUp from "../../icons/chevron-up.svg"

export const ResourcesSidebarWrapper = styled.div`
  box-sizing: border-box;
  flex: 0 0 320px;
  background: #f9f9f9;
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

export const Children = styled.div`
  padding-left: 16px;
  padding-bottom: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
`

export const Label = styled.div`
  user-select: none;
  position: relative;
  padding: 8px 0;
  cursor: pointer;
  display: flex;
  align-items: center;

  svg {
    position: absolute;
    right: 100%;
    margin-right: 4px;
    width: 10px;
  }
`

export const FirstLabel = styled.div`
  user-select: none;
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 12px 15px 12px 0;
  font-weight: 700;
  color: #a9a9a9;
  cursor: pointer;

  &.active {
    color: #000;
  }

  svg {
    margin-left: auto;
    transform: rotate(90deg);
    transition: transform 0.3s;

    path {
      fill: #a9a9a9;
    }
  }

  &.active svg {
    transform: rotate(0);

    path {
      fill: #000;
    }
  }
`

export const TreeWrapper = styled.div<{ collapsed: boolean }>`
  width: 100%;
  font-size: 20px;

  &.firstLevel {
    overflow: hidden;
  }

  & + & {
    border-top: 1px solid #dbdbdb;
  }

  ${Children} {
    display: ${props => (props.collapsed ? "none" : "block")};
    /* height: ${props => (props.collapsed ? 0 : "auto")}; */
  }

  & > ${Label} svg {
    transform: rotate(${props => (props.collapsed ? -90 : 0)}deg);
  }
`

export const CollapseToggler = styled(ChevronUp)``

export const Inner = styled.div`
  padding-top: 30px;
  padding-left: 20px;
`

export const PageLink = styled(Link)`
  display: block;
  padding: 4px 0;
  color: #000;
  text-decoration: none;

  & + & {
    margin-top: 4px;
  }

  &.active {
    font-weight: 700;
  }
`

export const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  border-top: 1px dashed #a5a5a5;
  margin-top: 20px;
  padding-top: 20px;
`

export const MenuItem = styled(Link)`
  padding: 4px 0;
  font-size: 20px;
  color: #000;
  text-decoration: none;

  &:hover,
  &:active {
    text-decoration: underline;
  }

  &.active {
    font-weight: 700;
  }
`
