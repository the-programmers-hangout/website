import React from "react"
import logo from "../../images/tph-logo.png"
import * as SC from "./styles"
import ArrowRight from "../../icons/arrow-right.svg"

function MenuItem({ children }: { children: React.ReactNode }) {
  return (
    <SC.MenuItem>
      {children} <ArrowRight />
    </SC.MenuItem>
  )
}

const Sidebar = () => {
  return (
    <SC.SidebarWrapper>
      <SC.Logo src={logo} />

      <SC.Menu>
        <MenuItem>about</MenuItem>
        <MenuItem>rules</MenuItem>
        <MenuItem>faq</MenuItem>
        <MenuItem>hotbot</MenuItem>
        <MenuItem>documentation</MenuItem>
        <MenuItem>tech spotlight</MenuItem>
      </SC.Menu>
    </SC.SidebarWrapper>
  )
}

export default Sidebar
