import React, { FC } from "react"
import { cn } from "../../lib/cn"

export const Container: FC<{ className?: string }> = ({
  children,
  className,
  ...restProps
}) => {
  return (
    <div
      className={cn(
        "mx-auto w-[650px] max-w-[calc(100%-128px)] px-16 max-md:max-w-[calc(100%-64px)] max-md:px-8",
        // Offset anchor targets so the fixed header doesn't cover them.
        "[&_[id]]:before:-mt-20 [&_[id]]:before:block [&_[id]]:before:h-20 [&_[id]]:before:invisible [&_[id]]:before:content-['']",
        className
      )}
      {...restProps}
    >
      {children}
    </div>
  )
}
