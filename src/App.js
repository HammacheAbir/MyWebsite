import React from 'react';
import logo from './logo.svg';
import './App.css';
import PageWrapper from "./Components/PageWrapper"
import Home from"./Components/Pages/Home"
import Services from "./Components/Pages/Services"
import Portfolio from"./Components/Pages/Portfolio"
import About from "./Components/Pages/About"
import Team from "./Components/Pages/Team"
import Contact from "./Components/Pages/Contact"
import {BrowserRouter as Router , Route , Links} from 'react-router-dom';

function App() {
  return (
     <Router>
        <PageWrapper>
            <Route
              exact={true}
              path="/"
              component={Home}
            />
            <switch>
              <Route
                path="/services"
                component={Services}
              />
              <Route
                path="/portfolio"
                component={Portfolio}
              />
              <Route
                path="/about"
                component={About}
              />
              <Route
                path="/team"
                component={Team}
              />
              <Route
                path="/contact"
                component={Contact}
              />
             
            </switch> 
        </PageWrapper>
    </Router>
  );
}

export default App;
