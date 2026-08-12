import React, { FC, Fragment } from "react"
import { Dialog } from "@base-ui/react/dialog"

import { MobileHeader } from "../../components/MobileHeader"
import useSidebar from "../../hooks/useSidebar"
import { SidebarProvider } from "../../SidebarProvider"
import { ThemeProvider } from "../../ThemeProvider"

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

  return (
    <Fragment>
      <div className="flex min-h-screen w-full bg-main text-main-fg">
        <MobileHeader openMenu={() => setOpenOnMobile(true)}>{title}</MobileHeader>

        {/* Desktop: the fixed sidebar column (hidden on mobile). */}
        {sidebar({ className: "max-md:hidden" })}

        <main className="ml-80 flex w-[calc(100%-320px)] flex-[1_1_auto] flex-wrap items-start max-md:ml-0 max-md:w-full [&>:first-child]:mt-0 [&>:last-child]:mb-0">
          {content}
        </main>
      </div>

      {/* Mobile: the same sidebar in a Base UI Dialog drawer (focus trap,
          Escape, scroll lock, backdrop dismiss). */}
      <Dialog.Root open={openOnMobile} onOpenChange={setOpenOnMobile}>
        <Dialog.Portal>
          <Dialog.Backdrop className="fixed inset-0 z-[99] bg-black/20 transition-opacity duration-300 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 md:hidden" />
          <Dialog.Popup className="fixed top-0 bottom-0 left-0 z-[100] w-[calc(100vw-100px)] shadow-[0_4px_10px_rgba(0,0,0,0.2)] transition-transform duration-300 outline-none data-[ending-style]:-translate-x-full data-[starting-style]:-translate-x-full md:hidden">
            {sidebar({ className: "in-drawer" })}
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>
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
