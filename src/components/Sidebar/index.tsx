import React, { FC, HTMLAttributes } from "react"
import Scrollbar from "react-perfect-scrollbar"
import "react-perfect-scrollbar/dist/css/styles.css"
import { AppLink } from "../AppLink"
import TPHLogo from "../../images/tph-logo"
import { ThemeToggler } from "../ThemeToggler"
import { cn } from "../../lib/cn"

const menuItemClass =
  "py-1 text-xl text-sidebar-fg no-underline hover:underline active:underline [&.active]:font-bold"

// Card variant (2026 redesign): 20/26 type, active item bold with opened-up
// tracking. Shared by every list in the card (menu, resources, spotlights).
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

const MenuItem: FC<{ to: string }> = ({ children, to }) => {
  return (
    <AppLink to={to} activeClassName="active" className={menuItemClass}>
      {children}
    </AppLink>
  )
}

interface SidebarProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "column" | "card"
}

const CardSidebar: FC<HTMLAttributes<HTMLDivElement>> = ({
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

export const Sidebar: FC<SidebarProps> = (props) => {
  const { children, className, variant = "column", ...restProps } = props

  if (variant === "card") {
    return (
      <CardSidebar className={className} {...restProps}>
        {children}
      </CardSidebar>
    )
  }

  return (
    <div
      {...restProps}
      className={cn(
        "fixed top-0 bottom-0 box-border w-80 flex-[0_0_320px] bg-sidebar text-sidebar-fg",
        // Inside the mobile Base UI Drawer the panel fills the popup instead of
        // being a fixed column.
        "[&.in-drawer]:static [&.in-drawer]:h-full [&.in-drawer]:w-full [&.in-drawer]:flex-none",
        className
      )}
    >
      <Scrollbar>
        <AppLink
          to="/"
          className="flex h-[74px] items-stretch no-underline max-md:h-[67px] [&:hover>*]:opacity-85"
        >
          <div className="flex h-full flex-[0_0_74px] items-center justify-center bg-[#0b0f13]">
            <TPHLogo className="h-[50px]" />
          </div>
          <div className="flex flex-[1_0_auto] items-center bg-[#263440] pl-5 font-header text-xl leading-6 font-bold text-white/90">
            The Programmer&apos;s
            <br />
            Hangout
          </div>
        </AppLink>

        <div className="pt-5 pr-0 pb-[30px] pl-5">
          {children}

          <nav
            className={cn(
              "mt-5 mb-10 flex flex-col pt-5",
              Boolean(children) &&
                "border-t border-dashed border-sidebar-fg/20"
            )}
          >
            {MENU.map((item) => (
              <MenuItem key={item.to} to={item.to}>
                {item.label}
              </MenuItem>
            ))}
          </nav>

          <ThemeToggler />
        </div>
      </Scrollbar>
    </div>
  )
}
