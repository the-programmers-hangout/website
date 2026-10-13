import React, { FC, HTMLAttributes } from "react"
import { AppLink } from "../AppLink"
import TPHLogo from "../../images/tph-logo"
import { ThemeToggler } from "../ThemeToggler"
import { cn } from "../../lib/cn"

// 20/26 type, active item bold with opened-up tracking. Shared by every list
// in the card (menu, resources, spotlights).
export const cardItemClass =
  "text-xl leading-[26px] tracking-[-0.75px] text-sidebar-fg no-underline hover:underline [&.active]:font-bold [&.active]:tracking-[0.75px]"

const MENU = [
  { to: "/about", label: "about" },
  { to: "/rules", label: "rules" },
  { to: "/beginners", label: "beginners" },
  { to: "/faq", label: "faq" },
  { to: "/bots", label: "bots" },
  { to: "/resources", label: "resources" },
  { to: "/spotlights", label: "tech spotlights" },
]

// The floating sidebar card (2026 redesign): brand header, the section's own
// list (children), the site menu and the theme switch.
export const Sidebar: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...restProps
}) => {
  return (
    <div
      {...restProps}
      className={cn(
        // Natural height (758px minimum, as in the frame); the layout keeps it
        // sticky without clipping when it is taller than the viewport.
        "card-gradient-border flex min-h-[758px] flex-col items-center gap-[19px] rounded-[10px] p-[5px] pb-6 text-sidebar-fg",
        // Inside the mobile Base UI Drawer the card fills the popup edge to
        // edge and scrolls on its own.
        "[&.in-drawer]:h-full [&.in-drawer]:min-h-0 [&.in-drawer]:overflow-y-auto [&.in-drawer]:rounded-none [&.in-drawer]:border-0",
        className
      )}
    >
      <AppLink
        to="/"
        className="flex h-[74px] w-full shrink-0 overflow-hidden rounded-[5px] bg-[linear-gradient(108.5deg,var(--color-panel-from)_22.785%,var(--color-panel-to)_100%)] no-underline [&:hover>*]:opacity-85"
      >
        <div className="h-full w-[73px] shrink-0 bg-sunken pt-3 pl-[23px]">
          <TPHLogo className="h-[49px]" />
        </div>
        <div className="pt-[14px] pl-3 font-header text-xl leading-[normal] font-bold text-white/90">
          The Programmer&apos;s
          <br />
          Hangout
        </div>
      </AppLink>

      {children}

      {Boolean(children) && (
        <div className="h-0.5 w-[241px] shrink-0 bg-[linear-gradient(90deg,transparent,var(--card-border)_50%,transparent)]" />
      )}

      <nav className="flex w-full flex-col items-start gap-1 px-9">
        {MENU.map((item) => (
          <AppLink
            key={item.to}
            to={item.to}
            activeClassName="active"
            partiallyActive
            className={cardItemClass}
          >
            {item.label}
          </AppLink>
        ))}
      </nav>

      <div className="mt-auto w-full px-9 text-base text-sidebar-fg/90">
        <ThemeToggler />
      </div>
    </div>
  )
}
