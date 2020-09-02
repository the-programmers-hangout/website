import styled from "styled-components"
import DiscordLogo from "../../images/discord-logo"

export const DiscordButtonWrapper = styled.a`
  display: inline-flex;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  background: ${(props) => props.theme.discord.base};
  color: #fff;
  padding: 18px 28px;
  border-radius: 5px;
  transition: background 0.3s;
  cursor: pointer;
  box-shadow: 0 3px 18px rgba(0, 0, 0, 0.3);

  &:hover {
    background: ${(props) => props.theme.discord.darker};
  }
`

export const StyledDiscordLogo = styled(DiscordLogo)`
  width: 30px;
  height: 30px;
  margin-right: 13px;
`
