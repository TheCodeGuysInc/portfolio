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

        <div className="enter-site-button-container"></div>

        <div className="test">
          <div>Hello</div>
          <div>GoodBye</div>
        </div>
      </div>
    </>
  );
}

export default App;
