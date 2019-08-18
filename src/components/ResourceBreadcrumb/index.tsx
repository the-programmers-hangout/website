import React from "react"

import ChevronUp from "../../icons/chevron-up.svg"
import { traversePaths } from "../../utils"
import { IFileOrFolder } from "../ResourcesSidebar/index"
import * as SC from "./styles"

interface IResourceBreadcrumbProps {
  relativePath: any
}

function capitalize(str: string): string {
  const split = str.split(" ")
  const reconstruct = []
  for (const substr of split) {
    reconstruct.push(`${substr.charAt(0).toUpperCase()}${substr.substring(1)}`)
  }
  return reconstruct.join(" ")
}

function Link({ item }: { item: IFileOrFolder }) {
  return <SC.StyledLink to={item.path}>{capitalize(item.title)}</SC.StyledLink>
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
          item={{ path: "/", title: "Home", type: "folder", children: [] }}
        />
        <ChevronUp />
      </SC.LinkWrapper>
      <SC.LinkWrapper>
        <Link
          item={{
            path: "/resources",
            title: "Resources",
            type: "folder",
            children: [],
          }}
        />
        <ChevronUp />
      </SC.LinkWrapper>
      {breadcrumbItems.map(item => {
        if (item.type === "folder") {
          return (
            <SC.LinkWrapper>
              <Link item={item} />
              <ChevronUp />
            </SC.LinkWrapper>
          )
        }

        return <SC.CurrentPage>{item.title}</SC.CurrentPage>
      })}
    </SC.ResourceBreadcrumbWrapper>
  )
}
