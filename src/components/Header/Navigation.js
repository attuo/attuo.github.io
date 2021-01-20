import React from "react";
import styled from "styled-components";
import { screenSizes } from "../../styleConfigs/Sizes";
import { Link } from "gatsby";

const Nav = styled.nav`
  z-index: 1;
  margin-top: 10px;
  margin-bottom: 10px;
  @media ${screenSizes.sm} {
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 10px;
    margin-right: 10px;
  }
  & > a {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

const Slash = styled.span`
  color: ${({ theme }) => theme.primaryColor};
`;

const Navigation = () => {

  return (
    <Nav>
      <Link to="/"><Slash>/</Slash>home</Link>
      <Link to="/expertise"><Slash>/</Slash>expertise</Link>
      <Link to="/projects"><Slash>/</Slash>projects</Link>
    </Nav>
  );
};

export default Navigation;