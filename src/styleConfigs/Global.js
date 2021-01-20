import { createGlobalStyle } from "styled-components";
import { fontSizes } from "./Sizes";

// TODO: Change all px to em or rem

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "OverpassMono";
    src: url("../fonts/OverpassMono-Regular.woff2");
  }
  
  html {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.4;
    background-color: ${({ theme }) => theme.bgColor};
    font-family: "OverpassMono";
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    transition: background 1s;
  }

  #___gatsby {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
  
  #gatsby-focus-wrapper {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  h1 {
    font-size: 3.75rem;
    font-weight: 500;
    margin-top: 8px;
    margin-bottom: 8px;
    color: ${({ theme }) => theme.h1Color};
  }
  
  h2 {
    font-size: 1.75rem;
    font-weight: 500;
    line-height: 1.4;
    margin-top: 8px;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.h2Color};
  }
  
  h3 {
    font-size: 1.50rem;
    font-weight: 500;
    line-height: 1.4;
    margin-top: 8px;
    margin-bottom: 2px;
    color: ${({ theme }) => theme.h3Color};
  }
  
  h4 {
    font-size: 1.15rem;
    display: inline;
    font-weight: 500;
    line-height: 1.4;
    margin-top: 8px;
    margin-bottom: 2px;
    color: ${({ theme }) => theme.h4Color};
  }
  
  h5 {
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 1.4;
    margin-top: 8px;
    margin-bottom: 2px;
    color: ${({ theme }) => theme.h5Color};
  }
  
  p {
    font-size: 1rem;
    line-height: 1.75;
    margin-top: 14px;
    margin-bottom: 14px;
    color: ${({ theme }) => theme.pColor};
  }
  
  b {
    color: ${({ theme }) => theme.bColor};
  }
  
  ul {
    margin: 0;
  }
  
  li {
    color: ${({ theme }) => theme.pColor};
  }

  a {
    position: relative;
    text-decoration: none;
    color: ${({ theme }) => theme.aColor};
    font-size: ${fontSizes.p};
    transition: 0.5s color ease;
    &:after {
      left: 0;
      content: '';
      width: 0;
      height: 2px;
      background: ${({ theme }) => theme.primaryColor};
      transition: 0.5s all ease;
      bottom: -0.25em;
      position: absolute;
    }
    &:hover {
      color: ${({ theme }) => theme.aHoverColor};
    }
    &:hover::after {
      width: 100%;
    }
  }

  span {
    color: ${({ theme }) => theme.pColor};
  }
`;