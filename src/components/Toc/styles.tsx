import styled from "styled-components"

export const TocWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const ScrollspyWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const TocItem = styled.div`
  display: inline-block;

  &.scrollspy-current,
  &.scrollspy-cached {
    position: relative;
    text-shadow: 0 0 0.65px ${(props) => props.theme.main.foreground},
      0 0 0.65px ${(props) => props.theme.main.foreground};

    &::after {
      position: absolute;
      top: 0;
      left: -16px;
      content: "";
      display: block;
      background: ${(props) => props.theme.main.foreground};
      width: 2px;
      height: 100%;
    }
  }

  &.depth-2,
  &.depth-3 {
    padding: 4px 0;
  }
`
