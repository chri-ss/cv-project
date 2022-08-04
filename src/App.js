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
