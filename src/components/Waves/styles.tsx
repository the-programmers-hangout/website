import styled, { css } from "styled-components"
import WavesBottom from "../../images/waves-bot"
import WavesTop from "../../images/waves-top"

const waves = css`
  display: block;
  opacity: 0.7;
  width: 100vw;
  max-width: 100%;
  position: absolute;
  pointer-events: none;
`

export const StyledWavesTop = styled(WavesTop)`
  ${waves};
  top: 0;
  height: 87vh;
`

export const StyledWavesBottom = styled(WavesBottom)`
  ${waves};
  bottom: 0;
`
