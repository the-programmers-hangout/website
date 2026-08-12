import React, { FC, Fragment } from "react"

import { MobileHeader } from "../../components/MobileHeader"
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll"
import useSidebar from "../../hooks/useSidebar"
import { SidebarProvider } from "../../SidebarProvider"
import { ThemeProvider } from "../../ThemeProvider"
import { cn } from "../../lib/cn"

interface IColumnLayoutProps {
  title: string
  sidebar: (props: { className: string }) => React.ReactNode
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
      <div className="flex min-h-screen w-full bg-main text-main-fg">
        <MobileHeader openMenu={openMenu}>{title}</MobileHeader>
        {sidebar({ className: openOnMobile ? "is-open" : "" })}
        <main className="ml-80 flex w-[calc(100%-320px)] flex-[1_1_auto] flex-wrap items-start max-md:ml-0 max-md:w-full [&>:first-child]:mt-0 [&>:last-child]:mb-0">
          {content}
        </main>
      </div>
      <div
        onClick={closeMenu}
        className={cn(
          "pointer-events-none fixed inset-0 z-[99] bg-black/0 transition-colors duration-300 md:hidden",
          openOnMobile && "pointer-events-auto bg-black/20"
        )}
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
