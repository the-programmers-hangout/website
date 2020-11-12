import styled from "styled-components"
import { readableColor } from "polished"

export const RoleWrapper = styled.span<{ color: string }>`
  display: inline-block;
  font-weight: 400 !important;
  background: ${(props) => props.color};
  color: ${(props) => readableColor(props.color, "#000", "#fff")};
  border-radius: 40px;
  margin: 2px 0;
  padding: 3px 12px;
`
