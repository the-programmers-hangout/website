import styled, { css } from "styled-components"
import WavesBottom from "../../images/waves-bot.svg"
import WavesTop from "../../images/waves-top.svg"

const waves = css`
  opacity: 0.7;
  width: 100vw;
  max-width: 100%;
  position: absolute;
  pointer-events: none;
`

export const StyledWavesTop = styled(WavesTop)`
  ${waves};
  top: 0;
`

export const StyledWavesBottom = styled(WavesBottom)`
  ${waves};
  bottom: 0;
`
