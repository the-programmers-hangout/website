import styled from "styled-components"

export const Main = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
`

export const MainContent = styled.main`
  flex: 1 1 auto;
  margin-top: 128px;
  width: calc(100% - 320px);

  & > :first-child {
    margin-top: 0;
  }

  & > :last-child {
    margin-bottom: 0;
  }
`

export const Container = styled.div`
  width: 650px;
  margin: 0 auto;
`
