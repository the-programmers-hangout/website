import styled from "styled-components"

export const LayoutWrapper = styled.div`
  background: #1f2a34;
  color: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const MainContent = styled.main`
  margin-top: 64px;
  display: flex;
  justify-content: center;
  width: 800px;
  max-width: calc(100% - 64px);
  padding: 0 32px;

  .anchor svg path {
    fill: #fff;
  }

  a:not(.anchor) {
    color: #0090d8;
    font-weight: 700;
    border-bottom: 2px solid;
    text-decoration: none;
    transition: color 0.3s;

    &:hover,
    &:focus {
      color: #5dbbea;
      transition: none;
    }
  }
`

export const WavesSpacer = styled.div`
  height: 50vw;
`
