import React, { AnchorHTMLAttributes, forwardRef, useContext } from "react"
import { LocationContext } from "../LocationProvider"

/*
  Drop-in replacement for gatsby's <Link>. Renders a plain anchor (Astro is an
  MPA, so navigation is a normal full page load) while preserving the
  `to` / `activeClassName` / `partiallyActive` API the styled components rely on.
*/
export interface AppLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  to: string
  activeClassName?: string
  partiallyActive?: boolean
}

function normalize(path: string): string {
  if (path.length > 1 && path.endsWith("/")) {
    return path.slice(0, -1)
  }
  return path
}

export const AppLink = forwardRef<HTMLAnchorElement, AppLinkProps>(
  (
    { to, activeClassName, partiallyActive, className, children, ...rest },
    ref
  ) => {
    const location = useContext(LocationContext)

    const isExternal = /^(https?:)?\/\//.test(to) || to.startsWith("mailto:")

    let isActive = false
    if (!isExternal && activeClassName && location?.location?.pathname) {
      const current = normalize(location.location.pathname)
      const target = normalize(to)
      isActive = partiallyActive
        ? current === target || current.startsWith(target + "/")
        : current === target
    }

    const classes = [className, isActive ? activeClassName : null]
      .filter(Boolean)
      .join(" ")

    return (
      <a
        ref={ref}
        href={to}
        className={classes || undefined}
        {...rest}
      >
        {children}
      </a>
    )
  }
)

AppLink.displayName = "AppLink"

export default AppLink
