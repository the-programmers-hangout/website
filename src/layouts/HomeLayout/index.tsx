import { RouteComponentProps } from "@reach/router"
import React, { FC, useEffect } from "react"

import { Home } from "../../components/Home"
import { SEO } from "../../components/SEO"
import { GlobalStyles } from "../../globalStyles"
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll"
import { ThemeProvider } from "../../ThemeProvider"
import * as SC from "./styles"

export const HomeLayout: FC<RouteComponentProps> = () => {
  const { locked, unlock } = useLockBodyScroll()

  useEffect(() => {
    if (locked) {
      unlock()
    }
  }, [locked, unlock])

  return (
    <ThemeProvider>
      <SC.LayoutWrapper>
        <GlobalStyles />
        <SEO
          title="Home"
          description="The Programmer's Hangout (TPH) is a discord community geared towards programming."
        />
        <Home />
      </SC.LayoutWrapper>
    </ThemeProvider>
  )
}
