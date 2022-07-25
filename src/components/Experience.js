import React, { Component } from "react";
import { FaBuilding, FaTrashAlt, FaEdit } from "react-icons/fa";
import { GoDiffAdded } from "react-icons/go";
import ExperienceForm from "./ExperienceForm";
import uniqid from "uniqid";

class Experience extends Component {
  render() {
    const {
      companies,
      addingCompany,
      addingDuty,
      editInfo,
      addCompanyForm,
      deleteCompany,
      addDuty,
      deleteDuty,
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
                addDuty={addDuty}
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
                          onClick={deleteDuty}
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
          <GoDiffAdded
            size="2em"
            className="add-icon"
            onClick={addCompanyForm}
          />
        ) : null}
      </div>
    );
  }
}

export default Experience;
