/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { RouteComponentProps } from "@reach/router"
import React, { FC, Fragment } from "react"

import { Container } from "../../components/Container"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { WavesBottom } from "../../components/Waves"
import { GlobalStyles } from "../../globalStyles"
import { ThemeProvider } from "../../ThemeProvider"
import * as SC from "./styles"

export const Layout: FC<RouteComponentProps> = ({ children, location }) => {
  const isHome = location ? location.pathname === "/" : false

  return (
    <ThemeProvider>
      <SC.LayoutWrapper>
        <GlobalStyles />
        <Header isHome={isHome} />
        {!isHome && (
          <Fragment>
            <SC.MainContent>
              <Container>{children}</Container>
            </SC.MainContent>
            <Footer />
            <WavesBottom />
            <SC.WavesSpacer />
          </Fragment>
        )}
      </SC.LayoutWrapper>
    </ThemeProvider>
  )
}
