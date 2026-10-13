import { useId as useReactId } from "react"

/*
  An id that matches between the server render and hydration (a random one
  would differ). React's ids look like ":r0:"; the colons are stripped so the
  result is safe inside url(#…) references and CSS selectors.
*/
export const useId = () => useReactId().replace(/:/g, "")

export default useId
