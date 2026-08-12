import { AppLink as Link } from "../AppLink"
import React, { FC, useEffect, useState } from "react"
import { initParticlesEngine, Particles } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import { DiscordButton } from "../DiscordButton"
import { HomePartner } from "../HomePartner"
import { WavesBottom, WavesTop } from "../Waves"
import TPHLogo from "../../images/tph-logo"
import { cn } from "../../lib/cn"

interface IMenuItemProps {
  to: string
}

const MenuItem: FC<IMenuItemProps> = ({ children, to }) => {
  return (
    <Link
      to={to}
      activeClassName="active"
      className={cn("home-menu-item", to === "/" && "disabled")}
    >
      <span className="relative z-[5]">{children}</span>
      <span className="home-menu-line" />
    </Link>
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
    <header className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-main">
      <WavesTop />
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 [&_svg]:static">
        <WavesBottom />
      </div>

      {init && (
        <Particles
          id="tsparticles"
          className="home-particles"
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
      <div className="relative flex w-[800px] max-w-[calc(100%-64px)] flex-col items-start p-8">
        <div className="mb-[22px] flex max-w-full flex-col items-start">
          <Link to="/">
            <TPHLogo className="relative z-[3] mr-[15px] w-[98px]" />
          </Link>
          <h1 className="m-0 my-8 max-w-full font-header text-[88px] leading-none font-bold uppercase text-main-fg [text-shadow:0_2px_5px_rgba(0,0,0,0.3)] max-[991px]:text-[58px] max-md:text-[32px]">
            The Programmer&apos;s Hangout
          </h1>
        </div>
        <nav className="mb-8 flex flex-wrap justify-start">
          <MenuItem to="/about">about</MenuItem>
          <MenuItem to="/rules">rules</MenuItem>
          <MenuItem to="/beginners">beginners</MenuItem>
          <MenuItem to="/faq">faq</MenuItem>
          <MenuItem to="/bots">bots</MenuItem>
          <MenuItem to="/resources">resources</MenuItem>
          <MenuItem to="/spotlights">tech spotlights</MenuItem>
        </nav>
        <DiscordButton>join us</DiscordButton>
        <HomePartner />
      </div>
    </header>
  )
}
