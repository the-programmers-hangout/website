import React, { FC } from "react"
import Banner from "../../images/resources-banner.svg?react"
import { cn } from "../../lib/cn"

// Decorative waves strip across the top of the page, fading into the page
// background. Below 1440px `slice` crops its sides at a fixed 142px; above
// 1440px it grows with the width so the bottom fade is never cut off. The
// height is rounded down to whole pixels: a fractional last row antialiases
// the waves and their fade separately and leaves a 1px seam.
export const WavesBanner: FC<{ className?: string }> = ({ className }) => {
  return (
    <Banner
      aria-hidden="true"
      focusable="false"
      className={cn(
        "pointer-events-none absolute inset-x-0 top-0 h-[max(142px,round(down,calc(100vw*142/1440),1px))] w-full",
        className
      )}
    />
  )
}
