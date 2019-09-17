import { Link } from "gatsby"
import { transparentize } from "polished"
import styled from "styled-components"
import ChevronUp from "../../icons/chevron-up.svg"

export const ResourcesSidebarWrapper = styled.div`
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
  padding: 8px 0 0;
  margin-bottom: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-bottom: 2px solid transparent;
  align-self: flex-start;

  &:hover {
    border-color: ${props =>
      transparentize(0.7, props.theme.sidebar.foreground)};
  }

  svg {
    position: absolute;
    right: 100%;
    margin-right: 5px;
    width: 7px;
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
  color: ${props => transparentize(0.5, props.theme.sidebar.foreground)};
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.sidebar.foreground};

    svg path {
      fill: ${props => props.theme.sidebar.foreground};
    }
  }

  &.active {
    color: ${props => props.theme.sidebar.foreground};
  }

  svg {
    margin-left: auto;
    transform: rotate(90deg);
    transition: transform 0.3s;

    path {
      fill: ${props => transparentize(0.5, props.theme.sidebar.foreground)};
    }
  }

  &.active svg {
    transform: rotate(0);

    path {
      fill: ${props => props.theme.sidebar.foreground};
    }
  }
`

export const TreeWrapper = styled.div<{ collapsed: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 20px;

  &.firstLevel {
    overflow: hidden;
  }

  & + & {
    border-top: 1px solid
      ${props => transparentize(0.8, props.theme.sidebar.foreground)};
  }

  ${Children} {
    display: ${props => (props.collapsed ? "none" : "flex")};
  }

  & > ${Label} svg {
    transform: rotate(${props => (props.collapsed ? -90 : 0)}deg);
    fill: ${props => props.theme.sidebar.foreground};
  }
`

export const CollapseToggler = styled(ChevronUp)``

export const Inner = styled.div`
  padding: 30px 0 30px 20px;
`

export const PageLink = styled(Link)`
  display: block;
  padding: 4px 0 0;
  margin-bottom: 4px;
  color: ${props => props.theme.sidebar.foreground};
  align-self: flex-start;
  text-decoration: none;
  border-bottom: 2px solid transparent;

  &:hover {
    border-color: ${props =>
      transparentize(0.7, props.theme.sidebar.foreground)};
  }

  & + & {
    margin-top: 4px;
  }

  &.active {
    font-weight: 700;
    color: ${props => props.theme.sidebar.active};
  }

  &.active:hover {
    border-color: ${props => transparentize(0.7, props.theme.sidebar.active)};
  }
`

export const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  border-top: 1px dashed #a5a5a5;
  margin: 20px 0 40px;
  padding-top: 20px;
`

export const MenuItem = styled(Link)`
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
