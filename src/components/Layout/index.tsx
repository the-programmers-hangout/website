/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { RouteComponentProps } from '@reach/router'
import React, { FC, Fragment } from "react"

import { GlobalStyles } from "../../globalStyles"
import { ThemeProvider } from "../../ThemeProvider"
import { Container } from "../Container"
import { Footer } from "../Footer"
import { Header } from "../Header"
import { WavesBottom } from "../Waves"
import * as SC from "./styles"

export const Layout: FC<RouteComponentProps> = ({
  children,
  location,
}) => {
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
