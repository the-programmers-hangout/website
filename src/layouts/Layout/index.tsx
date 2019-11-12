import { RouteComponentProps } from "@reach/router"
import React, { FC, Fragment, useEffect } from "react"

import { Container } from "../../components/Container"
import { HomeFooter } from "../../components/HomeFooter"
import { HomeHeader } from "../../components/HomeHeader"
import { WavesBottom } from "../../components/Waves"
import { GlobalStyles } from "../../globalStyles"
import useLocation from "../../hooks/useLocation"
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll"
import { ThemeProvider } from "../../ThemeProvider"
import * as SC from "./styles"

export const Layout: FC<RouteComponentProps> = ({ children }) => {
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
        <HomeHeader isHome={isHome} />
        {!isHome && (
          <Fragment>
            <SC.MainContent>
              <Container>{children}</Container>
            </SC.MainContent>
            <HomeFooter />
            <WavesBottom />
            <SC.WavesSpacer />
          </Fragment>
        )}
      </SC.LayoutWrapper>
    </ThemeProvider>
  )
}
