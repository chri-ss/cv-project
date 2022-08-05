import React from "react";
import { FaEdit } from "react-icons/fa";

import { BsCheckCircleFill } from "react-icons/bs";

const ExperienceForm = ({
  company,
  index,
  handlechange,
  handlesubmit,
  addingduty,
  addDuty,
}) => {
  return (
    <fieldset className="experience">
      <form className="experience-form" onSubmit={handlesubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          index={index}
          value={company.name}
          onChange={handlechange}
          required
          placeholder="a current or former workplace"
        ></input>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          index={index}
          value={company.title}
          onChange={handlechange}
          required
          placeholder="your title"
        ></input>
        <label htmlFor="range">Range</label>
        <input
          id="range"
          type="text"
          index={index}
          value={company.range}
          onChange={handlechange}
          required
          placeholder="how long you worked there"
        ></input>
        <label htmlFor="duties">Duties</label>
        {company.duties.map((duty, i) => {
          return (
            <input
              id="duties"
              type="text"
              index={index}
              dutiesindex={i}
              value={duty}
              onChange={handlechange}
              required
              placeholder="what you did there"
            ></input>
          );
        })}
        {!addingduty ? (
          <FaEdit index={index} className="add-icon" onClick={addDuty} />
        ) : null}
        <button type="submit">
          <BsCheckCircleFill size="1.5em" className="submit-icon" />
        </button>
      </form>
    </fieldset>
  );
};

export default ExperienceForm;
