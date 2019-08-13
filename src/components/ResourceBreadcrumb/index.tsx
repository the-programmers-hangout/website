import React from "react"

import { IFileOrFolder } from "../ResourcesSidebar/index"
import ChevronUp from "../../icons/chevron-up.svg"
import { traversePaths } from "../../utils"
import * as SC from "./styles"

interface ResourceBreadcrumbProps {
  relativePath: any
}

function Link({ item }: { item: IFileOrFolder }) {
  return <SC.StyledLink to={item.path}>{item.title}</SC.StyledLink>
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

export function ResourceBreadcrumb({ relativePath }: ResourceBreadcrumbProps) {
  const paths = relativePath.split("/")
  const breadcrumbItems = flatten([traversePaths(paths)])

  return (
    <SC.ResourceBreadcrumbWrapper>
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
