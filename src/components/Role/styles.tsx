import styled from "styled-components"

export const RoleWrapper = styled.span<{ color: string }>`
  display: inline-block;
  font-weight: 400 !important;
  color: ${(props) => props.color};
  border: 2px solid ${(props) => props.color};
  border-radius: 40px;
  margin: 2px 0;
  padding: 3px 12px;
`
