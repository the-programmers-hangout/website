import { Link } from "gatsby"
import React, { FC, HTMLAttributes, PropsWithChildren } from "react"
import Scrollbar from "react-perfect-scrollbar"
import "react-perfect-scrollbar/dist/css/styles.css"
import Banner from "../../images/tph-banner.svg"
import { ThemeToggler } from "../ThemeToggler"
import * as SC from "./styles"

interface IMenuItemProps {
  to: string
}

const MenuItem: FC<IMenuItemProps> = ({ children, to }) => {
  return (
    <SC.MenuItem to={to} activeClassName="active">
      {children}
    </SC.MenuItem>
  )
}

export const Sidebar: FC<
  PropsWithChildren<HTMLAttributes<HTMLDivElement>>
> = props => {
  const { children, ...restProps } = props

  return (
    <SC.SidebarWrapper {...restProps}>
      <Scrollbar>
        <Link to="/">
          <Banner />
        </Link>
        <SC.Inner>
          {children}

          <SC.Menu>
            <MenuItem to="/about">about</MenuItem>
            <MenuItem to="/rules">rules</MenuItem>
            <MenuItem to="/faq">faq</MenuItem>
            <MenuItem to="/">hotbot</MenuItem>
            <MenuItem to="/resources">resources</MenuItem>
            <MenuItem to="/archives">tech spotlights</MenuItem>
          </SC.Menu>

          <ThemeToggler />
        </SC.Inner>
      </Scrollbar>
    </SC.SidebarWrapper>
  )
}
