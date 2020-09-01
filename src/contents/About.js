import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="condiv" id="about">
        <h1 className="subtopic">About Me</h1>
        <h4>Hey there,</h4>
        <h1>I'm Eda Deniz</h1>
        <h3>
          Full Stack Web <u>Developer</u> | Software <u>Engineer</u>
        </h3>
        <br></br>
        <p>
          I'm a full stack web developer and software engineer based out of New
          York City. After working multiple years in operations - primarily in
          the non-profit sectory - I decided to take a leap of faith to pursue a
          career in software engineering.
        </p>
        <p>And it was the best decision I've ever made!</p>
        <p>
          After completing <b>553 hours</b> of coursework at the Grace Hopper
          Program(a web development 17 week immersive program), I'm a javascript
          developer versed in the PERN stack. My passion for coding is
          unmatched, and I'm committed to this lifelong journey of building and
          learning.
        </p>
        <hr id="divider" />
      </div>
    );
  }
}
export default About;
