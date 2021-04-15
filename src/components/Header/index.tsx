import React from "react"
import cx from "classnames"

import { HeaderBarebone } from "../HeaderBarebone"
import { Breadcrumb } from "../Breadcrumb"
import { StackedAvatars } from "../StackedAvatars"
import * as SC from "./styles"

interface IHeaderProps {
  relativePath: string
  basePath: string
  title: string
  authors?: {
    avatar: string
    hash: string
    name: string
  }[]
  createdAt: string
  timeToRead: number
  shifted: boolean
}

export const Header: React.FC<IHeaderProps> = ({
  basePath,
  relativePath,
  title,
  authors,
  createdAt,
  timeToRead,
  shifted,
}) => {
  const date = new Date(createdAt)
  const month = date.toLocaleString("default", { month: "long" })
  const day = date.getDate()
  const year = date.getUTCFullYear()
  const dateToHuman = `${month} ${day}, ${year}`

  return (
    <HeaderBarebone
      above={<Breadcrumb relativePath={relativePath} basePath={basePath} />}
      title={title}
      className={cx({ shifted })}
      content={
        <SC.Top>
          {authors && (
            <SC.Meta>
              <StackedAvatars authors={authors} />
              {authors.length > 1 ? (
                <SC.PopoverToggler>
                  {authors.length} contributor{authors.length > 1 && "s"}
                  <SC.Popover>
                    {authors
                      .map((author) => `${author.name}#${author.hash}`)
                      .join(", ")}
                  </SC.Popover>
                </SC.PopoverToggler>
              ) : (
                `${authors[0].name}#${authors[0].hash}`
              )}
            </SC.Meta>
          )}
          {dateToHuman && <SC.Meta>{dateToHuman}</SC.Meta>}
          <SC.Meta>
            {timeToRead} minute{timeToRead !== 1 && "s"} read time
          </SC.Meta>
        </SC.Top>
      }
    />
  )
}
