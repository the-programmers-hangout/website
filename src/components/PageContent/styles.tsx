import styled from "styled-components"
import fontFamily from "../../design/typography"
import { darken } from "polished"

export const Content = styled.div`
  flex: 1 1 calc(1vw - 305px);
  width: calc(100% - 305px);
  padding: 64px 0;

  @media screen and (max-width: 1200px) {
    width: 100%;
    flex-basis: auto;
  }
`

export const Sidebar = styled.div`
  width: 240px;
  flex: 0 1 240px;
  border-left: 1px solid ${(props) => darken(0.1, props.theme.main.background)};
  color: ${(props) => (props.theme.name === "dark" ? "#f9f9f9" : "#172129")};
  margin: 64px 0;
  padding: 0 32px;
  position: sticky;
  top: 100px;

  &:empty {
    display: none;
  }

  @media screen and (max-width: 1200px) {
    width: auto;
    padding: 64px;
    flex-basis: auto;

    & > :first-child {
      margin-top: 0;
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const SidebarHeader = styled.div`
  font-family: ${fontFamily.header};
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 8px;
  margin-top: 0;
`

const ExtraLinks = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;

  &:first-child {
    margin-top: 0;
  }
`

export const RecommendedReading = styled(ExtraLinks)``

export const ExternalResources = styled(ExtraLinks)``
