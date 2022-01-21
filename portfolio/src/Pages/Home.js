import React from "react";

export default function HomePage() {
  console.log("homepage!");
  return <h2>Home Page.</h2>;
}

{
  /* <BrowserRouter>
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
</BrowserRouter> */
}
