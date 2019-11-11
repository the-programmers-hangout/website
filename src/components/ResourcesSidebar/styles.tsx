import { Link } from "gatsby"
import { transparentize } from "polished"
import styled from "styled-components"
import ChevronUp from "../../icons/chevron-up.svg"

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
