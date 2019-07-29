import styled from "styled-components"

export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* the 172px is necessary because the logo is offset by that much */
  /* this ensures the logo never goes off screen */
  /* TODO: most likely extract this number */
  padding: 0 calc(172px + 32px);
  margin: 0 auto;
  width: 100%;
  max-width: 800px;

  & > :first-child {
    margin-top: 0;
  }

  & > :last-child {
    margin-bottom: 0;
  }
`
