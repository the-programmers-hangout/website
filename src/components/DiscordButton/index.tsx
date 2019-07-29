import React from "react"

function DiscordButton({
  lined = false,
  children,
}: React.PropsWithChildren<{ lined: boolean }>) {
  return (
    <button>
      <div>{children}</div>
    </button>
  )
}

export default DiscordButton
