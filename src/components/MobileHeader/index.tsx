import React, { FC } from "react"
import Logo from "../../images/tph-logo"

interface IMobileHeaderProps {
  openMenu: () => void
}

export const MobileHeader: FC<IMobileHeaderProps> = ({
  openMenu,
  children,
}) => {
  return (
    <div className="fixed inset-x-0 top-0 z-50 hidden items-center bg-main/40 px-8 py-4 font-header text-[22px] font-bold backdrop-blur-[14px] max-md:flex">
      <div className="mr-2 flex h-[35px] w-[35px] items-center justify-center rounded-[7px] bg-[#222]">
        <Logo className="h-[25px]" />
      </div>
      {children}
      <div
        onClick={openMenu}
        className="relative ml-auto h-[9px] w-4 cursor-pointer p-2 before:absolute before:top-2 before:h-0.5 before:w-4 before:bg-main-fg before:content-[''] after:absolute after:bottom-2 after:h-0.5 after:w-4 after:bg-main-fg after:content-['']"
      />
    </div>
  )
}
