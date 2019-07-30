import styled from "styled-components"
import { Link } from "gatsby"

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
  padding: 12px 0;

  & + & {
    border-top: 1px solid #dbdbdb;
  }
`

export const Inner = styled.div`
  padding-top: 30px;
  padding-left: 20px;

  /* TODO: change this.. */
  & > ${TreeWrapper} > .tree-view > .tree-view_item > div {
    font-weight: 700;
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
