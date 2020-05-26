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

export const LanguageLabel = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 4px 15px 4px 0;
  font-weight: 700;
  color: ${(props) => transparentize(0.5, props.theme.sidebar.foreground)};
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
`

export const PageLink = styled(Link)`
  font-weight: 400;
  display: inline-block;
  font-size: 18px;

  & + & {
    margin-top: 8px;
  }
`
