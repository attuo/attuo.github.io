import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledLink = styled(Link)`
  display: inline-block;
  margin-top: 10px;
  z-index: 1;
  color: ${({ theme }) => theme.aColor};
  line-height: 1.0;
  &:after {
    left: 0;
    content: '';
    width: 100%;
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
    width: 0;
    background: ${({ theme }) => theme.h1Color};;
  }
`;

const NextLink = ( { route, text }) => (
  <StyledLink to={route}>{text}</StyledLink>
);

export default NextLink;
