import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ProjectList from "./views/project-list/index";
import { LoginComp } from "views/login";

function App() {
  return (
    <div className="App">
      <LoginComp />
      {/* <ProjectList /> */}
    </div>
  );
}

export default App;
