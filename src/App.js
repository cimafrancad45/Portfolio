import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeaderCard from "./components/HeaderCard"
import ProjectCard from "./components/ProjectCard"
import project from "./projects.json"

export default class App extends Component {

  state = {
    project
  };


  render() {
    return (
      <div>
        <Navbar />
        <HeaderCard>
        </ HeaderCard>
        <div className="container row">
          {this.state.project.map(project => (
            <ProjectCard
              projectName={project.projectName}
              projectLink={project.projectLink} />
          ))}
        </div>
      </div>
    );
  }
}
