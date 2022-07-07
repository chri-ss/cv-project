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
        { name: "some school", range: "date - date", editable: false },
        { name: "some school", range: "date - date", editable: false },
        { name: "some school", range: "date - date", editable: false },
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

  editGeneralInfo = () => {
    const current = this.state.general;
    this.setState({ general: { ...current, editable: true } });
  };

  handleGeneralSubmit = (e) => {
    e.preventDefault();
    const current = this.state.general;
    this.setState({ general: { ...current, editable: false } });
    console.log(this.state.general);
  };

  handleGeneralChange = (e) => {
    console.log(e.target);
    const id = e.target.id;
    const current = this.state.general;
    this.setState({
      general: { ...current, [id]: e.target.value },
    });
  };

  editSchoolInfo = (e) => {
    this.setState({
      schools: this.state.schools.map((school) => {
        if (this.state.schools.indexOf(school) === parseInt(e.target.id)) {
          return { ...school, editable: true };
        } else {
          return { ...school, editable: false };
        }
      }),
    });
  };

  render() {
    return (
      <div>
        <General
          info={this.state}
          editInfo={this.editGeneralInfo}
          handleGeneralSubmit={this.handleGeneralSubmit}
          handleGeneralChange={this.handleGeneralChange}
        ></General>
        <Education
          schools={this.state.schools}
          editInfo={this.editSchoolInfo}
        />
        <Experience companies={this.state.companies} />
      </div>
    );
  }
}

export default App;
