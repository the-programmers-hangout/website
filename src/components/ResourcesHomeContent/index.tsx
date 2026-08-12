import React, { FC, HTMLAttributes } from "react"
import { Footer } from "../Footer"
import { Markdown } from "../Markdown"
import { ResourcesList } from "../ResourcesList"

interface IResourcesHomeContent extends HTMLAttributes<HTMLDivElement> {
  language: string
  body: any
}

export const ResourcesHomeContent: FC<IResourcesHomeContent> = (props) => {
  return (
    <>
      <h2 className="font-header text-2xl">Resources</h2>
      <p className="font-header text-base font-bold">
        Written by and for TPH members, short introduction topics to commonly
        answered questions.
      </p>
      <ResourcesList relativeDirectory={props.language} />
      <div className="resources-home-box">
        <h2 className="font-header text-2xl">Extra resources</h2>
        <Markdown content={props.body} />
      </div>
      <Footer />
    </>
  )
}
