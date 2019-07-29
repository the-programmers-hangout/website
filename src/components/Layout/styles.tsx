import styled from "styled-components"

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin: 128px auto 64px !important;
  width: 100%;
`

export const MainContent = styled.main`
  flex: 1 0 auto;

  & > :first-child {
    margin-top: 0;
  }

  & > :last-child {
    margin-bottom: 0;
  }
`
