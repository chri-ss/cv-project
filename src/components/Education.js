import React, { Component } from "react";
import EducationForm from "./EducationForm";
import { TbSchool } from "react-icons/tb";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { GoDiffAdded } from "react-icons/go";
import uniqid from "uniqid";

class Education extends Component {
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
                  <TbSchool /> {school.institution}
                </div>
                <div className="range">{school.range}</div>
                <FaEdit
                  index={index}
                  className="edit-icon"
                  size="1.5em"
                  onClick={editInfo}
                />
                <FaTrashAlt
                  index={index}
                  className="delete-icon"
                  size="1.5em"
                  onClick={deleteSchool}
                />
              </li>
            );
          })}
        </ul>
        {!addingSchool ? (
          <GoDiffAdded
            size="2em"
            className="add-icon"
            onClick={addSchoolForm}
          />
        ) : null}
      </div>
    );
  }
}

export default Education;
