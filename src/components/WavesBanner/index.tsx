import React, { FC } from "react"
import Banner from "../../images/resources-banner.svg?react"
import { cn } from "../../lib/cn"

// Decorative waves strip across the top of the page, fading into the page
// background. `slice` keeps its aspect ratio and crops at other widths.
export const WavesBanner: FC<{ className?: string }> = ({ className }) => {
  return (
    <Banner
      aria-hidden="true"
      focusable="false"
      className={cn(
        "pointer-events-none absolute inset-x-0 top-0 h-[142px] w-full",
        className
      )}
    />
  )
}
