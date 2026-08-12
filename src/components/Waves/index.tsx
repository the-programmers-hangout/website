import React, { FC } from "react"
import WavesBottomImg from "../../images/waves-bot"
import WavesTopImg from "../../images/waves-top"
import { cn } from "../../lib/cn"

const wavesBase =
  "pointer-events-none absolute block w-screen max-w-full opacity-70"

export const WavesTop: FC<{ className?: string }> = ({ className, ...props }) => {
  return <WavesTopImg {...props} className={cn(wavesBase, "top-0 h-[87vh]", className)} />
}

export const WavesBottom: FC<{ className?: string }> = ({
  className,
  ...props
}) => {
  return <WavesBottomImg {...props} className={cn(wavesBase, "bottom-0", className)} />
}
