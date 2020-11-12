import styled from "styled-components"

export const ContainerWrapper = styled.div`
  --padding: 64px;
  width: 650px;
  max-width: calc(100% - var(--padding) * 2);
  padding: 0px var(--padding);
  margin: 0 auto;

  @media screen and (max-width: 767px) {
    --padding: 32px;
  }
`
