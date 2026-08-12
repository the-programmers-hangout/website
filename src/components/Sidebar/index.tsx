import React, { FC, HTMLAttributes } from "react"
import Scrollbar from "react-perfect-scrollbar"
import "react-perfect-scrollbar/dist/css/styles.css"
import { AppLink } from "../AppLink"
import TPHLogo from "../../images/tph-logo"
import { ThemeToggler } from "../ThemeToggler"
import { cn } from "../../lib/cn"

const menuItemClass =
  "py-1 text-xl text-sidebar-fg no-underline hover:underline active:underline [&.active]:font-bold"

const MenuItem: FC<{ to: string }> = ({ children, to }) => {
  return (
    <AppLink to={to} activeClassName="active" className={menuItemClass}>
      {children}
    </AppLink>
  )
}

export const Sidebar: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const { children, className, ...restProps } = props

  return (
    <div
      {...restProps}
      className={cn(
        "fixed top-0 bottom-0 box-border w-80 flex-[0_0_320px] bg-sidebar text-sidebar-fg",
        "max-md:z-[100] max-md:w-[calc(100vw-100px)] max-md:-translate-x-[100vw] max-md:transition-transform max-md:duration-200 max-md:ease-in-out",
        "[&.is-open]:translate-x-0 [&.is-open]:shadow-[0_4px_10px_rgba(0,0,0,0.2)] [&.is-open]:transition-transform [&.is-open]:duration-300 [&.is-open]:ease-in-out",
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
            <MenuItem to="/about">about</MenuItem>
            <MenuItem to="/rules">rules</MenuItem>
            <MenuItem to="/beginners">beginners</MenuItem>
            <MenuItem to="/faq">faq</MenuItem>
            <MenuItem to="/bots">bots</MenuItem>
            <MenuItem to="/resources">resources</MenuItem>
            <MenuItem to="/spotlights">tech spotlights</MenuItem>
          </nav>

          <ThemeToggler />
        </div>
      </Scrollbar>
    </div>
  )
}
