import React from "react";
import "./App.css";
import { HashRouter as Router } from "react-router-dom";
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
      <Home />
      <About />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </Router>
  );
}
export default App;
