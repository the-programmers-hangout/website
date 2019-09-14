/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { PropsWithChildren, useState } from "react"

import { GlobalStyles } from "../../globalStyles"
import { SidebarProvider } from "../../SidebarProvider"
import { ThemeProvider } from "../../ThemeProvider"
import { MobileHeader } from "../MobileHeader"
import { ResourcesSidebar } from "../ResourcesSidebar"
import * as SC from "./styles"

export function ResourcesLayout({ children }: PropsWithChildren<{}>) {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false)

  function openMenu() {
    setActiveMobileMenu(true)
  }

  function closeMenu() {
    setActiveMobileMenu(false)
  }

  return (
    <ThemeProvider>
      <SidebarProvider>
        <GlobalStyles />
        <SC.Main>
          <MobileHeader openMenu={openMenu} />
          <ResourcesSidebar className={activeMobileMenu ? "is-open" : ""} />
          <SC.MainContent>
            <SC.Container>{children}</SC.Container>
          </SC.MainContent>
        </SC.Main>
        <SC.Overlay
          className={activeMobileMenu ? "is-open" : ""}
          onClick={closeMenu}
        />
      </SidebarProvider>
    </ThemeProvider>
  )
}
