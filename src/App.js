import React, { Component } from "react";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import "./styles/reset.css";
import "./styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

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
        <General />
        <Education />
        <Experience
        // companies={this.state.companies}
        // addingCompany={this.state.addingCompany}
        // addingDuty={this.state.addingDuty}
        // editInfo={this.editExperienceInfo}
        // handleCompanyChange={this.handleCompanyChange}
        // handleCompanySubmit={this.handleCompanySubmit}
        // addCompanyForm={this.addCompanyForm}
        // addDuty={this.addDuty}
        // deleteDuty={this.deleteDuty}
        // deleteCompany={this.deleteCompany}
        />
      </div>
    );
  }
}

export default App;
