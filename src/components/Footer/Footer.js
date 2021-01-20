import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { Mail, GitHub, Linkedin } from "react-feather";

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const LinksContainer = styled.div`
  z-index: 1;
  margin-top: 2px;
  margin-bottom: 2px;
  & > * {
    padding-left: 5px;
    padding-right: 5px;
  }
`;

const CreditsContainer = styled.div`
  margin-top: 2px;
  margin-bottom: 2px;
  font-size: 0.7em;
`;

const Footer = () => {
  const themeContext = useContext(ThemeContext);
  const buttonColor = themeContext.buttonColor;

  return (
    <FooterContainer>

      <LinksContainer>
        <a href="mailto:attuo@protonmail.com"><Mail color={buttonColor} /></a>
        <a href="https://github.com/attuo"><GitHub color={buttonColor} /></a>
        <a href="https://linkedin.com/in/attetuomisto"><Linkedin color={buttonColor} /></a>
      </LinksContainer>

      <CreditsContainer>
        <span>Designed and Built by Atte Tuomisto</span>
      </CreditsContainer>
    
    </FooterContainer>
  );
};

export default Footer;
