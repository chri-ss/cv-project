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
        { institution: "some school", range: "date - date", editable: false },
        { institution: "some school", range: "date - date", editable: false },
        { institution: "some school", range: "date - date", editable: false },
      ],
      companies: [
        {
          name: "cracker factory",
          title: "middle manager",
          range: "date - date",
          duties: ["salting", "managing", "getting fired"],
        },
      ],
      addingSchool: false,
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

  handleSchoolSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    this.setState({
      schools: this.state.schools.map((school) => {
        if (school.editable) {
          return { ...school, editable: false };
        } else {
          return { ...school };
        }
      }),
      addingSchool: false,
    });
  };

  handleSchoolChange = (e) => {
    const name = e.target.name;
    console.log(e.target.value);
    this.setState({
      schools: this.state.schools.map((school) => {
        if (this.state.schools.indexOf(school) === parseInt(e.target.id)) {
          return { ...school, [name]: e.target.value };
        } else {
          return { ...school };
        }
      }),
    });
    console.log(this.state);
  };

  addSchoolForm = () => {
    this.setState({
      addingSchool: true,
      schools: [
        ...this.state.schools,
        { institution: "", range: "", editable: true },
      ],
    });
    console.log(this.state);
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
          addingSchool={this.state.addingSchool}
          editInfo={this.editSchoolInfo}
          handleSchoolChange={this.handleSchoolChange}
          handleSchoolSubmit={this.handleSchoolSubmit}
          addSchoolForm={this.addSchoolForm}
        />
        <Experience companies={this.state.companies} />
      </div>
    );
  }
}

export default App;
