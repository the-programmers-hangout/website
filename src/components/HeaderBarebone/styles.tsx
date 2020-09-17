import { transparentize, darken } from "polished"
import styled from "styled-components"
import { fontFamily } from "../../design/typography"
import { WavesTop, WavesBottom } from "../Waves"
import Circles from "../../images/circles"

export const HeaderWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1200px) {
    width: 100% !important;
    padding-right: 0 !important;
  }

  @media screen and (max-width: 767px) {
    display: flex;
    align-items: flex-end;
    height: auto;
    padding-top: 67px;
  }
`

export const BackgroundWrapper = styled.div`
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  @media screen and (max-width: 767px) {
    background: ${(props) => darken(0.2, props.theme.main.background)};
  }
`

export const StyledCircles = styled(Circles)`
  position: absolute;
  top: 50%;
  margin-top: -200px;

  @media screen and (max-width: 768px) {
    margin-top: -145px;
    margin-left: -20px;
    margin-right: -20px;
  }
`

export const StyledWavesTop = styled(WavesTop)`
  opacity: ${(props) => (props.theme.name === "dark" ? 0.8 : 0.2)};
  top: -10%;
  transform: scaleX(-1);

  @media screen and (max-width: 767px) {
    top: 0;
  }
`

export const StyledWavesBottom = styled(WavesBottom)`
  opacity: ${(props) => (props.theme.name === "dark" ? 0.8 : 0.2)};
  bottom: -30%;
  transform: scaleX(-1);

  @media screen and (max-width: 767px) {
    bottom: 0;
  }
`

export const Box = styled.div`
  display: inline-flex;
  flex-direction: column;
  position: relative;
  background: ${(props) => transparentize(0.3, props.theme.main.background)};
  padding: 16px;
  margin: 16px;
  backdrop-filter: blur(14px);
  max-width: 650px;
  z-index: 1;

  @media screen and (max-width: 1200px) {
    max-width: 100%;
  }

  @media screen and (max-width: 767px) {
    position: static;
    bottom: auto;
    top: auto;

    @-moz-document url-prefix() {
      & {
        position: relative;
      }
    }
  }
`

export const Title = styled.h1`
  font-family: ${fontFamily.header};
  font-size: 34px;
  line-height: 41px;
  letter-spacing: -1.75px;
  margin-top: 0;
  margin-bottom: 0;

  &.has-content-above {
    margin-top: 8px;
  }

  &.has-content-below {
    margin-bottom: 8px;
  }
`
