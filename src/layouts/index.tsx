import { WindowLocation } from "@reach/router"
import React, { FC, useMemo } from "react"
import { LocationProvider } from "../LocationProvider"
import { ArchivesLayout } from "./ArchivesLayout"
import { HomeLayout } from "./HomeLayout"
import { PageLayout } from "./PageLayout"
import { ResourcesLayout } from "./ResourcesLayout"

export interface IPageContext {
  pageContext: {
    layout?: string
  }
}

interface IBaseLayout extends IPageContext {
  location: WindowLocation
}

const BaseLayout: FC<IBaseLayout> = (props) => {
  const ResolvedLayout = useMemo(() => {
    switch (props.pageContext.layout) {
      case "resources":
        return ResourcesLayout
      case "archives":
        return ArchivesLayout
      case "regular":
        return PageLayout
      default:
        return HomeLayout
    }
  }, [props.pageContext])

  return (
    <LocationProvider location={props.location}>
      <ResolvedLayout {...props}>{props.children}</ResolvedLayout>
    </LocationProvider>
  )
}

export default BaseLayout
