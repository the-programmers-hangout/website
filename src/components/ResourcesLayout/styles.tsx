import styled from "styled-components"
import { fontFamily } from "../../design/typography"
import Logo from "../../images/tph-logo.svg"

export const Main = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
`

export const MobileHeader = styled.div`
  display: none;
  z-index: 50;
  background: rgba(255, 255, 255, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 16px 32px;
  align-items: center;
  font-weight: 700;
  font-family: ${fontFamily.header};
  font-size: 22px;

  @media screen and (max-width: 767px) {
    display: flex;
  }
`

export const LogoWrapper = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #222;
  border-radius: 7px;
  margin-right: 8px;
`

export const StyledLogo = styled(Logo)`
  height: 25px;
`

export const Overlay = styled.div`
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: background-color 0.3s;
  background-color: rgba(0, 0, 0, 0);
  pointer-events: none;

  @media screen and (min-width: 768px) {
    display: none;
  }

  &.is-open {
    pointer-events: auto;
    background-color: rgba(0, 0, 0, 0.2);
  }
`

export const Burger = styled.div`
  margin-left: auto;
  width: 16px;
  height: 9px;
  padding: 8px;
  position: relative;
  cursor: pointer;

  &::before,
  &::after {
    position: absolute;
    content: "";
    height: 2px;
    width: 16px;
    background: #222;
    margin: 0 auto;
  }

  &::before {
    top: 8px;
  }

  &::after {
    bottom: 8px;
  }
`

export const MainContent = styled.main`
  flex: 1 1 auto;
  margin-top: 128px;
  width: calc(100% - 320px);

  @media screen and (max-width: 767px) {
    width: 100%;
  }

  & > :first-child {
    margin-top: 0;
  }

  & > :last-child {
    margin-bottom: 0;
  }
`

export const Container = styled.div`
  width: 650px;
  max-width: calc(100% - 64px);
  padding: 0 32px;
  margin: 0 auto;
`
