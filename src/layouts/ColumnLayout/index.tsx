import React, { FC, Fragment } from "react"

import { MobileHeader } from "../../components/MobileHeader"
import { GlobalStyles } from "../../globalStyles"
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll"
import useSidebar from "../../hooks/useSidebar"
import { SidebarProvider } from "../../SidebarProvider"
import { ThemeProvider } from "../../ThemeProvider"
import * as SC from "./styles"

interface IColumnLayoutProps {
  title: string
  sidebar: React.ReactNode
  content: React.ReactNode
}

const InnerColumnLayout: FC<IColumnLayoutProps> = ({
  title,
  sidebar,
  content,
}) => {
  const { openOnMobile, setOpenOnMobile } = useSidebar()
  const { lock, unlock } = useLockBodyScroll()

  function openMenu() {
    setOpenOnMobile(true)
    lock()
  }

  function closeMenu() {
    setOpenOnMobile(false)
    unlock()
  }

  return (
    <Fragment>
      <GlobalStyles />
      <SC.Main>
        <MobileHeader openMenu={openMenu}>{title}</MobileHeader>
        {sidebar({ className: openOnMobile ? "is-open" : "" })}
        <SC.MainContent>{content}</SC.MainContent>
      </SC.Main>
      <SC.Overlay
        className={openOnMobile ? "is-open" : ""}
        onClick={closeMenu}
      />
    </Fragment>
  )
}

export const ColumnLayout: FC<IColumnLayoutProps> = ({
  title,
  sidebar,
  content,
}) => {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <InnerColumnLayout title={title} sidebar={sidebar} content={content} />
      </SidebarProvider>
    </ThemeProvider>
  )
}
