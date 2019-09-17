import React, { FC } from "react"

import ChevronUp from "../../icons/chevron-up.svg"
import { IFileOrFolder } from "../../types"
import { humanize, traversePaths } from "../../utils"
import * as SC from "./styles"

interface ILinkProps {
  item: IFileOrFolder
}

interface IResourceBreadcrumbProps {
  relativePath: any
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

export function ResourceBreadcrumb({ relativePath }: IResourceBreadcrumbProps) {
  const paths = relativePath.split("/")
  const breadcrumbItems = flatten([traversePaths(paths)])

  return (
    <SC.ResourceBreadcrumbWrapper>
      <SC.LinkWrapper>
        <Link
          item={{ path: "/", title: "home", type: "folder", children: [] }}
        />
        <ChevronUp />
      </SC.LinkWrapper>
      <SC.LinkWrapper>
        <Link
          item={{
            path: "/resources",
            title: "resources",
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
    </SC.ResourceBreadcrumbWrapper>
  )
}
