import React, { FC } from "react"
import { AppLink } from "../AppLink"
import ArrowRight from "../../icons/arrow-right.svg?react"

interface IPageNavigationPage {
  relativePath: string
  title: string
}

interface IPageContentProps {
  next?: IPageNavigationPage
  previous?: IPageNavigationPage
}

const textClass = "m-0 mr-[19px] mb-[7px] ml-[17px] font-body text-lg font-bold"
const navLinkClass =
  "flex no-underline hover:text-main-fg hover:underline focus:text-main-fg focus:underline"
const titleClass =
  "m-0 mx-2.5 font-body text-lg font-bold [background:-webkit-linear-gradient(91.81deg,#feaf6d_0%,#ff70a5_100%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"

export const PageNavigation: FC<IPageContentProps> = ({ previous, next }) => {
  return (
    <div className="mt-16 flex content-center justify-between">
      {previous && (
        <div className="mr-auto flex w-[200px] flex-col">
          <p className={textClass}>Previous</p>
          <AppLink
            to={`/resources/${previous.relativePath}`}
            className={navLinkClass}
          >
            <ArrowRight className="w-2 rotate-180 [&_path]:fill-[#feac71]" />
            <p className={titleClass}>{previous.title}</p>
          </AppLink>
        </div>
      )}
      {next && (
        <div className="ml-auto flex w-[200px] flex-col text-right [&_a]:justify-end">
          <p className={textClass}>Next</p>
          <AppLink
            to={`/resources/${next.relativePath}`}
            className={navLinkClass}
          >
            <p className={titleClass}>{next.title}</p>
            <ArrowRight className="w-2 [&_path]:fill-[#ff74a2]" />
          </AppLink>
        </div>
      )}
    </div>
  )
}
