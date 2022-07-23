/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import "./style/main.scss"
import React from 'react';
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";


import NavigationContainer from './components/navigation/navigation-container';
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import Skills from "./components/pages/skills";
import NoMatch from './components/pages/no-match';
import Portfolio from "./components/pages/portfolio";



function App () {
  // render() {
    return (
      <div className="container">
        <Router>
          <div>
            <NavigationContainer />
            <Switch>
              <Route exact path ="/" element={<Home />} />
              <Route path ="/about-me" element={<About />} />
              <Route path ="/contact" element={<Contact />} />
              <Route path ="/skills" element={<Skills />} />
              <Route path ="/portfolio" element={<Portfolio />} />
              <Route path='*' element={<NoMatch />} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  // }
}

export default App;
