import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faPlus } from "@fortawesome/free-solid-svg-icons";
import EducationForm from "./EducationForm";
import uniqid from "uniqid";

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { schools } = this.props;
    return (
      <div className="education">
        <h2>Education</h2>
        <ul>
          {schools.map((school) => {
            const index = schools.indexOf(school);
            return school.editable ? (
              <EducationForm school={school} />
            ) : (
              <li key={uniqid()} className="school-and-range">
                <div className="school">≫ {school.name}</div>
                <div className="range">{school.range}</div>
                <button
                  id={index}
                  icon={faPenToSquare}
                  className="edit-icon"
                  onClick={this.props.editInfo}
                >
                  Y
                </button>
              </li>
            );
          })}
        </ul>
        <FontAwesomeIcon icon={faPlus} size="2x" className="add-icon" />
      </div>
    );
  }
}

export default Education;
