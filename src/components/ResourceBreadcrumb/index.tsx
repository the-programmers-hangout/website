import pipe from "ramda/es/pipe"
import React from "react"

import ChevronUp from "../../icons/chevron-up.svg"
import { traversePaths } from "../../utils"
import { IFileOrFolder } from "../ResourcesSidebar/index"
import * as SC from "./styles"

interface IResourceBreadcrumbProps {
  relativePath: any
}

function capitalize(str: string): string {
  return str
    .split(" ")
    .map(word => `${word.charAt(0).toUpperCase()}${word.substring(1)}`)
    .join(" ")
}

function dashToSpace(str: string): string {
  return str.replace("-", " ")
}

function humanize(str: string): string {
  return pipe(
    dashToSpace,
    capitalize
  )(str)
}

function Link({ item }: { item: IFileOrFolder }) {
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
            <SC.LinkWrapper key={item.path}>
              <Link item={item} />
              <ChevronUp />
            </SC.LinkWrapper>
          )
        }

        return <SC.CurrentPage key={item.path}>{item.title}</SC.CurrentPage>
      })}
    </SC.ResourceBreadcrumbWrapper>
  )
}
