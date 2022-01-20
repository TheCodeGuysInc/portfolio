import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useRef } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  useHistory,
  Redirect,
  Link,
} from "react-router-dom";

import About from "./Pages/About";
import HomePage from "./Pages/Home";
import Projects from "./Pages/Projects";
import MatrixBackground from "./Components/MatrixEffect";

function App() {
  return (
    <>
      <div>
        <MatrixBackground />

        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/home">
              <HomePage />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
