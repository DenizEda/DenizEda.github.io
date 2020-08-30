import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">Contact Me</h1>
        <p className="subtopic">
          Want to connect? Reach out to me and check out what I'm working on via
          the links below!
        </p>
        <div className="center">
          <a href="https://medium.com/@EdaDeniz">
            <i class="fab fa-medium" alt="Medium"></i>
          </a>
          <a href="https://www.linkedin.com/in/edadenizci/">
            <i class="fab fa-linkedin" alt="LinkedIn"></i>
          </a>
          <a href="https://github.com/DenizEda">
            <i class="fab fa-github" alt="Github"></i>
          </a>{" "}
          <a href="mailto:Eda.Deniz91@gmail.com">
            <i class="fas fa-at" alt="Email"></i>
          </a>
          <a href="https://drive.google.com/file/d/1fybypZnfYRkB8zUG_-y7wqP8c-uV438G/view?usp=sharing">
            <i class="fas fa-file-alt" alt="Resume"></i>
          </a>
        </div>
      </div>
    );
  }
}
export default Contact;
