import styled from "styled-components"

export const Main = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  background: ${(props) => props.theme.main.background};
  color: ${(props) => props.theme.main.foreground};
`

export const Overlay = styled.div`
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: background-color 0.3s;
  background-color: rgba(0, 0, 0, 0);
  pointer-events: none;

  @media screen and (min-width: 768px) {
    display: none;
  }

  &.is-open {
    pointer-events: auto;
    background-color: rgba(0, 0, 0, 0.2);
  }
`

export const MainContent = styled.main`
  flex: 1 1 auto;
  margin: 0 0 0 320px;
  width: calc(100% - 320px);
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;

  @media screen and (max-width: 767px) {
    margin-left: 0;
    width: 100%;
  }

  & > :first-child {
    margin-top: 0;
  }

  & > :last-child {
    margin-bottom: 0;
  }
`

export const Container = styled.div`
  width: 650px;
  max-width: calc(100% - 64px);
  padding: 0 32px;
  margin: 0 auto;
`
