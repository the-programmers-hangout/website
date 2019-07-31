import styled from "styled-components"

export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  max-width: 800px;

  & > :first-child {
    margin-top: 0;
  }

  & > :last-child {
    margin-bottom: 0;
  }
`
