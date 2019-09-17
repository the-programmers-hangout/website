import { Link } from "gatsby"
import React, { FC, useLayoutEffect, useState } from "react"
import { DiscordButton } from "../DiscordButton"
import { WavesBottom, WavesTop } from "../Waves"
import * as SC from "./styles"

interface IHeaderProps {
  isHome: boolean
}

interface IMenuItemProps {
  to: string
}

const MenuItem: FC<IMenuItemProps> = ({ children, to }) => {
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

export const Header: FC<IHeaderProps> = ({ isHome }) => {
  // Hack to force Particle.js to rerender
  const [noop, setNoop] = useState(0)
  useLayoutEffect(() => {
    setNoop(prevState => prevState + 1)
  }, [isHome])

  return (
    <SC.HeaderWrapper className={isHome ? "is-home" : ""}>
      <WavesTop />
      <SC.FadedBottomWave>
        <WavesBottom />
      </SC.FadedBottomWave>

      <SC.StyledParticles
        key={noop}
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
          <MenuItem to="/">faq</MenuItem>
          <MenuItem to="/">hotbot</MenuItem>
          <MenuItem to="/resources">resources</MenuItem>
          <MenuItem to="/">tech spotlight</MenuItem>
        </SC.Menu>
        <DiscordButton>join us</DiscordButton>
      </SC.InnerWrapper>
    </SC.HeaderWrapper>
  )
}
