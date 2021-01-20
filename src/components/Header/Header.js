import React from "react";
import styled from "styled-components";
import { screenSizes } from "../../styleConfigs/Sizes";
import Nav from "./Navigation";
import Logo from "./Logo";
import Actions from "./Actions";
import mainData from "../../data/Main.yml";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  @media ${screenSizes.sm} {
    padding-top: 40px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${screenSizes.sm} {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
  @media ${screenSizes.md} {
    width: 1200px;
  }
`;

const HeaderSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${screenSizes.sm} {
    flex-direction: row;
  }
`;

const Header = ( props ) => {
  const data = mainData.header;

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo title={data.title}/>
        <HeaderSubContainer>  
          <Nav/>
          <Actions {...props} />
        </HeaderSubContainer>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;