
import React, { useState } from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../styleConfigs/Global";
import { lightTheme, darkTheme } from "../../styleConfigs/Theme";
import "../../styleConfigs/typography.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Particles from "./Particles";

const Container = styled.div`
  flex: 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1 auto;
  align-items: center;
  margin: 0;
`;

const Layout = ({ children }) => {

  const [isParticles, setIsParticles] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const particlesSwitch = () => {
    setIsParticles(!isParticles);
  };

  const darkModeSwitch = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles/>
      <Container>
        
        <Header isParticles={isParticles} particlesSwitch={particlesSwitch} isDarkMode={isDarkMode} darkModeSwitch={darkModeSwitch}/>
        <MainContent>{children}</MainContent>
        <Footer/> 
        { isParticles && <Particles /> }
      
      </Container>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
