import { Link } from "gatsby"
import React, { FC } from "react"
import { DiscordButton } from "../DiscordButton"
import { HomePartner } from "../HomePartner"
import { WavesBottom, WavesTop } from "../Waves"
import * as SC from "./styles"

interface IMenuItemProps {
  to: string
}

const MenuItem: FC<IMenuItemProps> = ({ children, to }) => {
  if (to.match(/^(https?:\/\/)/)) {
    return (
      <SC.MenuItemExternal href={to} target="_blank">
        <SC.MenuItemText>{children}</SC.MenuItemText>
        <SC.MenuItemLine />
      </SC.MenuItemExternal>
    )
  }

  return (
    <SC.MenuItem
      to={to}
      activeClassName="active"
      className={to === "/" ? "disabled" : ""}
    >
      <SC.MenuItemText>{children}</SC.MenuItemText>
      <SC.MenuItemLine />
    </SC.MenuItem>
  )
}

export const Home: FC = () => {
  return (
    <SC.HomeWrapper>
      <WavesTop />
      <SC.FadedBottomWave>
        <WavesBottom />
      </SC.FadedBottomWave>

      <SC.StyledParticles
        params={{
          particles: {
            number: { value: 5, density: { enable: true, value_area: 500 } },
            color: { value: "#ffffff" },
            opacity: {
              value: 0.5,
              random: false,
              anim: { enable: false },
            },
            size: {
              value: 36,
              random: true,
              anim: { enable: false },
            },
            line_linked: {
              enable: false,
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: "top",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: { enable: false },
            },
          },
          retina_detect: true,
        }}
      />
      <SC.InnerWrapper>
        <SC.TitleWrapper>
          <Link to="/">
            <SC.Logo />
          </Link>
          <SC.Title>The Programmer's Hangout</SC.Title>
        </SC.TitleWrapper>
        <SC.Menu>
          <MenuItem to="/about">about</MenuItem>
          <MenuItem to="/rules">rules</MenuItem>
          <MenuItem to="/resources">resources</MenuItem>
          <MenuItem to="/archives">tech spotlights</MenuItem>
          <MenuItem to="https://forum.theprogrammershangout.com">
            forum
          </MenuItem>
        </SC.Menu>
        <DiscordButton>join us</DiscordButton>
        <HomePartner />
      </SC.InnerWrapper>
    </SC.HomeWrapper>
  )
}
