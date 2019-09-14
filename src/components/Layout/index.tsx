/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Fragment, PropsWithChildren } from "react"

import { GlobalStyles } from "../../globalStyles"
import { ThemeProvider } from "../../ThemeProvider"
import { Container } from "../Container"
import { Footer } from "../Footer"
import { Header } from "../Header"
import { WavesBottom } from "../Waves"
import * as SC from "./styles"

export function Layout({
  children,
  location,
}: PropsWithChildren<{ location: Location }>) {
  const isHome = location.pathname === "/"

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
