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
      <BrowserRouter>
        <div className="header-container">
          <MatrixBackground />
          <div className="code-guys-text">
            <p>The Code Guys Inc</p>
          </div>

          <div className="nav-links">
            <div>
              <Link className="link" to="/home">
                Home
              </Link>
            </div>

            <div>
              <Link className="link" to="/about">
                About
              </Link>
            </div>
            <div>
              <Link className="link" to="/projects">
                Projects
              </Link>
            </div>
          </div>
        </div>

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
    </>
  );
}

export default App;
