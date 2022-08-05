import React, { Component } from "react";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import "./styles/reset.css";
import "./styles/App.css";

class App extends Component {
  render() {
    return (
      <div>
        <General />
        <Education />
        <Experience />
      </div>
    );
  }
}

export default App;
