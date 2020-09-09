import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
class Home extends Component {
  render() {
    return (
      <div className="condiv home" id="home">
        <br /> <br /> <br /> <br /> <br /> <h5> HEY! I AM</h5>
        <h1>Eda Deniz</h1>
        <p>
          I AM
          <ReactTypingEffect
            id="typingeffecttwo"
            text={[
              " A SOFTWARE ENGINEER",
              " A FULLSTACK WEB DEVELOPER",
              " CONSTANTLY LEARNING AND GROWING",
            ]}
            speed={100}
            eraseDelay={900}
          />
        </p>
        <br /> <br />
        <p>Learn more below</p>
        <br /> <br />
        <div class="arrow bounce">
          <a class="fa fa-arrow-down fa-2x" href="#about"></a>
        </div>
        <hr id="divider" />
      </div>
    );
  }
}
export default Home;
