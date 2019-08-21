import { Link } from "gatsby"
import React, { PropsWithChildren } from "react"
import * as SC from "./styles"

function MenuItem({ children, to }: PropsWithChildren<{ to: string }>) {
  return (
    <SC.MenuItem to={to} activeClassName="active">
      <SC.MenuItemText>{children}</SC.MenuItemText>
      <SC.MenuItemLine />
    </SC.MenuItem>
  )
}

export function Header() {
  return (
    <SC.HeaderWrapper>
      <SC.StyledWavesTop />
      <SC.StyledWavesBottom />
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
        <Link to="/">
          <SC.Logo />
        </Link>
        <SC.Title>The Programmer's Hangout</SC.Title>
        <SC.Menu>
          <MenuItem to="/about">about</MenuItem>
          <MenuItem to="/rules">rules</MenuItem>
          <MenuItem to="/">faq</MenuItem>
          <MenuItem to="/">hotbot</MenuItem>
          <MenuItem to="/resources">resources</MenuItem>
          <MenuItem to="/">tech spotlight</MenuItem>
        </SC.Menu>
        <SC.DiscordButton>
          <SC.StyledDiscordLogo /> join us
        </SC.DiscordButton>
      </SC.InnerWrapper>
    </SC.HeaderWrapper>
  )
}
