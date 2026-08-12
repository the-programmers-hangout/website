import React, { FC } from "react"

interface IRoleProps {
  color: string
}

export const Role: FC<IRoleProps> = ({ children, color, ...props }) => {
  return (
    <span
      {...props}
      className="my-0.5 inline-block rounded-[40px] border-2 px-3 py-[3px] font-normal!"
      style={{ color, borderColor: color }}
    >
      {children}
    </span>
  )
}
