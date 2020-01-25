import { RouteComponentProps } from "@reach/router"
import React, { FC, useEffect } from "react"

import { HomeHeader } from "../../components/HomeHeader"
import { SEO } from "../../components/SEO"
import { GlobalStyles } from "../../globalStyles"
import useLocation from "../../hooks/useLocation"
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll"
import { ThemeProvider } from "../../ThemeProvider"
import * as SC from "./styles"

export const HomeLayout: FC<RouteComponentProps> = () => {
  const { isHome } = useLocation()
  const { locked, unlock } = useLockBodyScroll()

  useEffect(() => {
    if (locked) {
      unlock()
    }
  }, [locked])

  return (
    <ThemeProvider>
      <SC.LayoutWrapper>
        <GlobalStyles />
        <SEO
          title="Home"
          description="The Programmer's Hangout (TPH) is a discord community geared towards programming."
        />
        <HomeHeader isHome={isHome} />
      </SC.LayoutWrapper>
    </ThemeProvider>
  )
}
