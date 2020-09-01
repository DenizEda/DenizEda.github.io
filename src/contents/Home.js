import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import profilepic from "../img/profpic.png";

class Home extends Component {
  render() {
    return (
      <div className="condiv home" id="home">
        <img src={profilepic} className="profilepic" alt=""></img>
        <ReactTypingEffect
          className="typingeffect"
          text={["My name is Eda Deniz.  Welcome to my site."]}
          speed={80}
          eraseDelay={1000000}
        />{" "}
        <ReactTypingEffect
          className="typingeffecttwo"
          text={[
            "",
            "I am a software engineer.",
            "I am a full stack web developer.",
            "I hope to create innovative technology.",
          ]}
          speed={80}
          eraseDelay={900}
        />
        <br />
        <hr id="divider" />
      </div>
    );
  }
}
export default Home;
