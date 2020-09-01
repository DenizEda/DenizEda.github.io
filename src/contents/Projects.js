import React, { Component } from "react";

const Project = (props) => {
  return (
    <div className="project">
      <div className="description">
        <div className="projectname">
          <h2>{props.projectname}</h2>
        </div>
        <div>
          <p className="excerpt">{props.excerpt}</p>
          <p className="excerpt">Tech stack: {props.techStack}</p>
        </div>
      </div>
      <div className="mockupAndLinks">
        <div className="mockupContainer">
          <img
            src={props.mockup}
            className="mockup"
            alt=""
            height="300px"
            width="380px"
          />
        </div>
        <div className="linksContainer">
          <a href={props.siteUrl} target="">
            Visit
          </a>
          <a href={props.githubUrl} target="">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

class Projects extends Component {
  render() {
    return (
      <div className="condiv" id="projects">
        <h1 className="subtopic">Projects</h1>
        {/* <div id="projects" className="projectsSection"> */}
        <div>
          <div className="projectsContainer">
            <Project
              projectname="MindPop"
              mockup={require("../img/mindpop.png")}
              excerpt="An interactive web application for educators to host pop quizzes for students in remote environments. Mindpop makes data on grades and levels of engagement accessible for educators through data visualization."
              siteUrl="mymindpop.herokuapp.com"
              githubUrl="https://github.com/TeamPopQuiz/PopRepo"
              techStack="Node.js | Express | Sequelize | React | Redux | Socket | Victory | CSS"
            />
            <hr className="projectHR" />
            <Project
              projectname="Saucesome"
              mockup={require("../img/pandemicessentials.png")}
              excerpt="A mock e-commerce site that sells a carefully curated selection of gourmet hot sauces from small-match makers around the world. Saucesome also integrates the Mapbox API to show the shoppers where their desired hot sauce is made."
              siteUrl="pandemic-essentials.herokuapp.com/"
              githubUrl="https://github.com/2004-GraceShopperProject-NY/GraceShopper"
              techStack="Node.js | Express | Sequelize | PostgreSQL | React | Redux | Bootstrap | Heroku"
            />
            <hr className="projectHR" />
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
