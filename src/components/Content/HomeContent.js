import React from "react";
import Content from "./Content";
import NextLink from "../Shared/NextLink";
import mainData from "../../data/Main.yml";

const HomeContent = () => {
  const data = mainData.home;

  return (
    <Content>
      
      <h4>{data.greeting} {data.nameIntro}</h4>
      <h1>{data.name}</h1>
      <h5>{data.description}</h5>
      <NextLink route={"/expertise"} text={data.next}/>

    </Content>
  );
};

export default HomeContent;
