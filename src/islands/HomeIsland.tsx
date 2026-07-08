import React from "react"
import { LocationProvider } from "../LocationProvider"
import { HomeLayout } from "../layouts/HomeLayout"

export default function HomeIsland() {
  return (
    <LocationProvider location={{ pathname: "/" }}>
      <HomeLayout />
    </LocationProvider>
  )
}
