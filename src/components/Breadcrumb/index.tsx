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

const Link: FC<ILinkProps> = ({ item }) => {
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

  return (
    <SC.BreadcrumbWrapper>
      <SC.LinkWrapper>
        <Link
          item={{ path: "/", title: "home", type: "folder", children: [] }}
        />
        <ChevronUp />
      </SC.LinkWrapper>
      <SC.LinkWrapper>
        <Link
          item={{
            path: basePath,
            title: basePath.replace(/\//, ""),
            type: "folder",
            children: [],
          }}
        />
        <ChevronUp />
      </SC.LinkWrapper>
      {breadcrumbItems.map(item => {
        if (item.type === "folder") {
          return (
            <SC.LinkWrapper key={item.path}>
              <Link item={item} />
              <ChevronUp />
            </SC.LinkWrapper>
          )
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
