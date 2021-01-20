import React from "react";
import styled from "styled-components";
import { fontSizes } from "../../styleConfigs/Sizes"; 
import { Link } from "gatsby";

const LogoArea = styled.div`
  z-index: 1;
  > * {
    font-size: ${fontSizes.h3}
  }
`;

const CurlyLeft = styled.span`
    color: ${({ theme }) => theme.primaryColor};
    margin-right: 10px;
`;

const CurlyRight = styled.span`
  color: ${({ theme }) => theme.primaryColor};
  margin-left: 10px;
`;


const HeaderLogo = ( { title }) => {
  return (
    <LogoArea>
      <CurlyLeft>{"{"}</CurlyLeft>
      <Link to="/">{title}</Link>
      <CurlyRight>{"}"}</CurlyRight>
    </LogoArea>
  );
};

export default HeaderLogo;