import React, { FC } from "react"
import Logo from "../../images/tph-logo"
import { cn } from "../../lib/cn"

interface IMobileHeaderProps {
  openMenu: () => void
  // Breakpoint classes that reveal the header (defaults to below md).
  className?: string
}

export const MobileHeader: FC<IMobileHeaderProps> = ({
  openMenu,
  className = "max-md:flex",
  children,
}) => {
  return (
    <div
      className={cn(
        "fixed inset-x-0 top-0 z-50 hidden items-center bg-main/40 px-8 py-4 font-header text-[22px] font-bold backdrop-blur-[14px]",
        className
      )}
    >
      <div className="mr-2 flex h-[35px] w-[35px] items-center justify-center rounded-[7px] bg-[#222]">
        <Logo className="h-[25px]" />
      </div>
      {children}
      {/* content-box: the two 2px bars sit at the top and bottom of the 9px
          content box, inside 8px of padding that enlarges the tap target. */}
      <button
        type="button"
        aria-label="Open menu"
        onClick={openMenu}
        className="relative ml-auto box-content h-[9px] w-4 cursor-pointer p-2 before:absolute before:top-2 before:h-0.5 before:w-4 before:bg-main-fg before:content-[''] after:absolute after:bottom-2 after:h-0.5 after:w-4 after:bg-main-fg after:content-['']"
      />
    </div>
  )
}
