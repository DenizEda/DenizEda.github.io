import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./contents/Home";
import About from "./contents/About";
import TechStack from "./contents/TechStack";
import Projects from "./contents/Projects";
import Contact from "./contents/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      {/* <div className="App">
        <Route exact path="/"> */}
      <Home />
      {/* </Route>
        <Route path="/about"> */}
      <About />
      {/* </Route>
        <Route path="/techstack"> */}
      <TechStack />
      {/* </Route>

        <Route path="/projects"> */}
      <Projects />
      {/* </Route>
        <Route path="/contact"> */}
      <Contact />
      {/* </Route>
      </div> */}
      <Footer />
    </Router>
  );
}
export default App;
