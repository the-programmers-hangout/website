import { RouteComponentProps } from "@reach/router"
import React, { FC, Fragment, useEffect } from "react"

import { HomeHeader } from "../../components/HomeHeader"
import { SEO } from "../../components/SEO"
import { Sidebar } from "../../components/Sidebar"
import { GlobalStyles } from "../../globalStyles"
import useLocation from "../../hooks/useLocation"
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll"
import { ThemeProvider } from "../../ThemeProvider"
import { ColumnLayout } from "../ColumnLayout"
import * as SC from "./styles"

export const Layout: FC<RouteComponentProps> = ({ path, children }) => {
  const { isHome } = useLocation()
  const { locked, unlock } = useLockBodyScroll()
  const pageName = path?.split("/")[1] === "rules" ? "Rules" : "About"

  useEffect(() => {
    if (locked) {
      unlock()
    }
  }, [locked])

  return (
    <ThemeProvider>
      <SC.LayoutWrapper>
        <GlobalStyles />
        {isHome && (
          <Fragment>
            <SEO
              title="Home"
              description="The Programmer's Hangout (TPH) is a discord community geared towards programming."
            />
            <HomeHeader isHome={isHome} />
          </Fragment>
        )}
        {!isHome && (
          <Fragment>
            <ColumnLayout
              title={pageName}
              sidebar={Sidebar}
              content={children}
            />
          </Fragment>
        )}
      </SC.LayoutWrapper>
    </ThemeProvider>
  )
}
