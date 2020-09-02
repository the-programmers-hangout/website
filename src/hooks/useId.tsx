import { v4 as uuidV4 } from "uuid"
import { useState } from "react"

export const useId = () => {
  // Utilize useState instead of useMemo because React
  // makes no guarantees that the memo store is durable
  const [id] = useState(() => {
    return uuidV4()
  })

  return id
}

export default useId
