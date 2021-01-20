import React, { Fragment } from "react";
import NextLink from "../Shared/NextLink";
import Content from "./Content";
import mainData from "../../data/Main.yml";

const ExpertiseContent = () => {
  const data = mainData.expertise;

  return (
    <Content>
      
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <p>Main technologies: {data.main}</p>

      { data.areas.map(area => (
        <Fragment key={area.name}>
          <h3>{area.name}</h3>
          <p>{area.description}</p>
        </Fragment>
      ))}
      <NextLink route={"/projects"} text={data.next} />

    </Content>
  );
};

export default ExpertiseContent;