import styled from "styled-components"

export const TocWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const TocItem = styled.div`
  display: inline-block;

  &.depth-3 {
    margin-left: 8px;
  }

  &.depth-2 + &.depth-2,
  &.depth-3 + &.depth-2 {
    margin-top: 8px;
  }
`
