import React, { Component } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircleCheck, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FaEdit } from "react-icons/fa";

import { BsCheckCircleFill } from "react-icons/bs";

class ExperienceForm extends Component {
  render() {
    const { name, title, range, duties } = this.props.company;
    const { index, handlechange, handlesubmit, addingduty, addDuty } =
      this.props;
    return (
      <fieldset className="experience">
        <form className="experience-form" onSubmit={handlesubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            index={index}
            value={name}
            onChange={handlechange}
            required
            placeholder="a current or former workplace"
          ></input>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            index={index}
            value={title}
            onChange={handlechange}
            required
            placeholder="your title"
          ></input>
          <label htmlFor="range">Range</label>
          <input
            id="range"
            type="text"
            index={index}
            value={range}
            onChange={handlechange}
            required
            placeholder="how long you worked there"
          ></input>
          <label htmlFor="duties">Duties</label>
          {duties.map((duty, i) => {
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
  }
}

export default ExperienceForm;
