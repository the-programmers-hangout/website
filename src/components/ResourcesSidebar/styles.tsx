import { Link } from "gatsby"
import { transparentize } from "polished"
import styled, { css } from "styled-components"
import ChevronUp from "../../icons/chevron-up.svg"
import Collapse from "../../icons/collapse.svg"
import Expand from "../../icons/expand.svg"

export const Children = styled.div`
  padding-left: 16px;
  padding-bottom: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;

  &:last-child {
    padding-bottom: 0;
  }
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
    border-color: ${(props) =>
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
  color: ${(props) => props.theme.sidebar.foreground};
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.sidebar.foreground};

    svg path {
      fill: ${(props) => props.theme.sidebar.foreground};
    }
  }

  svg {
    margin-left: auto;
    transform: rotate(90deg);

    path {
      fill: ${(props) => transparentize(0.5, props.theme.sidebar.foreground)};
    }
  }
`

export const TreeWrapper = styled.div<{ collapsed?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 20px;

  &.firstLevel {
    overflow: hidden;
    border-top: 1px solid
      ${(props) => transparentize(0.8, props.theme.sidebar.foreground)};
  }

  ${Children} {
    display: ${(props) => (props.collapsed ? "none" : "flex")};
  }

  & > ${Label} svg {
    transform: rotate(${(props) => (props.collapsed ? -90 : 0)}deg);
    fill: ${(props) => props.theme.sidebar.foreground};
  }
`

export const CollapseToggler = styled(ChevronUp)``

export const CollapseIcon = styled(Collapse)`
  margin-left: auto;

  path {
    fill: ${(props) => transparentize(0.5, props.theme.sidebar.foreground)};
  }
`

export const ExpandIcon = styled(Expand)`
  margin-left: auto;

  path {
    fill: ${(props) => transparentize(0.5, props.theme.sidebar.foreground)};
  }
`

export const ExpandResources = styled.div`
  padding-right: 15px;
  margin-bottom: 20px;
`

export const ExpandResourcesHeader = styled.div`
  user-select: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${(props) => transparentize(0.5, props.theme.sidebar.foreground)};
  font-weight: 700;

  &:hover {
    opacity: 0.85;
  }
`

export const StyledResourceList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;

  & + & {
    padding-top: 16px;
    margin-top: 16px;
    border-top: 1px solid
      ${(props) => transparentize(0.8, props.theme.sidebar.foreground)};
  }
`

const item = css`
  display: block;
  margin-bottom: 4px;
  color: ${(props) => props.theme.sidebar.foreground};
  align-self: flex-start;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  cursor: pointer;

  &:hover {
    border-color: ${(props) =>
      transparentize(0.7, props.theme.sidebar.foreground)};
  }

  & + &,
  ${TreeWrapper} + & {
    padding: 8px 0 0;
  }

  &.active {
    font-weight: 700;
    color: ${(props) => props.theme.sidebar.active};
  }

  &.active:hover {
    border-color: ${(props) => transparentize(0.7, props.theme.sidebar.active)};
  }
`

export const Resource = styled.div`
  ${item};
`

export const PageLink = styled(Link)`
  ${item};
`
