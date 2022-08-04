import React, { useState } from "react";
import { FaBuilding, FaTrashAlt, FaEdit } from "react-icons/fa";
import { GoDiffAdded } from "react-icons/go";
import ExperienceForm from "./ExperienceForm";
import uniqid from "uniqid";

const Experience = () => {
  const [companies, setCompanies] = useState([
    {
      name: "cracker factory",
      title: "middle manager",
      range: "date - date",
      duties: ["salting", "managing", "getting fired"],
      editable: false,
    },
  ]);

  const [addingCompany, setAddingCompany] = useState(false);

  const [addingDuty, setAddingDuty] = useState(false);

  const editInfo = (e) => {
    setCompanies(
      companies
        .filter((company) => {
          if (addingCompany) {
            return company !== companies[companies.length - 1];
          } else {
            return company;
          }
        })
        .map((company, i) => {
          if (i === parseInt(e.currentTarget.getAttribute("index"))) {
            return { ...company, editable: true };
          } else {
            return { ...company, editable: false };
          }
        })
    );
    setAddingCompany(false);
  };

  const handleChange = (e) => {
    const id = e.target.id;
    const index = parseInt(e.target.getAttribute("index"));
    const dutiesIndex = parseInt(e.target.getAttribute("dutiesindex"));
    setCompanies(
      companies.map((company, i) => {
        if (i === index && id === "duties") {
          return {
            ...company,
            [id]: companies[index].duties.map((duty, j) => {
              if (j === dutiesIndex) {
                return (duty = e.target.value);
              } else {
                return duty;
              }
            }),
          };
        } else if (i === index) {
          return { ...company, [id]: e.target.value };
        } else {
          return { ...company };
        }
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCompanies(
      companies.map((company) => {
        if (company.editable) {
          return { ...company, editable: false };
        } else {
          return { ...company };
        }
      })
    );
    setAddingCompany(false);
    setAddingDuty(false);
  };

  const addCompanyForm = () => {
    setAddingCompany(true);
    setCompanies([
      ...companies.map((company) => {
        return { ...company, editable: false };
      }),
      {
        name: "",
        title: "",
        range: "",
        duties: [],
        editable: true,
      },
    ]);
    console.log(this.state.addingCompany);
  };

  const deleteCompany = (e) => {
    setCompanies(
      companies.filter(
        (company) =>
          company !== companies[parseInt(e.currentTarget.getAttribute("index"))]
      )
    );
  };

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
              handlechange={handleChange}
              handlesubmit={handleSubmit}
              addingduty={addingDuty}
              // addDuty={addDuty}
            />
          ) : (
            <li key={uniqid()} className="experience-list-item">
              <div className="name-title-dates">
                <div className="company-name">
                  <FaBuilding />
                  {company.name}
                </div>
                <div className="title">{company.title}</div>
                <div className="company-range">{company.range}</div>
              </div>
              <ul className="experience-points">
                {company.duties.map((duty, i) => {
                  return (
                    <li key={uniqid()} className="duty">
                      {duty}
                      <FaTrashAlt
                        index={index}
                        dutiesindex={i}
                        className="delete-icon"
                        // onClick={deleteDuty}
                      />
                    </li>
                  );
                })}
              </ul>
              <div className="edit-and-delete-company">
                <FaEdit
                  index={index}
                  size="1.5em"
                  className="edit-icon"
                  onClick={editInfo}
                />
                <FaTrashAlt
                  index={index}
                  size="1.5em"
                  className="delete-icon"
                  onClick={deleteCompany}
                />
              </div>
            </li>
          );
        })}
      </ul>
      {!addingCompany ? (
        <GoDiffAdded size="2em" className="add-icon" onClick={addCompanyForm} />
      ) : null}
    </div>
  );
};

// class Experience extends Component {
//   render() {
//     const {
//       companies,
//       addingCompany,
//       addingDuty,
//       editInfo,
//       addCompanyForm,
//       deleteCompany,
//       addDuty,
//       deleteDuty,
//       handleCompanyChange,
//       handleCompanySubmit,
//     } = this.props;
//     return (

//     );
//   }
// }

export default Experience;
