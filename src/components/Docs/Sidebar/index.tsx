import React from "react";
import { SidebarScroller } from "./style";
import Tree from "react-treeview";

const makeTree = () => {

}

export interface SidebarProps {
  readonly width: string | number;
}

const Sidebar = ({ width }: SidebarProps) => {

  return (
    <div style={{ width }}>
      <Tree
        nodeLabel={<div>"Javascript"</div>}
      >
        <Tree
          nodeLabel={<div>"Javascript"</div>}
        >
          Test
    </Tree>
      </Tree>
    </div>
  )
}

export default Sidebar;