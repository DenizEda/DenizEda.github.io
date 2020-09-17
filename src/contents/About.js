import React, { Component } from "react";
import profilepic from "../img/profpic.png";
class About extends Component {
  render() {
    return (
      <div className="condiv" id="about">
        <div className="left-half">
          <img src={profilepic} alt=""></img>
          <h1 className="subtopic">Eda Deniz</h1>
          <p>Pronouns: She/Her/Hers</p>
        </div>
        <div id="right-half">
          <h2>ABOUT</h2>
          <p>
            I'm a full stack web developer and software engineer based out of
            New York City. After working multiple years in operations -
            primarily in the non-profit sectory - I decided to take a leap of
            faith to pursue a career in software engineering.
          </p>
          <p>And it was the best decision I've ever made!</p>
          <p>
            After completing <b>553 hours</b> of coursework at the Grace Hopper
            Program(a web development 17 week immersive program), I'm a
            javascript developer versed in the PERN stack. My passion for coding
            is unmatched, and I'm committed to this lifelong journey of building
            and learning.
          </p>
        </div>

        <hr id="divider" />
      </div>
    );
  }
}
export default About;
