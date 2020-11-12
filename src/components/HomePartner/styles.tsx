import styled from "styled-components"
import JetBrainsLogo from "../../images/jetbrains-logo"

export const HomePartnerWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  align-items: center;
  font-family: "IBM Plex Mono", monospace;
  text-transform: uppercase;
  font-size: 22px;
  color: ${(props) => props.theme.main.foreground};
`

export const StyledJetBrainsLogo = styled(JetBrainsLogo)`
  height: 110px;
  margin: 0 16px;
`
