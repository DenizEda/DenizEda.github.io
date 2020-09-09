import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul className="right">
          <li>
            <a href="#home">EDA DENIZ</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#techstack">TECHSTACK</a>
          </li>
          <li>
            <a href="#projects">PROJECTS</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
