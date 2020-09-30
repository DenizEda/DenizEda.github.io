import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="condiv" id="contact">
        <h2 className="subtopic">CONTACT ME</h2>
        <p>
          Want to connect? Reach out to me and check out what I'm working on via
          the links below!
        </p>
        <div className="center">
          <div class="tech tooltip">
            <a href="https://medium.com/@EdaDeniz">
              <i class="fab fa-medium" alt="Medium"></i>
            </a>
            <span class="tooltiptext">Medium</span>
          </div>{" "}
          <div class="tech tooltip">
            <a href="https://www.linkedin.com/in/edadenizci/">
              <i class="fab fa-linkedin" alt="LinkedIn"></i>{" "}
            </a>
            <span class="tooltiptext">LinkedIn</span>
          </div>
          <div class="tech tooltip">
            <a href="https://github.com/DenizEda">
              <i class="fab fa-github" alt="Github"></i>
            </a>
            <span class="tooltiptext">Github</span>
          </div>
          <div class="tech tooltip">
            <a href="mailto:Eda.Deniz91@gmail.com">
              <i class="fas fa-at" alt="Email"></i>
            </a>
            <span class="tooltiptext">Email</span>
          </div>
          <div class="tech tooltip">
            <a href="https://drive.google.com/file/d/1dLY-MrXh-TQ9ve8f82j__lUDph-LAIon/view?usp=sharing">
              <i class="fas fa-file-alt" alt="Resume"></i>
            </a>
            <span class="tooltiptext">Resume</span>
          </div>
        </div>
        <hr id="divider" />
      </div>
    );
  }
}

export default Contact;
