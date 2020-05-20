import { transparentize, darken } from "polished"
import styled from "styled-components"
import { fontFamily, modularScale } from "../../design/typography"
import { WavesTop, WavesBottom } from "../Waves"
import Circles from "../../images/circles.svg"

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 391px;
  padding-top: 67px;
  position: relative;

  &.shifted {
    width: calc(100% - 305px);
    padding-right: 305px;
  }

  @media screen and (max-width: 1200px) {
    width: 100% !important;
    padding-right: 0 !important;
  }

  @media screen and (max-width: 767px) {
    display: flex;
    align-items: flex-end;
    height: auto;
    min-height: 391px;
  }
`

export const BackgroundWrapper = styled.div`
  height: 391px;
  padding-top: 67px;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  @media screen and (max-width: 767px) {
    height: calc(100% - 67px);
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
  position: absolute;
  bottom: 40px;
  margin-left: -16px;
  background: ${(props) => transparentize(0.3, props.theme.main.background)};
  padding: 16px;
  backdrop-filter: blur(14px);
  max-width: 650px;

  @media screen and (max-width: 1200px) {
    max-width: 100%;
    left: 32px;
    right: 32px;
    margin-left: 0;
  }

  @media screen and (max-width: 767px) {
    position: static;
    bottom: auto;
    top: auto;
    margin: 32px 0;
  }
`

export const Title = styled.h1`
  font-family: ${fontFamily.header};
  font-size: ${modularScale(6).fontSize}px;
  line-height: ${modularScale(6).lineHeight}px;
  letter-spacing: -1.75px;
  margin-top: 0;
  margin: 0;

  & + * {
    margin-top: 16px;
  }
`
