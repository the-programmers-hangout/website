import React, { FC } from "react"

import ChevronUp from "../../icons/chevron-up.svg"
import { IFileOrFolder } from "../../types"
import { humanize, traversePaths } from "../../utils"
import * as SC from "./styles"

interface ILinkProps {
  item: IFileOrFolder
}

interface IBreadcrumbProps {
  relativePath: any
  basePath: string
}

const LinkItem: FC<ILinkProps> = ({ item }) => {
  return <SC.StyledLink to={item.path}>{humanize(item.title)}</SC.StyledLink>
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
    <SC.BreadcrumbWrapper>
      <SC.LinkWrapper>
        <LinkItem
          item={{ path: "/", title: "home", type: "folder", children: [] }}
        />
        <ChevronUp />
      </SC.LinkWrapper>
      <SC.LinkWrapper>
        <LinkItem
          item={{
            path: basePath,
            title: basePath.replace(/\//, ""),
            type: "folder",
            children: [],
          }}
        />
        <ChevronUp />
      </SC.LinkWrapper>

      {breadcrumbItems.map((item) => {
        if (item.type === "folder") {
          foldersDepth++
          if (foldersDepth > 1) {
            return (
              <SC.LinkWrapper key={item.path}>
                {item.title}
                <ChevronUp />
              </SC.LinkWrapper>
            )
          } else {
            return (
              <SC.LinkWrapper key={item.path}>
                <LinkItem item={item} />
                <ChevronUp />
              </SC.LinkWrapper>
            )
          }
        }

        return (
          <SC.CurrentPage key={item.path}>
            {humanize(item.title)}
          </SC.CurrentPage>
        )
      })}
    </SC.BreadcrumbWrapper>
  )
}
