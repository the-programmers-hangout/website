import React, { FC, HTMLAttributes, PropsWithChildren } from "react"
import Scrollbar from "react-perfect-scrollbar"
import "react-perfect-scrollbar/dist/css/styles.css"
import cx from "classnames"
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

export const Sidebar: FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>> = (
  props
) => {
  const { children, ...restProps } = props

  return (
    <SC.SidebarWrapper {...restProps}>
      <Scrollbar>
        <SC.Header to="/">
          <SC.Logo>
            <SC.StyledLogo />
          </SC.Logo>
          <SC.Title>
            The Programmer&apos;s
            <br />
            Hangout
          </SC.Title>
        </SC.Header>

        <SC.Inner>
          {children}

          <SC.Menu className={cx({ "has-border": Boolean(children) })}>
            <MenuItem to="/about">about</MenuItem>
            <MenuItem to="/rules">rules</MenuItem>
            <MenuItem to="/faq">faq</MenuItem>
            <MenuItem to="/resources">resources</MenuItem>
            <MenuItem to="/archives">tech spotlights</MenuItem>
          </SC.Menu>

          <ThemeToggler />
        </SC.Inner>
      </Scrollbar>
    </SC.SidebarWrapper>
  )
}
