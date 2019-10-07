import React, { FC, Fragment } from "react"

import ChevronUp from "../../icons/chevron-up.svg"
import { ResourceBreadcrumb } from "../ResourceBreadcrumb"
import { StackedAvatars } from "../StackedAvatars"
import * as SC from "./styles"

interface IResourceHeaderProps {
  relativePath: string
  title: string
  authors: Array<{
    avatar: string
    hash: string
    name: string
  }>
  createdAt: string
  timeToRead: number
  recommendedReading: string[]
  externalResources: string[]
}

function ExtraLink({
  item,
  external = false,
}: {
  item: string
  external?: boolean
}) {
  const Inner = () => (
    <Fragment>
      <ChevronUp /> <SC.ExtraLinkText>{item}</SC.ExtraLinkText>
    </Fragment>
  )

  if (external) {
    return (
      <SC.ExtraLinkExternal href={item} target="_blank">
        <Inner />
      </SC.ExtraLinkExternal>
    )
  }

  return (
    <SC.ExtraLinkInternal to={`/resources/${item}.md`}>
      <Inner />
    </SC.ExtraLinkInternal>
  )
}

export const ResourceHeader: FC<IResourceHeaderProps> = ({
  relativePath,
  title,
  authors,
  createdAt,
  timeToRead,
  recommendedReading,
  externalResources,
}) => {
  const date = new Date(createdAt)
  const month = date.toLocaleString("default", { month: "long" })
  const day = date.getDate()
  const year = date.getUTCFullYear()
  const dateToHuman = `${month} ${day}, ${year}`

  return (
    <SC.ResourceHeaderWrapper>
      <ResourceBreadcrumb relativePath={relativePath} />

      <SC.Title>{title}</SC.Title>

      <SC.Top>
        <SC.Meta>
          <StackedAvatars authors={authors} />
          <SC.PopoverToggler>
            {authors.length} contributor{authors.length > 1 && "s"}
            <SC.Popover>
              {authors
                .map(author => `${author.name}#${author.hash}`)
                .join(", ")}
            </SC.Popover>
          </SC.PopoverToggler>
        </SC.Meta>
        <SC.Meta>{dateToHuman}</SC.Meta>
        <SC.Meta>
          {timeToRead} minute{timeToRead !== 1 && "s"} read time
        </SC.Meta>
      </SC.Top>

      {recommendedReading && (
        <SC.RecommendedReading>
          Recommended reading
          {recommendedReading.map(item => {
            return <ExtraLink key={item} item={item} />
          })}
        </SC.RecommendedReading>
      )}

      {externalResources && (
        <SC.ExternalResources>
          External Resources
          {externalResources.map(item => {
            return <ExtraLink key={item} item={item} external />
          })}
        </SC.ExternalResources>
      )}
    </SC.ResourceHeaderWrapper>
  )
}
