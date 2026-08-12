import React, { FC } from "react"

import ChevronUp from "../../icons/chevron-up.svg?react"
import { AppLink } from "../AppLink"
import { IFileOrFolder } from "../../types"
import { humanize, traversePaths } from "../../utils"

interface ILinkProps {
  item: IFileOrFolder
}

interface IBreadcrumbProps {
  relativePath: any
  basePath: string
}

// flex + fixed height + rotated chevron whose path fill follows the theme.
const linkWrapperClass =
  "flex items-center h-[30px] whitespace-nowrap [&_svg]:m-1.5 [&_svg]:w-3 [&_svg]:rotate-90 [&_svg_path]:fill-[#172129] dark:[&_svg_path]:fill-[#f9f9f9]"

const LinkItem: FC<ILinkProps> = ({ item }) => {
  return (
    <AppLink to={item.path} className="link-breadcrumb">
      {humanize(item.title)}
    </AppLink>
  )
}

function flatten([
  currNode,
  ...previousNodes
]: IFileOrFolder[]): IFileOrFolder[] {
  if (currNode.type === "file") {
    return [...previousNodes, currNode]
  }

  return flatten([...currNode.children, ...previousNodes, currNode])
}

export function Breadcrumb({ relativePath, basePath }: IBreadcrumbProps) {
  const paths = relativePath.split("/")
  const breadcrumbItems = flatten([traversePaths(paths, basePath)])
  let foldersDepth = 0
  return (
    <div className="flex flex-wrap items-start max-md:mb-4">
      <div className={linkWrapperClass}>
        <LinkItem
          item={{ path: "/", title: "home", type: "folder", children: [] }}
        />
        <ChevronUp />
      </div>
      <div className={linkWrapperClass}>
        <LinkItem
          item={{
            path: basePath,
            title: basePath.replace(/\//, ""),
            type: "folder",
            children: [],
          }}
        />
        <ChevronUp />
      </div>

      {breadcrumbItems.map((item) => {
        if (item.type === "folder") {
          foldersDepth++
          if (foldersDepth > 1) {
            return (
              <div className={linkWrapperClass} key={item.path}>
                {item.title}
                <ChevronUp />
              </div>
            )
          } else {
            return (
              <div className={linkWrapperClass} key={item.path}>
                <LinkItem item={item} />
                <ChevronUp />
              </div>
            )
          }
        }

        return (
          <div
            className="flex h-[30px] items-center whitespace-nowrap"
            key={item.path}
          >
            {humanize(item.title)}
          </div>
        )
      })}
    </div>
  )
}
