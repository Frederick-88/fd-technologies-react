import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import MainContent from "./components/Main";
import Experience from "./components/Experience/Main";
import Skills from "./components/Skills/Main";
import Contact from "./components/Contact/Main";
import About from "./components/About/Main";
// import Heroes from "./components/Heroes";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        {/* <Route path ="/heroes" component={Heroes}></Route> */}
        <Route path="/contact" component={Contact}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/skills">
          <div>
            <Skills />
          </div>
        </Route>
        <Route path="/experience">
          <div>
            <Experience />
          </div>
        </Route>
        <Route exact path="/">
          <MainContent />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
