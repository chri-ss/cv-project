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
      ],
      companies: [
        {
          name: "cracker factory",
          title: "middle manager",
          range: "date - date",
          duties: ["salting", "managing", "getting fired"],
          editable: false,
        },
      ],
      addingSchool: false,
      addingCompany: false,
      addingDuty: false,
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
      schools: this.state.schools
        .filter((school) => {
          if (this.state.addingSchool) {
            return school !== this.state.schools[this.state.schools.length - 1];
          } else {
            return school;
          }
        })
        .map((school) => {
          if (
            this.state.schools.indexOf(school) ===
            parseInt(e.currentTarget.getAttribute("index"))
          ) {
            return { ...school, editable: true };
          } else {
            return { ...school, editable: false };
          }
        }),
      addingSchool: false,
    });
    console.log(e.currentTarget);
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
    const id = e.target.id;
    console.log(e.target.value);
    this.setState({
      schools: this.state.schools.map((school) => {
        if (
          this.state.schools.indexOf(school) ===
          parseInt(e.target.getAttribute("index"))
        ) {
          return { ...school, [id]: e.target.value };
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
        ...this.state.schools.map((school) => {
          return { ...school, editable: false };
        }),
        { institution: "", range: "", editable: true },
      ],
    });
    console.log(this.state);
  };

  deleteSchool = (e) => {
    this.setState({
      schools: this.state.schools.filter(
        (school) =>
          school !==
          this.state.schools[parseInt(e.currentTarget.getAttribute("index"))]
      ),
    });
  };

  editExperienceInfo = (e) => {
    console.log(e.target);
    this.setState({
      companies: this.state.companies
        .filter((company) => {
          if (this.state.addingCompany) {
            return (
              company !== this.state.companies[this.state.companies.length - 1]
            );
          } else {
            return company;
          }
        })
        .map((company) => {
          if (
            this.state.companies.indexOf(company) ===
            parseInt(e.currentTarget.getAttribute("index"))
          ) {
            return { ...company, editable: true };
          } else {
            return { ...company, editable: false };
          }
        }),
      addingCompany: false,
    });
  };

  handleCompanySubmit = (e) => {
    e.preventDefault();
    console.log(this.state.companies);
    this.setState({
      companies: this.state.companies.map((company) => {
        if (company.editable) {
          return { ...company, editable: false };
        } else {
          return { ...company };
        }
      }),
      addingCompany: false,
      addingDuty: false,
    });
    console.log(this.state.companies);
  };

  handleCompanyChange = (e) => {
    const id = e.target.id;
    const index = parseInt(e.target.getAttribute("index"));
    const dutiesIndex = parseInt(e.target.getAttribute("dutiesindex"));
    this.setState({
      companies: this.state.companies.map((company) => {
        if (
          this.state.companies.indexOf(company) === index &&
          id === "duties"
        ) {
          return {
            ...company,
            [id]: this.state.companies[index].duties.map((duty, i) => {
              if (i === dutiesIndex) {
                return (duty = e.target.value);
              } else {
                return duty;
              }
            }),
          };
        } else if (this.state.companies.indexOf(company) === index) {
          return { ...company, [id]: e.target.value };
        } else {
          return { ...company };
        }
      }),
    });
    console.log(e.target.getAttribute("dutiesindex"));
  };

  addCompanyForm = () => {
    this.setState({
      addingCompany: true,
      companies: [
        ...this.state.companies.map((company) => {
          return { ...company, editable: false };
        }),
        {
          name: "",
          title: "",
          range: "",
          duties: [],
          editable: true,
        },
      ],
    });
    console.log(this.state.addingCompany);
  };

  deleteCompany = (e) => {
    this.setState({
      companies: this.state.companies.filter(
        (company) =>
          company !==
          this.state.companies[parseInt(e.currentTarget.getAttribute("index"))]
      ),
    });
  };

  addDuty = (e) => {
    console.log(e.target);
    const index = parseInt(e.currentTarget.getAttribute("index"));
    this.setState({
      companies: this.state.companies.map((company, i) => {
        if (i === index) {
          return { ...company, duties: [...company.duties, ""] };
        } else {
          return { ...company, duties: [...company.duties] };
        }
      }),
      addingDuty: true,
    });
  };

  deleteDuty = (e) => {
    const index = parseInt(e.currentTarget.getAttribute("index"));
    const dutiesIndex = parseInt(e.currentTarget.getAttribute("dutiesindex"));
    this.setState({
      companies: this.state.companies.map((company, i) => {
        if (i === index) {
          return {
            ...company,
            duties: company.duties.filter((duty) => {
              return duty !== company.duties[dutiesIndex];
            }),
          };
        } else {
          return { company, duties: [...company.duties] };
        }
      }),
    });
    console.log(this.state.companies);
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
          deleteSchool={this.deleteSchool}
        />
        <Experience
          companies={this.state.companies}
          addingCompany={this.state.addingCompany}
          addingDuty={this.state.addingDuty}
          editInfo={this.editExperienceInfo}
          handleCompanyChange={this.handleCompanyChange}
          handleCompanySubmit={this.handleCompanySubmit}
          addCompanyForm={this.addCompanyForm}
          addDuty={this.addDuty}
          deleteDuty={this.deleteDuty}
          deleteCompany={this.deleteCompany}
        />
      </div>
    );
  }
}

export default App;
