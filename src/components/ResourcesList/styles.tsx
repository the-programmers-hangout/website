import { transparentize } from "polished"
import styled from "styled-components"
import { Link } from "../Link"

export const ResourcesListWrapper = styled.div`
  box-sizing: border-box;
  color: ${(props) => props.theme.main.foreground};
`

export const Children = styled.div`
  padding-left: 16px;
  padding-bottom: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;

  &.is-single {
    padding-left: 0;
  }
`

export const Label = styled.div`
  user-select: none;
  position: relative;
  padding: 4px 0 2px;
  margin-bottom: 2px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-bottom: 1px solid transparent;
  align-self: flex-start;

  &:hover {
    border-color: ${(props) =>
      transparentize(0.7, props.theme.sidebar.foreground)};
  }

  svg {
    position: absolute;
    right: 100%;
    margin-right: 4px;
    width: 10px;
  }
`

export const LanguageLabel = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 4px 15px 4px 0;
  font-weight: 700;
  color: ${(props) => transparentize(0.5, props.theme.sidebar.foreground)};

  svg {
    margin-left: auto;
    transform: rotate(90deg);
    transition: transform 0.3s;

    path {
      fill: ${(props) => transparentize(0.5, props.theme.sidebar.foreground)};
    }
  }
`

export const TreeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 16px;

  & + & {
    margin-top: 32px;
  }

  ${Children} {
    display: flex;
  }

  & > ${Label} svg {
    fill: ${(props) => props.theme.sidebar.foreground};
  }
`

export const PageLink = styled(Link)`
  font-weight: 400;
  display: inline-block;
  font-size: 18px;

  & + & {
    margin-top: 8px;
  }
`
