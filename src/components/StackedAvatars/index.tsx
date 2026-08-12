import React, { FC } from "react"

const AVATAR_SIZE = 32
const OVERLAP_AMOUNT = 0.4 // 0 to 1

interface IStackedAvatarsProps {
  authors: any[]
}

export const StackedAvatars: FC<IStackedAvatarsProps> = ({ authors }) => {
  const width =
    authors.length === 0
      ? 0
      : AVATAR_SIZE + authors.length * AVATAR_SIZE * (1 - OVERLAP_AMOUNT)

  return (
    <div className="mr-4 flex" style={{ width }}>
      {authors.map((author, index) => (
        <img
          key={index}
          src={author.avatar}
          className="relative h-8 w-8 flex-[0_0_32px] rounded-full border-2 border-[#4c6780]"
          style={{ zIndex: index, left: -(AVATAR_SIZE * OVERLAP_AMOUNT * index) }}
        />
      ))}
    </div>
  )
}
