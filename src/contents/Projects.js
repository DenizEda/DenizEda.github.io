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
          {props.techStack ? (
            <p className="excerpt">Tech stack: {props.techStack}</p>
          ) : null}
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
          {props.siteUrl ? (
            <a href={props.siteUrl} target="">
              Visit
            </a>
          ) : null}
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
        <h2 className="subtopic">PROJECTS</h2>
        <div>
          <div className="projectsContainer">
            <Project
              projectname="MindPop"
              mockup={require("../img/mindpop.png")}
              excerpt="An interactive web application for educators to host pop quizzes for students in remote environments. Mindpop makes data on grades and levels of engagement accessible for educators through data visualization."
              siteUrl="http://mymindpop.herokuapp.com"
              githubUrl="https://github.com/TeamPopQuiz/PopRepo"
              techStack="Node.js | Express | Sequelize | React | Redux | Socket | Victory | CSS"
            />
            <hr className="projectHR" />
            <Project
              projectname="Pandemic Essentials"
              mockup={require("../img/pandemicessentials.png")}
              excerpt="A mock e-commerce site that sells essential items for consumers during a pandemic.  Signup is integrated with Oauth and Google OAuth.  Styling is built with Bootstrap."
              siteUrl="http://pandemic-essentials.herokuapp.com/"
              githubUrl="https://github.com/2004-GraceShopperProject-NY/GraceShopper"
              techStack="Node.js | Express | Sequelize | PostgreSQL | React | Redux | Bootstrap | Heroku"
            />
            <hr className="projectHR" />
            <Project
              projectname="Conway's Game Of Life"
              mockup={require("../img/gameoflife.gif")}
              excerpt="Conway's Game of Life built with HTML, CSS & Javascript. Built as a workshop during FSA/GH program."
              githubUrl="https://github.com/DenizEda/ConwaysGameOfLife"
              techStack="HTML | CSS | JavaScript"
            />
            <hr className="projectHR" />
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
