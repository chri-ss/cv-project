import React, { Component } from "react";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import "./styles/reset.css";
import "./styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      general: {
        name: "Someone Person",
        city: "location",
        email: "yes@gmail.com",
        phone: "123-456-7890",
        editable: false,
      },
      schools: [
        { name: "some school", range: "date - date" },
        { name: "some school", range: "date - date" },
        { name: "some school", range: "date - date" },
      ],
      companies: [
        {
          name: "cracker factory",
          title: "middle manager",
          range: "date - date",
          duties: ["salting", "managing", "getting fired"],
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <General info={this.state}></General>
        <Education schools={this.state.schools} />
        <Experience companies={this.state.companies} />
      </div>
    );
  }
}

export default App;
