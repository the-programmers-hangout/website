import cx from "classnames"
import sort from "ramda/es/sort"
import React, { FC, HTMLAttributes, memo, useMemo } from "react"
import "react-perfect-scrollbar/dist/css/styles.css"
import { useResourceData } from "../../context/ResourceDataContext"
import { IFileOrFolder, IFolder } from "../../types"
import { getPath, humanize } from "../../utils"
import { Link } from "../Link"
import useBuildTree from "./useBuildTree"

const pageLinkClass = "inline-block text-lg font-normal [&+&]:mt-2"

function plantTree(item: IFileOrFolder, single?: boolean) {
  if (item.type === "file") {
    // remove the first elements, treat as hardcoded
    const [, , , ...cleanedUpPath] = item.path.split("/")
    const path = getPath(item)

    return (
      <Link key={item.title} to={path} className={pageLinkClass}>
        {cleanedUpPath.map((node) => humanize(node)).join(" / ")}
      </Link>
    )
  }

  return <Language key={item.title} item={item} single={Boolean(single)} />
}

const Language = memo(
  ({ item, single }: { item: IFolder; single: boolean }) => {
    const children = useMemo(() => {
      if (single) {
        return item.children.filter((child) => {
          const [, , , title] = child.title.split("/")
          return title !== "intro"
        })
      }

      return item.children
    }, [item.children, single])

    return (
      <div className="flex w-full flex-col text-base [&+&]:mt-8">
        {!single && (
          <div className="box-border flex w-full items-center py-1 pr-[15px] font-bold text-sidebar-fg/50">
            {humanize(item.title)}
          </div>
        )}
        <div
          className={cx(
            "flex flex-col items-start overflow-hidden pb-2 pl-4",
            { "pl-0": single }
          )}
        >
          {children.map((node) => plantTree(node))}
        </div>
      </div>
    )
  }
)

Language.displayName = "Language"

function sortTree(tree: IFileOrFolder[]) {
  return sort((a, b) => a.title.localeCompare(b.title), tree)
}

interface IResourcesList extends HTMLAttributes<HTMLDivElement> {
  relativeDirectory?: string
}

export const ResourcesList: FC<IResourcesList> = (props) => {
  const resources = { allFile: useResourceData().resourcesAll }

  const filteredResources = {
    ...resources,
    allFile: {
      ...resources.allFile,
      edges: resources.allFile.edges.filter(({ node }) => {
        if (!props.relativeDirectory) {
          return true
        }

        const [language] = node.relativeDirectory.split("/")
        return props.relativeDirectory === language
      }),
    },
  }

  const tree = useBuildTree(filteredResources)
  const sortedTree = sortTree(tree)
  const isSingle = Boolean(props.relativeDirectory)

  return (
    <div className="box-border text-main-fg">
      {sortedTree.map((node) => plantTree(node, isSingle))}
    </div>
  )
}
