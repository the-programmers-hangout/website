import sort from "ramda/es/sort"
import React, { FC, HTMLAttributes } from "react"
import useBuildTree from "../../hooks/useBuildTree"
import useSidebar from "../../hooks/useSidebar"
import { useResourceData } from "../../context/ResourceDataContext"
import { humanize } from "../../utils"
import { AppLink } from "../AppLink"
import { cardItemClass, Sidebar } from "../Sidebar"

export const SpotlightsSidebar: FC<HTMLAttributes<HTMLDivElement>> = (
  props
) => {
  const { spotlights } = useResourceData()
  const { setOpenOnMobile } = useSidebar()
  const tree = useBuildTree(spotlights, "/spotlights")
  const sortedTree = sort((a, b) => a.title.localeCompare(b.title), tree)

  return (
    <Sidebar {...props}>
      <div className="flex w-full flex-col items-start gap-1 px-9">
        <div className="text-xl leading-[26px] font-bold tracking-[0.75px] text-sidebar-fg">
          spotlights
        </div>
        {sortedTree.map((item) => (
          <AppLink
            key={item.path}
            to={item.path}
            activeClassName="active"
            className={cardItemClass}
            // Closing the drawer releases Base UI's scroll lock.
            onClick={() => setOpenOnMobile(false)}
          >
            {humanize(item.title)}
          </AppLink>
        ))}
      </div>
    </Sidebar>
  )
}
