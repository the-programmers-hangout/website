import React, { FC, Fragment, useEffect, useRef } from "react"
import { Dialog } from "@base-ui/react/dialog"

import { MobileHeader } from "../../components/MobileHeader"
import { WavesBanner } from "../../components/WavesBanner"
import useSidebar from "../../hooks/useSidebar"
import { cn } from "../../lib/cn"
import { SidebarProvider } from "../../SidebarProvider"
import { ThemeProvider } from "../../ThemeProvider"

interface IColumnLayoutProps {
  title: string
  sidebar: (props: { className: string }) => React.ReactNode
  content: React.ReactNode
  // "column": fixed full-height sidebar. "card": floating sticky sidebar card
  // over a waves banner (2026 resources redesign).
  variant?: "column" | "card"
}

const CARD_GUTTER = 36

/*
  Sticky offset for a sidebar that may be taller than the viewport: it sticks
  36px from the top when it fits, otherwise it scrolls with the page until its
  bottom is 36px from the viewport bottom, so no part of it is ever clipped.
*/
function useBottomAwareSticky(ref: React.RefObject<HTMLElement>) {
  useEffect(() => {
    const el = ref.current
    if (!el) return

    const update = () => {
      const top = Math.min(
        CARD_GUTTER,
        window.innerHeight - el.offsetHeight - CARD_GUTTER
      )
      el.style.top = `${top}px`
    }

    update()
    const observer = new ResizeObserver(update)
    observer.observe(el)
    window.addEventListener("resize", update)
    return () => {
      observer.disconnect()
      window.removeEventListener("resize", update)
    }
  }, [ref])
}

const InnerColumnLayout: FC<IColumnLayoutProps> = ({
  title,
  sidebar,
  content,
  variant = "column",
}) => {
  const { openOnMobile, setOpenOnMobile } = useSidebar()
  const isCard = variant === "card"
  const cardRef = useRef<HTMLDivElement>(null)
  useBottomAwareSticky(cardRef)

  return (
    <Fragment>
      <div
        className={cn(
          "flex min-h-screen w-full bg-main text-main-fg",
          isCard && "relative isolate"
        )}
      >
        {isCard && <WavesBanner className="-z-10" />}

        {/* The card layout needs more room, so it switches to the header +
            drawer below lg instead of md. */}
        <MobileHeader
          openMenu={() => setOpenOnMobile(true)}
          className={isCard ? "max-lg:flex" : "max-md:flex"}
        >
          {title}
        </MobileHeader>

        {/* Desktop: the sidebar (hidden on mobile). */}
        {isCard ? (
          <div
            ref={cardRef}
            className="sticky top-9 my-9 ml-9 w-[327px] shrink-0 self-start max-lg:hidden"
          >
            {sidebar({ className: "" })}
          </div>
        ) : (
          sidebar({ className: "max-md:hidden" })
        )}

        <main
          className={cn(
            isCard
              ? "min-w-0 flex-1"
              : "ml-80 flex w-[calc(100%-320px)] flex-[1_1_auto] flex-wrap items-start max-md:ml-0 max-md:w-full [&>:first-child]:mt-0 [&>:last-child]:mb-0"
          )}
        >
          {content}
        </main>
      </div>

      {/* Mobile: the same sidebar in a Base UI Dialog drawer (focus trap,
          Escape, scroll lock, backdrop dismiss). */}
      <Dialog.Root open={openOnMobile} onOpenChange={setOpenOnMobile}>
        <Dialog.Portal>
          <Dialog.Backdrop
            className={cn(
              "fixed inset-0 z-[99] bg-black/20 transition-opacity duration-300 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0",
              isCard ? "lg:hidden" : "md:hidden"
            )}
          />
          <Dialog.Popup
            className={cn(
              "fixed top-0 bottom-0 left-0 z-[100] shadow-[0_4px_10px_rgba(0,0,0,0.2)] transition-transform duration-300 outline-none data-[ending-style]:-translate-x-full data-[starting-style]:-translate-x-full",
              isCard
                ? "w-[min(363px,calc(100vw-48px))] lg:hidden"
                : "w-[calc(100vw-100px)] md:hidden"
            )}
          >
            {sidebar({ className: "in-drawer" })}
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>
    </Fragment>
  )
}

export const ColumnLayout: FC<IColumnLayoutProps> = (props) => {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <InnerColumnLayout {...props} />
      </SidebarProvider>
    </ThemeProvider>
  )
}
