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
              // handlechange={handleSchoolChange}
              // handlesubmit={handleSchoolSubmit}
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
      {!addingSchool ? <GoDiffAdded size="2em" className="add-icon" /> : null}
    </div>
  );
};

// class Education extends Component {
//   render() {
//     const {
//       schools,
//       addingSchool,
//       handleSchoolChange,
//       handleSchoolSubmit,
//       addSchoolForm,
//       editInfo,
//       deleteSchool,
//     } = this.props;
//     return (

//     );
//   }
// }

export default Education;
