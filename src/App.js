import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Container from "./components/Container"
import HeaderCard from "./components/HeaderCard"

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Container>
          <HeaderCard>
          </ HeaderCard>
        </Container>
      </div>
    );
  }
}
