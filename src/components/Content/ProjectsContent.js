import React, { Fragment } from "react";
import Content from "./Content";
import mainData from "../../data/Main.yml";
import NextLink from "../Shared/NextLink";

const ProjectsContent = () => {
  const data = mainData.projects;

  return (
    <Content>

      <h2>{data.title}</h2>
      <p>{data.description}</p>
      { data.projects.map(project => (
        <Fragment key={project.title}>
          <h3>{project.title} (<NextLink route={project.link} text="REPO"></NextLink>)</h3>
          <p>{project.description}</p>
          <p>{project.technologies}</p>
        </Fragment>
      ))}
      
    </Content>
  );
};

export default ProjectsContent;