import React, { FC } from "react"
import * as SC from "./styles"

interface IPageNavigationPage {
  relativePath: string
  title: string
}

interface IPageContentProps {
  next?: IPageNavigationPage
  previous?: IPageNavigationPage
}

export const PageNavigation: FC<IPageContentProps> = ({ previous, next }) => {
  return (
    <SC.PageNavigationContent>
      {previous ? (
        <SC.PageNavigationPageContent>
          <SC.PageNavigationText>Previous</SC.PageNavigationText>
          <SC.PageNavigationLink to={`/resources/${previous.relativePath}`}>
            <SC.PreviousArrow />
            <SC.PageNavigationPageTitle>
              {previous.title}
            </SC.PageNavigationPageTitle>
          </SC.PageNavigationLink>
        </SC.PageNavigationPageContent>
      ) : (
        <div> </div>
      )}
      {next ? (
        <SC.PageNavigationPageContent>
          <SC.PageNavigationText>Next</SC.PageNavigationText>
          <SC.PageNavigationLink to={`/resources/${next.relativePath}`}>
            <SC.PageNavigationPageTitle>
              {next.title}
            </SC.PageNavigationPageTitle>
            <SC.NextArrow />
          </SC.PageNavigationLink>
        </SC.PageNavigationPageContent>
      ) : (
        <div> </div>
      )}
    </SC.PageNavigationContent>
  )
}
