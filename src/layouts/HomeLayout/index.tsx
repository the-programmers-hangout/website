import React, { FC, useEffect } from "react"

import { Home } from "../../components/Home"
import { SEO } from "../../components/SEO"
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll"
import { ThemeProvider } from "../../ThemeProvider"

export const HomeLayout: FC = () => {
  const { locked, unlock } = useLockBodyScroll()

  useEffect(() => {
    if (locked) {
      unlock()
    }
  }, [locked, unlock])

  return (
    <ThemeProvider>
      <div className="relative flex flex-col items-center bg-[#1f2a34] text-white">
        <SEO
          title="Home"
          description="The Programmer's Hangout (TPH) is a discord community geared towards programming."
        />
        <Home />
      </div>
    </ThemeProvider>
  )
}
