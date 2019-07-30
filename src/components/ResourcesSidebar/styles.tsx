import styled from "styled-components"
import { Link } from "gatsby"
import ChevronUp from "../../icons/chevron-up.svg"

export const ResourcesSidebarWrapper = styled.div`
  box-sizing: border-box;
  flex: 0 0 320px;
  background: #f9f9f9;
`

export const Banner = styled.img`
  display: block;
  width: 100%;
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
