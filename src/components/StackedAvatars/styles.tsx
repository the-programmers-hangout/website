import styled from "styled-components"

const AVATAR_SIZE = 32
const OVERLAP_AMOUT = 0.4 // 0 to 1

function containerWidth(count: number): number {
  if (count === 0) {
    return 0
  }

  return AVATAR_SIZE + count * AVATAR_SIZE * (1 - OVERLAP_AMOUT)
}

export const StackedAvatarsWrapper = styled.div<{ count: number }>`
  display: flex;
  margin-right: 16px;
  width: ${(props) => containerWidth(props.count)}px;
`

export const AuthorAvatar = styled.img<{ index: number }>`
  position: relative;
  width: ${AVATAR_SIZE}px;
  height: ${AVATAR_SIZE}px;
  flex: 0 0 ${AVATAR_SIZE}px;
  border: 2px solid #4c6780;
  border-radius: 50%;
  z-index: ${(props) => props.index};
  left: -${(props) => AVATAR_SIZE * OVERLAP_AMOUT * props.index}px;
`
