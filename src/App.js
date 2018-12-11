import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import HeaderCard from "./components/HeaderCard"
import ProjectsPlaceholder from "./components/ProjectsPlaceholder"

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <HeaderCard>
          </ HeaderCard>

        <ProjectsPlaceholder></ProjectsPlaceholder>
      </div>
    );
  }
}
