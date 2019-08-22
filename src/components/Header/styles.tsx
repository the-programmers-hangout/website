import { Link } from "gatsby"
import Particles from "react-particles-js"
import styled from "styled-components"
import DiscordLogo from "../../images/discord-logo.svg"
import TPHLogo from "../../images/tph-logo.svg"

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  min-height: auto;
  background: #121240;
  overflow: hidden;

  &.is-home {
    min-height: 100vh;
  }
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 22px;

  .is-home & {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const Title = styled.h1`
  margin: 0;
  font-weight: 700;
  font-size: 50px;
  text-transform: uppercase;
  line-height: 1;
  color: #fff;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);

  .is-home & {
    margin: 32px 0;
    font-size: 110px;

    @media screen and (max-width: 991px) {
      font-size: 72px;
    }

    @media screen and (max-width: 767px) {
      font-size: 40px;
    }
  }
`

export const FadedBottomWave = styled.div`
  position: absolute;
  transform: translateY(100%);
  bottom: 0;
  left: 0;
  right: 0;
  transition: opacity 0.5s, transform 0.5s;
  opacity: 0;

  svg {
    position: static;
  }

  .is-home & {
    opacity: 1;
    transform: translateY(0);
  }

  .is-home & svg {
    position: static;
  }
`

export const StyledParticles = styled(Particles)<{ noop: number }>`
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

export const DiscordButton = styled.div`
  margin-top: 32px;
  display: flex;
  align-items: center;
  font-family: "Oxygen", sans-serif;
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
  background: #7289da;
  color: #fff;
  padding: 22px 35px;
  border-radius: 5px;
  transition: background 0.3s;
  cursor: pointer;
  box-shadow: 0 3px 18px rgba(0, 0, 0, 0.3);

  &:hover {
    background: #5265ad;
  }
`

export const StyledDiscordLogo = styled(DiscordLogo)`
  width: 38px;
  margin-right: 16px;
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

  .is-home & {
    width: 122px;
    margin-bottom: 0 0 10px 0;
  }
`

export const Menu = styled.nav`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
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
  background: #fff;
  transition: all 0.3s;
`

export const MenuItem = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 22px;
  text-decoration: none;
  color: #fff;
  position: relative;
  transition: color 0.3s;
  margin: 10px 20px 5px 0;
  font-family: "Oxygen Mono";

  &:hover {
    color: #fff;
  }

  &:hover ${MenuItemLine} {
    padding: 8px;
    height: 100%;
    background: #cf2e7d;
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
    color: #cf2e7d;

    ${MenuItemLine} {
      background: #cf2e7d;
    }

    &:hover {
      color: #fff;
    }

    &:hover ${MenuItemLine} {
      background: #cf2e7d;
    }
  }
`
