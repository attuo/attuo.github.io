import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { CloudSnow, Sun } from "react-feather";

const Container = styled.div`
  display: flex;
  z-index: 1;
  & > * {
    padding-left: 5px;
    padding-right: 5px;
  }
`;

const Actions = ( { isParticles, particlesSwitch, isDarkMode, darkModeSwitch } ) => {
  const themeContext = useContext(ThemeContext);
  const buttonColor = themeContext.buttonColor;
  
  return (
    <Container>
      <CloudSnow color={buttonColor} fill={isParticles ? buttonColor : "none"} onClick={particlesSwitch}/> 
      <Sun color={buttonColor} fill={!isDarkMode ? buttonColor : "none"} onClick={darkModeSwitch}/>
    </Container>
  );
};


export default Actions;
