import React from "react";

const ProjectCard = props =>
  <div className={`container${props.fluid ? "-fluid" : ""}`} {...props} />;

  export default ProjectCard;
