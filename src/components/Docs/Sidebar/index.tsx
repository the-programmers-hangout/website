import React from "react";
import { SidebarScroller } from "./style";
import Tree from "react-treeview";

const makeTree = () => {

}

const Sidebar = () => {

  return (
    <Tree
      nodeLabel={<div>"Javascript"</div>}
    >
      <Tree
        nodeLabel={<div>"Javascript"</div>}
      >
        Test
    </Tree>
    </Tree>
  )
}

export default Sidebar;