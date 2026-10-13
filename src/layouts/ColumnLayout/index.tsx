import React, { FC, Fragment, useEffect, useRef } from "react"
import { Dialog } from "@base-ui/react/dialog"

import { MobileHeader } from "../../components/MobileHeader"
import { WavesBanner } from "../../components/WavesBanner"
import { useScrollAwareSticky } from "../../hooks/useScrollAwareSticky"
import useSidebar from "../../hooks/useSidebar"
import { SidebarProvider } from "../../SidebarProvider"

interface IColumnLayoutProps {
  title: string
  sidebar: (props: { className: string }) => React.ReactNode
  content: React.ReactNode
}

/*
  The 2026 page shell: a floating sticky sidebar card over the waves banner
  from 1024px up; below that a header that opens the same card in a drawer.
*/
const InnerColumnLayout: FC<IColumnLayoutProps> = ({
  title,
  sidebar,
  content,
}) => {
  const { openOnMobile, setOpenOnMobile } = useSidebar()
  const cardRef = useRef<HTMLDivElement>(null)
  useScrollAwareSticky(cardRef, 36)

  // The drawer only exists below lg (CSS hides it above). Close it when the
  // viewport grows past that, e.g. a tablet rotating to landscape; otherwise
  // the modal stays open, invisible, holding the scroll lock.
  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)")
    const onChange = () => {
      if (query.matches) setOpenOnMobile(false)
    }
    query.addEventListener("change", onChange)
    return () => query.removeEventListener("change", onChange)
  }, [setOpenOnMobile])

  return (
    <Fragment>
      {/* First tab stop: jumps past the sidebar. Hidden until keyboard focus. */}
      <a
        href="#main-content"
        className="fixed top-2 left-2 z-[200] -translate-y-[calc(100%+8px)] rounded bg-main px-4 py-2 font-bold text-main-fg no-underline shadow-[0_2px_8px_rgba(0,0,0,0.25)] focus:translate-y-0"
      >
        Skip to content
      </a>
      <div className="relative isolate flex min-h-screen w-full bg-main text-main-fg">
        <WavesBanner className="-z-10" />

        <MobileHeader openMenu={() => setOpenOnMobile(true)}>{title}</MobileHeader>

        <div
          ref={cardRef}
          className="sticky top-9 my-9 ml-9 w-[327px] shrink-0 self-start max-lg:hidden"
        >
          {sidebar({ className: "" })}
        </div>

        <main id="main-content" className="min-w-0 flex-1">
          {content}
        </main>
      </div>

      {/* Below lg: the same sidebar in a Base UI Dialog drawer (focus trap,
          Escape, scroll lock, backdrop dismiss). */}
      <Dialog.Root open={openOnMobile} onOpenChange={setOpenOnMobile}>
        <Dialog.Portal>
          <Dialog.Backdrop className="fixed inset-0 z-[99] bg-black/20 transition-opacity duration-300 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 lg:hidden" />
          <Dialog.Popup className="fixed top-0 bottom-0 left-0 z-[100] w-[min(363px,calc(100vw-48px))] shadow-[0_4px_10px_rgba(0,0,0,0.2)] transition-transform duration-300 outline-none data-[ending-style]:-translate-x-full data-[starting-style]:-translate-x-full lg:hidden">
            {sidebar({ className: "in-drawer" })}
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>
    </Fragment>
  )
}

export const ColumnLayout: FC<IColumnLayoutProps> = (props) => {
  return (
    <SidebarProvider>
      <InnerColumnLayout {...props} />
    </SidebarProvider>
  )
}
