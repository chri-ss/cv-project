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
    const { companies } = this.props;
    return (
      <div className="experience">
        <h2>Experience</h2>
        <ul>
          {companies.map((company) => {
            return (
              <li key={uniqid()} className="experience-list-item">
                <div className="name-and-title">
                  <div>{company.name}</div> - <div>{company.title}</div>
                </div>
                <div>{company.range}</div>
                <ul className="experience-points">
                  {company.duties.map((duty) => {
                    return <li>{duty}</li>;
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
        <FontAwesomeIcon icon={faPlus} size="2x" className="add-icon" />
      </div>
    );
  }
}

export default Experience;
