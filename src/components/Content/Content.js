import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { screenSizes } from "../../styleConfigs/Sizes";

const Article = styled.article`
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 20px;
  padding-bottom: 20px;
  z-index: 1;
  @media ${screenSizes.sm} {
    margin-top: 200px;
    width: 800px;
  }
`;

const Content = ({ children }) => ( 
  <Article data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">
    {children}
  </Article>
);
 
Content.propTypes = {
  children: PropTypes.node.isRequired,
};


export default Content;