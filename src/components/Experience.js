import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faPlus } from "@fortawesome/free-solid-svg-icons";
import ExperienceForm from "./ExperienceForm";
import uniqid from "uniqid";

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { companies, addingExperience, editInfo } = this.props;
    return (
      <div className="experience">
        <h2>Experience</h2>
        <ul>
          {companies.map((company) => {
            const index = companies.indexOf(company);

            return company.editable ? (
              <ExperienceForm />
            ) : (
              <li key={uniqid()} className="experience-list-item">
                <div className="name-title-dates">
                  <div className="company-name">{company.name}</div>
                  <div className="title">{company.title}</div>
                  <div className="company-range">{company.range}</div>
                </div>
                <ul className="experience-points">
                  {company.duties.map((duty) => {
                    return <li>{duty}</li>;
                  })}
                </ul>
                <div>
                  <button id={index} onClick={editInfo}>
                    E
                  </button>
                  <button>D</button>
                </div>
              </li>
            );
          })}
        </ul>
        {!addingExperience ? (
          <FontAwesomeIcon icon={faPlus} size="2x" className="add-icon" />
        ) : null}
      </div>
    );
  }
}

export default Experience;
