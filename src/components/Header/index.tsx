import React from "react"
import cx from "classnames"

import { HeaderBarebone } from "../HeaderBarebone"
import { Breadcrumb } from "../Breadcrumb"
import { StackedAvatars } from "../StackedAvatars"

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
        <div className="flex items-center max-[1200px]:flex-col max-[1200px]:items-start">
          {authors && (
            <div className="header-meta">
              <StackedAvatars authors={authors} />
              {authors.length > 1 ? (
                <div className="group relative flex items-center border-b border-dashed border-main-fg/90">
                  {authors.length} contributor{authors.length > 1 && "s"}
                  <div className="absolute top-full mt-2 hidden rounded bg-main/70 p-2 backdrop-blur-[14px] group-hover:block before:absolute before:bottom-full before:left-4 before:h-0 before:w-0 before:border-[0_3.5px_4px_3.5px] before:border-solid before:border-transparent before:border-b-[color-mix(in_oklab,var(--main-bg)_70%,transparent)] before:content-['']">
                    {authors
                      .map((author) => `${author.name}#${author.hash}`)
                      .join(", ")}
                  </div>
                </div>
              ) : (
                `${authors[0].name}#${authors[0].hash}`
              )}
            </div>
          )}
          {dateToHuman && <div className="header-meta">{dateToHuman}</div>}
          <div className="header-meta">
            {timeToRead} minute{timeToRead !== 1 && "s"} read time
          </div>
        </div>
      }
    />
  )
}
