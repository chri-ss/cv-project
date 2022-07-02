import React, { Component } from "react";
import General from "./components/General";
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
    };
  }

  render() {
    return <General info={this.state}></General>;
  }
}

export default App;
