import { Link } from "gatsby"
import React, { FC, useEffect, useState } from "react"
import { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import { DiscordButton } from "../DiscordButton"
import { HomePartner } from "../HomePartner"
import { WavesBottom, WavesTop } from "../Waves"
import * as SC from "./styles"

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

export const Home: FC = () => {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  return (
    <SC.HomeWrapper>
      <WavesTop />
      <SC.FadedBottomWave>
        <WavesBottom />
      </SC.FadedBottomWave>

      {init && (
        <SC.StyledParticles
          id="tsparticles"
          options={{
            particles: {
              /* eslint-disable-next-line id-blacklist */
              number: {
                value: 20,
                density: { enable: true, width: 1920, height: 1080 },
              },
              color: { value: "#ffffff" },
              opacity: {
                value: 0.5,
              },
              size: {
                value: { min: 10, max: 36 },
              },
              links: {
                enable: false,
              },
              move: {
                enable: true,
                speed: 1.5,
                direction: "top",
                straight: false,
                outModes: { default: "out" },
              },
            },
            detectRetina: true,
          }}
        />
      )}
      <SC.InnerWrapper>
        <SC.TitleWrapper>
          <Link to="/">
            <SC.Logo />
          </Link>
          <SC.Title>The Programmer&apos;s Hangout</SC.Title>
        </SC.TitleWrapper>
        <SC.Menu>
          <MenuItem to="/about">about</MenuItem>
          <MenuItem to="/rules">rules</MenuItem>
          <MenuItem to="/beginners">beginners</MenuItem>
          <MenuItem to="/faq">faq</MenuItem>
          <MenuItem to="/bots">bots</MenuItem>
          <MenuItem to="/resources">resources</MenuItem>
          <MenuItem to="/spotlights">tech spotlights</MenuItem>
        </SC.Menu>
        <DiscordButton>join us</DiscordButton>
        <HomePartner />
      </SC.InnerWrapper>
    </SC.HomeWrapper>
  )
}
