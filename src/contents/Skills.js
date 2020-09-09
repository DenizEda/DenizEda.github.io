import React, { Component } from "react";
class Skills extends Component {
  render() {
    return (
      <div className="condiv">
        <h2 className="subtopic"> SKILLS & INTERESTS</h2>
        <div id="services">
          <div class="card">
            {" "}
            <i class="fas fa-laptop-code" />
            <div class="container">
              <h4>
                <b>Computer Science</b>
              </h4>
              <p>Algorithms</p>
              <p>Data Structures </p>
              <p>Object Oriented Programming </p>
            </div>
          </div>
          {/*  */}
          <div class="card">
            <i class="far fa-window-restore" />
            <div class="container">
              <h4>
                <b>UX & Web Accessibility</b>
              </h4>
              <p>Creating Accessible </p>
              <p> & User-Friendly </p>
              <p>Web Applications </p>
            </div>
          </div>
          {/*  */}
          <div class="card">
            <i class="far fa-lightbulb" />
            <div class="container">
              <h4>
                <b>Learning & Exploring</b>
              </h4>
              <p>PWA/Native Apps</p>
              <p>Responsive Web Design</p>
              <p> </p>
            </div>
          </div>
        </div>
        <hr id="divider" />
      </div>
    );
  }
}
export default Skills;
