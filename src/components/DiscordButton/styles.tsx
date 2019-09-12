import styled from "styled-components"
import DiscordLogo from "../../images/discord-logo.svg"

export const DiscordButtonWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  align-items: center;
  font-family: "Oxygen", sans-serif;
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
  background: ${props => props.theme.discord.base};
  color: #fff;
  padding: 22px 35px;
  border-radius: 5px;
  transition: background 0.3s;
  cursor: pointer;
  box-shadow: 0 3px 18px rgba(0, 0, 0, 0.3);

  &:hover {
    background: ${props => props.theme.discord.darker};
  }
`

export const StyledDiscordLogo = styled(DiscordLogo)`
  width: 38px;
  margin-right: 16px;
`
