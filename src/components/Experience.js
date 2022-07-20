import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ExperienceForm from "./ExperienceForm";
import uniqid from "uniqid";

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      companies,
      addingCompany,
      addingDuty,
      editInfo,
      addCompanyForm,
      handleCompanyChange,
      handleCompanySubmit,
    } = this.props;
    return (
      <div className="experience">
        <h2>Experience</h2>
        <ul>
          {companies.map((company) => {
            const index = companies.indexOf(company);

            return company.editable ? (
              <ExperienceForm
                company={company}
                index={index}
                handlechange={handleCompanyChange}
                handlesubmit={handleCompanySubmit}
                addingduty={addingDuty}
              />
            ) : (
              <li key={uniqid()} className="experience-list-item">
                <div className="name-title-dates">
                  <div className="company-name">{company.name}</div>
                  <div className="title">{company.title}</div>
                  <div className="company-range">{company.range}</div>
                </div>
                <ul className="experience-points">
                  {company.duties.map((duty) => {
                    return <li key={uniqid()}>{duty}</li>;
                  })}
                </ul>
                <div>
                  <button index={index} onClick={editInfo}>
                    E
                  </button>
                  <button>D</button>
                </div>
              </li>
            );
          })}
        </ul>
        {!addingCompany ? (
          <FontAwesomeIcon
            icon={faPlus}
            size="2x"
            className="add-icon"
            onClick={addCompanyForm}
          />
        ) : null}
      </div>
    );
  }
}

export default Experience;
