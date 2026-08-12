import React, { FC } from "react"

interface IPossibleCorrections {
  title: string
}

export const FourZeroFour: FC<IPossibleCorrections> = ({ children }) => {
  return (
    <div className="flex w-full flex-col items-center justify-center px-5 pt-[100px] pb-5">
      <h1 className="m-0 p-2.5 leading-10">NOT FOUND</h1>
      <p className="m-0 p-2.5 leading-8">
        You just hit a route that doesn&#39;t exist... the sadness.
      </p>
      {children && <div className="h-8" />}
      {children}
    </div>
  )
}
