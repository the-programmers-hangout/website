import { transparentize } from "polished"
import styled from "styled-components"

export const Top = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const Meta = styled.div`
  display: flex;
  white-space: nowrap;
  align-items: center;
  color: ${(props) => transparentize(0.1, props.theme.main.foreground)};

  & + &::before {
    content: "•";
    margin: 0 8px;
  }

  @media screen and (max-width: 1200px) {
    & + & {
      margin-top: 8px;
    }

    & + &::before {
      display: none;
    }
  }
`

export const Popover = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  margin-top: 8px;
  padding: 8px;
  border-radius: 4px;
  backdrop-filter: blur(14px);
  background: ${(props) => transparentize(0.3, props.theme.main.background)};

  &::before {
    position: absolute;
    left: 16px;
    bottom: 100%;
    content: "";
    width: 0;
    height: 0;
    backdrop-filter: blur(14px);
    border-style: solid;
    border-width: 0 3.5px 4px 3.5px;
    border-color: transparent transparent
      ${(props) => transparentize(0.3, props.theme.main.background)} transparent;
  }
`

export const PopoverToggler = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border-bottom: 1px dashed
    ${(props) => transparentize(0.1, props.theme.main.foreground)};

  &:hover ${Popover} {
    display: block;
  }
`
