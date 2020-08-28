import React, { Component } from "react";

class TechStack extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">My Education</h1>

        <div id="skillsDiv">
          <div id="techTitle" data-aos="fade-up">
            <h3>Technologies I've Worked With</h3>
          </div>
          <div id="skillsMain">
            <div class="techDiv" id="frontend" data-aos="fade-up">
              <div class="techDivTitle">Frontend</div>
              <div class="tech tooltip">
                <img
                  src={require("../img/reactlogo2.png")}
                  alt="React / React Native"
                />
                <span class="tooltiptext">React / React Native</span>
              </div>
              <div class="tech tooltip">
                <img src={require("../img/reduxlogo2.png")} alt="Redux" />
                <span class="tooltiptext">Redux</span>
              </div>
              <div class="tech tooltip">
                <img src={require("../img/htmllogo.png")} alt="HTML" />
                <span class="tooltiptext">HTML</span>
              </div>
              <div class="tech tooltip">
                <img src={require("../img/csslogo.png")} alt="CSS" />
                <span class="tooltiptext">CSS</span>
              </div>

              <div class="tech tooltip">
                <img
                  src={require("../img/bootstraplogo.png")}
                  alt="Bootstrap"
                />
                <span class="tooltiptext">Bootstrap</span>
              </div>
              <div class="tech tooltip">
                <img src={require("../img/semantic.png")} alt="Semantic UI" />
                <span class="tooltiptext">Semantic UI</span>
              </div>
              <div class="tech tooltip">
                <img src={require("../img/expo.png")} alt="Expo" />
                <span class="tooltiptext">Expo</span>
              </div>
            </div>

            <div class="techDiv" id="backend" data-aos="fade-up">
              <div class="techDivTitle">Backend</div>
              <div class="tech tooltip">
                <img src={require("../img/nodelogo.png")} alt="Node.js" />
                <span class="tooltiptext">Node.js</span>
              </div>
              <div class="tech tooltip">
                <img src={require("../img/expresslogo.png")} alt="Express" />
                <span class="tooltiptext">Express</span>
              </div>
              <div class="tech tooltip">
                <img src={require("../img/sequelize.png")} alt="Sequelize" />
                <span class="tooltiptext">Sequelize</span>
              </div>
              <div class="tech tooltip">
                <img
                  src={require("../img/postgreslogo.png")}
                  alt="PostgreSQL"
                />
                <span class="tooltiptext">PostgreSQL</span>
              </div>
              <div class="tech tooltip">
                <img
                  src={require("../img/socket-io-logo.png")}
                  alt="Socket.io"
                />
                <span class="tooltiptext">Socket.io</span>
              </div>
              <div class="tech tooltip">
                <img src={require("../img/oauth.png")} alt="OAuth" />
                <span class="tooltiptext">OAuth</span>
              </div>
              <div class="tech tooltip">
                <img src={require("../img/passportjs.png")} alt="Passport.js" />
                <span class="tooltiptext">Passport.js</span>
              </div>
            </div>

            <div class="techDiv" id="devops" data-aos="fade-up">
              <div class="techDivTitle">DevOps</div>
              <div class="tech tooltip">
                <img src={require("../img/gitlogo.png")} alt="Git" />
                <span class="tooltiptext">Git</span>
              </div>
              <div class="tech tooltip">
                <img src={require("../img/githublogo.png")} alt="Github" />
                <span class="tooltiptext">Github</span>
              </div>
              <div class="tech tooltip">
                <img src={require("../img/npm.png")} alt="npm" />
                <span class="tooltiptext">npm</span>
              </div>
              <div class="tech tooltip">
                <img src={require("../img/webpack.png")} alt="Webpack" />
                <span class="tooltiptext">Webpack</span>
              </div>
              <div class="tech tooltip">
                <img src={require("../img/heroku.png")} alt="Heroku" />
                <span class="tooltiptext">Heroku</span>
              </div>
              <div class="tech tooltip">
                <img src={require("../img/travis.png")} alt="Travis CI" />
                <span class="tooltiptext">Travis CI</span>
              </div>
            </div>

            <div class="techDiv" id="tools" data-aos="fade-up">
              <div class="techDivTitle">Tools</div>
              <div class="tech tooltip">
                <img src={require("../img/vscode.png")} alt="VS Code" />
                <span class="tooltiptext">VS Code</span>
              </div>
              <div class="tech tooltip">
                <img src={require("../img/postman.png")} alt="Postman" />
                <span class="tooltiptext">Postman</span>
              </div>
              <div class="tech tooltip">
                <img src={require("../img/postico.png")} alt="Postico" />
                <span class="tooltiptext">Postico</span>
              </div>
            </div>

            <div class="techDiv" id="testing" data-aos="fade-up">
              <div class="techDivTitle">Testing</div>
              <div class="tech tooltip">
                <img src={require("../img/mocha.png")} alt="Mocha" />
                <span class="tooltiptext">Mocha</span>
              </div>
              <div class="tech tooltip">
                <img src={require("../img/chai.png")} alt="Chai" />
                <span class="tooltiptext">Chai</span>
              </div>
              <div class="tech tooltip">
                <img src={require("../img/jasmine.png")} alt="Jasmine" />
                <span class="tooltiptext">Jasmine</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default TechStack;
