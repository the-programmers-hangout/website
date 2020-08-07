import { Link } from "gatsby"
import styled from "styled-components"

export const StyledLink = styled(Link)`
  color: #0090d8;
  font-weight: 700;
  border-bottom: 2px solid;
  text-decoration: none;
  transition: color 0.3s;

  &:hover,
  &:focus {
    color: #5dbbea;
    transition: none;
  }
`

export const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
