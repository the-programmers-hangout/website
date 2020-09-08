import { transparentize } from "polished"
import styled from "styled-components"
import { fontFamily } from "../../design/typography"
import Logo from "../../images/tph-logo"

export const MobileHeaderWrapper = styled.div`
  z-index: 50;
  background: ${(props) => transparentize(0.6, props.theme.main.background)};
  backdrop-filter: blur(14px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 16px 32px;
  display: none;
  align-items: center;
  font-weight: 700;
  font-family: ${fontFamily.header};
  font-size: 22px;

  @media screen and (max-width: 767px) {
    display: flex;
  }

  /* known bug: "} expected ts-styled-plugin(9999)" https://github.com/microsoft/typescript-styled-plugin/issues/51 */
  @-moz-document url-prefix() {
    & {
      background: inherit;
    }
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
    background: ${(props) => props.theme.main.foreground};
    margin: 0 auto;
  }

  &::before {
    top: 8px;
  }

  &::after {
    bottom: 8px;
  }
`
