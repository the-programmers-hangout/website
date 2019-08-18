import React, { Fragment } from "react"

import { StackedAvatars } from "../StackedAvatars"
import ChevronUp from "../../icons/chevron-up.svg"
import { ResourceBreadcrumb } from "../ResourceBreadcrumb"
import * as SC from "./styles"

interface ResourceHeaderProps {
  relativePath: any
  title: any
  authors: any
  createdAt: any
  timeToRead: any
  recommendedReading: any
  externalResources: any
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

export function ResourceHeader({
  relativePath,
  title,
  authors,
  createdAt,
  timeToRead,
  recommendedReading,
  externalResources,
}: ResourceHeaderProps) {
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
        <StackedAvatars authors={authors} />
        <SC.Meta>
          {authors.length} contributor{authors.lenght > 1 && "s"}
        </SC.Meta>
        <SC.Meta>{dateToHuman}</SC.Meta>
        <SC.Meta>
          {timeToRead} minute{timeToRead !== 1 && "s"} read time
        </SC.Meta>
      </SC.Top>

      {recommendedReading && (
        <SC.RecommendedReading>
          Recommended reading
          {recommendedReading.map((item: any) => {
            return <ExtraLink key={item} item={item} />
          })}
        </SC.RecommendedReading>
      )}

      {externalResources && (
        <SC.ExternalResources>
          External Resources
          {externalResources.map((item: any) => {
            return <ExtraLink key={item} item={item} external />
          })}
        </SC.ExternalResources>
      )}
    </SC.ResourceHeaderWrapper>
  )
}
