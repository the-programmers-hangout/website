import React from "react";
import { SidebarTitle } from "./style";

export interface SidebarSectionProps {
  readonly title: string;
}

const SidebarSection = ({ title, children }: React.PropsWithChildren<SidebarSectionProps>) => {
  return (
    <div>
      <SidebarTitle>{title}</SidebarTitle>
      {children}
    </div>
  )
}

export default SidebarSection;