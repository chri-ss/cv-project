import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faPlus,
  faSchool,
} from "@fortawesome/free-solid-svg-icons";
import EducationForm from "./EducationForm";
import uniqid from "uniqid";

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      schools,
      addingSchool,
      handleSchoolChange,
      handleSchoolSubmit,
      addSchoolForm,
      editInfo,
      deleteSchool,
    } = this.props;
    return (
      <div className="education">
        <h2>Education</h2>
        <ul>
          {schools.map((school) => {
            const index = schools.indexOf(school);
            return school.editable ? (
              <EducationForm
                school={school}
                index={index}
                handlechange={handleSchoolChange}
                handlesubmit={handleSchoolSubmit}
              />
            ) : (
              <li key={uniqid()} className="school-and-range">
                <div className="school">
                  <FontAwesomeIcon icon={faSchool} /> {school.institution}
                </div>
                <div className="range">{school.range}</div>
                <button
                  index={index}
                  icon={faPenToSquare}
                  className="edit-icon"
                  onClick={editInfo}
                >
                  E
                </button>
                <button
                  index={index}
                  className="delete-icon"
                  onClick={deleteSchool}
                >
                  D
                </button>
              </li>
            );
          })}
        </ul>
        {!addingSchool ? (
          <FontAwesomeIcon
            icon={faPlus}
            size="2x"
            className="add-icon"
            onClick={addSchoolForm}
          />
        ) : null}
      </div>
    );
  }
}

export default Education;
