import { Link } from "gatsby"
import Particles from "react-particles-js"
import styled, { css } from "styled-components"
import { fontFamily } from "../../design/typography"
import TPHLogo from "../../images/tph-logo"

export const HomeWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  min-height: 100vh;
  background: ${(props) => props.theme.main.background};
  overflow: hidden;
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 22px;
  max-width: 100%;
  flex-direction: column;
`

export const Title = styled.h1`
  margin: 0;
  font-family: ${fontFamily.header};
  font-weight: 700;
  font-size: 88px;
  text-transform: uppercase;
  line-height: 1;
  color: ${(props) => props.theme.main.foreground};
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  margin: 32px 0;
  max-width: 100%;

  @media screen and (max-width: 991px) {
    font-size: 58px;
  }

  @media screen and (max-width: 767px) {
    font-size: 32px;
  }
`

export const FadedBottomWave = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: none;

  svg {
    position: static;
  }
`

export const StyledParticles = styled(Particles)`
  mask-image: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 5%,
    rgba(0, 0, 0, 1) 25%,
    rgba(0, 0, 0, 1) 75%,
    rgba(0, 0, 0, 0) 95%
  );
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export const InnerWrapper = styled.div`
  width: 800px;
  max-width: calc(100% - 64px);
  padding: 32px;
  position: relative;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`

export const Logo = styled(TPHLogo)`
  width: 70px;
  margin: 0 15px 0 0;
  position: relative;
  z-index: 3;
  width: 98px;
  margin-bottom: 0 0 10px 0;
`

export const Menu = styled.nav`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-bottom: 32px;
`

export const MenuItemText = styled.div`
  position: relative;
  z-index: 5;
`

/* underline bar, getting animated through hover */
export const MenuItemLine = styled.div`
  position: absolute;
  z-index: 4;
  height: 2px;
  width: 100%;
  margin-top: -3px;
  bottom: 0;
  background: ${(props) => props.theme.main.foreground};
  transition: all 0.3s;
  left: 0;
`

export const menuItemStyles = css`
  display: flex;
  align-items: center;
  font-size: 22px;
  text-decoration: none;
  color: ${(props) => props.theme.main.foreground};
  position: relative;
  transition: color 0.3s;
  margin: 10px 20px 5px 0;
  font-family: "IBM Plex Mono", monospace;

  &:hover {
    color: #fff;
  }

  &:hover ${MenuItemLine} {
    padding: 8px;
    height: 100%;
    background: #dd66a1;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1), 0 5px 11px rgba(0, 0, 0, 0.25);
    margin-left: -8px;
    margin-bottom: -8px;
    border-radius: 3px;
  }

  &.disabled {
    cursor: default;
    pointer-events: none;
    opacity: 0.7;
    color: #fff !important;
  }

  &.disabled ${MenuItemLine} {
    bottom: 50%;
    background: #fff !important;
  }

  &.active {
    font-weight: 700;
    color: #dd66a1;

    ${MenuItemLine} {
      background: #dd66a1;
    }

    &:hover {
      color: #fff;
    }

    &:hover ${MenuItemLine} {
      background: #dd66a1;
    }
  }
`

export const MenuItem = styled(Link)`
  ${menuItemStyles};
`
