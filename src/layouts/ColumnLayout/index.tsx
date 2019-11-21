import React, { FC, useMemo, useState } from "react"

import { HomeMobileHeader } from "../../components/HomeMobileHeader"
import { GlobalStyles } from "../../globalStyles"
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll"
import { SidebarProvider } from "../../SidebarProvider"
import { ThemeProvider } from "../../ThemeProvider"
import * as SC from "./styles"

interface IColumnLayoutProps {
  title: string
  sidebar: React.ReactNode
  content: React.ReactNode
}

export const ColumnLayout: FC<IColumnLayoutProps> = ({
  title,
  sidebar,
  content,
}) => {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false)
  const { lock, unlock } = useLockBodyScroll()

  function openMenu() {
    setActiveMobileMenu(true)
    lock()
  }

  function closeMenu() {
    setActiveMobileMenu(false)
    unlock()
  }

  return (
    <ThemeProvider>
      <SidebarProvider>
        <GlobalStyles />
        <SC.Main>
          <HomeMobileHeader openMenu={openMenu}>{title}</HomeMobileHeader>
          {sidebar({ className: activeMobileMenu ? "is-open" : "" })}
          <SC.MainContent>
            <SC.Container>{content}</SC.Container>
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
