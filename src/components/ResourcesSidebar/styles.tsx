import styled from "styled-components"
import { Link } from "gatsby"
import ChevronUp from "../../icons/chevron-up.svg"

export const ResourcesSidebarWrapper = styled.div`
  box-sizing: border-box;
  flex: 0 0 300px;
  background: #f9f9f9;
`

export const Banner = styled.img`
  display: block;
  width: 100%;
`

export const TreeWrapper = styled.div`
  width: 100%;

  & + & {
    border-top: 1px solid #dbdbdb;
  }
`

export const Label = styled.div`
  padding: 4px 0;
`

export const FirstLabel = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 12px 15px 12px 0;
  font-weight: 700;
  color: #a9a9a9;

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

export const CollapseToggler = styled(ChevronUp)``

export const Inner = styled.div`
  padding-top: 30px;
  padding-left: 20px;

  .tree-view {
    overflow-y: hidden;
  }

  .tree-view_item {
    display: flex;
    cursor: pointer;
  }

  .tree-view_children {
    margin-left: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .tree-view_children-collapsed {
    height: 0px;
  }

  .tree-view_arrow {
    cursor: pointer;
    margin-right: 6px;
    display: inline-block;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .tree-view_arrow:after {
    content: "▾";
  }

  .tree-view_arrow.firstLevel {
    display: none;
  }

  .tree-view_arrow-collapsed {
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
  }
`

export const PageLink = styled(Link)`
  display: block;
  padding: 4px 0;
  color: #1c61df;

  &.active {
    font-weight: 700;
  }
`
