import React, { FC } from "react"
import JetBrainsLogo from "../../images/jetbrains-logo"

export const HomePartner: FC = () => {
  return (
    <div className="mt-8 flex items-center font-mono text-[22px] uppercase text-main-fg">
      Member of
      <a rel="noreferrer" target="_blank" href="https://jetbrains.com">
        <JetBrainsLogo alt="JetBrains" className="mx-4 h-[110px]" />
      </a>
      Supported user groups
    </div>
  )
}
