import React from "react"

import { StackedAvatars } from "../StackedAvatars"
import ChevronUp from "../../icons/chevron-up.svg"
import * as SC from "./styles"

interface ResourceHeaderProps {
  title: any
  authors: any
  createdAt: any
  timeToRead: any
  recommendedReading: any
}

export function ResourceHeader({
  title,
  authors,
  createdAt,
  timeToRead,
  recommendedReading,
}: ResourceHeaderProps) {
  const date = new Date(createdAt)
  const month = date.toLocaleString("default", { month: "long" })
  const day = date.getDate()
  const year = date.getUTCFullYear()
  const dateToHuman = `${month} ${day}, ${year}`

  return (
    <SC.ResourceHeaderWrapper>
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
          {recommendedReading.map(item => {
            return (
              <SC.ReadLink>
                <ChevronUp /> <SC.ReadLinkText>{item}</SC.ReadLinkText>
              </SC.ReadLink>
            )
          })}
        </SC.RecommendedReading>
      )}
    </SC.ResourceHeaderWrapper>
  )
}
