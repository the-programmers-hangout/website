import React from "react"
import { Shell } from "./Shell"
import { FourZeroFour } from "../components/FourZeroFour"
import type { ResourceDataShape } from "../lib/content"

interface Props {
  pathname: string
  resourceData: ResourceDataShape
}

export default function Root404Island({ pathname, resourceData }: Props) {
  return (
    <Shell layout="regular" pathname={pathname} resourceData={resourceData}>
      <FourZeroFour title="NOT FOUND" />
    </Shell>
  )
}
