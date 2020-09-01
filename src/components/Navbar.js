import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul className="right">
          <li>
            <a href="#home">Eda Deniz</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#techstack">Tech Stack</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
