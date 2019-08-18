import React from "react"

import { IFileOrFolder } from "../ResourcesSidebar/index"
import ChevronUp from "../../icons/chevron-up.svg"
import { traversePaths } from "../../utils"
import * as SC from "./styles"

interface ResourceBreadcrumbProps {
  relativePath: any
}

const capitalize = (string: string, ignoreSpaces = false): string => {
  const removeIndex = 0;
  const continueIndex = 1;
  if (ignoreSpaces) {
    return `${string.charAt(removeIndex).toUpperCase()}${string.substring(continueIndex)}`;
  } else {
    const split = string.split(" ");
    const reconstruct = [];
    for (const substr of split) {
      reconstruct.push(`${substr.charAt(removeIndex).toUpperCase()}${substr.substring(continueIndex)}`);
    }
    return reconstruct.join(" ");
  }
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

export function ResourceBreadcrumb({ relativePath }: ResourceBreadcrumbProps) {
  const paths = relativePath.split("/")
  const breadcrumbItems = flatten([traversePaths(paths)])

  return (
    <SC.ResourceBreadcrumbWrapper>
      <SC.LinkWrapper>
        <Link item={{ path: '/', title: 'Home', type: "folder", children: [] }} />
        <ChevronUp />
      </SC.LinkWrapper>
      <SC.LinkWrapper>
        <Link item={{ path: '/resources', title: 'Resources', type: "folder", children: [] }} />
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
