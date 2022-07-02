import React, { Component } from "react";
import General from "./components/General";
import Education from "./components/Education";
import "./styles/reset.css";
import "./styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Someone Person",
      city: "New Westminster, BC, Canada",
      email: "yes@gmail.com",
      phone: "123-456-7890",
      schools: [
        { name: "some school", range: "date - date" },
        { name: "some school", range: "date - date" },
        { name: "some school", range: "date - date" },
      ],
    };
  }

  render() {
    return (
      <div>
        <General info={this.state}></General>
        <Education schools={this.state.schools} />
      </div>
    );
  }
}

export default App;
