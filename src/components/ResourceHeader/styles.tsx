import styled from "styled-components"

export const ResourceHeaderWrapper = styled.div`
  border-bottom: 1px solid #dbdbdb;
  padding-bottom: 32px;
  margin-bottom: 32px;
`

export const Top = styled.div`
  display: flex;
  align-items: center;
`

export const Title = styled.h1``

export const AuthorAvatars = styled.div`
  margin-right: 16px;
`

export const AuthorAvatar = styled.img`
  width: 32px;
  height: 32px;
  border: 2px solid #fff;
  border-radius: 50%;
`

export const Meta = styled.div`
  & + &::before {
    content: "•";
    margin: 0 8px;
  }
`

export const RecommendedReading = styled.div`
  margin-top: 16px;
`

export const ReadLink = styled.div`
  display: flex;
  align-items: center;
  color: #04b0a6;
  margin-top: 4px;
  margin-left: 20px;
  cursor: pointer;

  &:hover {
    color: #045551;
  }

  svg {
    width: 14px;
    transform: rotate(90deg);
    margin-right: 6px;
  }

  svg path {
    fill: #04b0a6;
  }
`

export const ReadLinkText = styled.div`
  text-decoration: underline;
`
