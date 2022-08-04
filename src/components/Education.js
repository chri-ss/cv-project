import React, { useState } from "react";
import EducationForm from "./EducationForm";
import { TbSchool } from "react-icons/tb";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { GoDiffAdded } from "react-icons/go";
import uniqid from "uniqid";

const Education = () => {
  const [schools, setSchools] = useState([
    { institution: "some school", range: "date - date", editable: false },
  ]);

  const [addingSchool, setAddingSchool] = useState(false);

  const editInfo = (e) => {
    setSchools(
      schools
        .filter((school) => {
          if (addingSchool) {
            return school !== schools[schools.length - 1];
          } else {
            return school;
          }
        })
        .map((school, i) => {
          if (i === parseInt(e.currentTarget.getAttribute("index"))) {
            return { ...school, editable: true };
          } else {
            return { ...school, editable: false };
          }
        })
    );
    setAddingSchool(false);
    console.log(schools);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSchools(
      schools.map((school) => {
        if (school.editable) {
          return { ...school, editable: false };
        } else {
          return { ...school };
        }
      })
    );
    setAddingSchool(false);
  };

  const handleChange = (e) => {
    const id = e.target.id;
    setSchools(
      schools.map((school, i) => {
        if (i === parseInt(e.target.getAttribute("index"))) {
          return { ...school, [id]: e.target.value };
        } else {
          return { ...school };
        }
      })
    );
  };

  const addSchoolForm = () => {
    setAddingSchool(true);
    setSchools([
      ...schools.map((school) => {
        return { ...school, editable: false };
      }),
      { institution: "", range: "", editable: true },
    ]);
    console.log(this.state);
  };

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
              handlechange={handleChange}
              handlesubmit={handleSubmit}
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
                // onClick={deleteSchool}
              />
            </li>
          );
        })}
      </ul>
      {!addingSchool ? (
        <GoDiffAdded size="2em" className="add-icon" onClick={addSchoolForm} />
      ) : null}
    </div>
  );
};

export default Education;
