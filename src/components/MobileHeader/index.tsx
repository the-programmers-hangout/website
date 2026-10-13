import React, { FC } from "react"
import Logo from "../../images/tph-logo"

interface IMobileHeaderProps {
  openMenu: () => void
}

// Below lg: section title and menu button sitting on the waves banner. It
// scrolls away with the page rather than covering the content, and shares
// the content's side gutters (20px, 32px from md).
export const MobileHeader: FC<IMobileHeaderProps> = ({
  openMenu,
  children,
}) => {
  return (
    <div className="absolute inset-x-0 top-0 z-50 hidden items-center px-5 py-4 font-header text-[22px] font-bold max-lg:flex md:px-8">
      <div className="mr-2 flex h-[35px] w-[35px] items-center justify-center rounded-[7px] bg-[#222]">
        <Logo className="h-[25px]" />
      </div>
      {children}
      {/* content-box: the two 2px bars sit at the top and bottom of the 9px
          content box, inside 8px of padding that enlarges the tap target;
          -mr-2 lines the bars up with the content edge. */}
      <button
        type="button"
        aria-label="Open menu"
        onClick={openMenu}
        className="relative -mr-2 ml-auto box-content h-[9px] w-4 cursor-pointer p-2 before:absolute before:top-2 before:h-0.5 before:w-4 before:bg-main-fg before:content-[''] after:absolute after:bottom-2 after:h-0.5 after:w-4 after:bg-main-fg after:content-['']"
      />
    </div>
  )
}
