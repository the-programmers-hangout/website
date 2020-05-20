import styled from "styled-components"

export const FooterWrapper = styled.footer`
  margin-top: 64px;

  & a {
    display: inline;
    font-weight: 700;
    color: ${(props) => props.theme.main.foreground};
    text-decoration: none;
    position: relative;

    &::after {
      position: absolute;
      left: 0;
      right: 0;
      content: "";
      display: block;
      width: 100%;
      height: 2px;
      background: linear-gradient(92.97deg, #feaf6d 0%, #ff70a5 100%);
    }

    &:hover,
    &:focus {
      background: linear-gradient(92.97deg, #feaf6d 0%, #ff70a5 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`
