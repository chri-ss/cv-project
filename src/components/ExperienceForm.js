import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faPlus } from "@fortawesome/free-solid-svg-icons";

class ExperienceForm extends Component {
  constructor(props) {
    super(props);
  }

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
          ></input>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            index={index}
            value={title}
            onChange={handlechange}
          ></input>
          <label htmlFor="range">Range</label>
          <input
            id="range"
            type="text"
            index={index}
            value={range}
            onChange={handlechange}
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
              ></input>
            );
          })}
          {!addingduty ? (
            <FontAwesomeIcon
              icon={faPlus}
              index={index}
              className="add-icon"
              onClick={addDuty}
            />
          ) : null}
          <button type="submit">
            <FontAwesomeIcon
              icon={faCircleCheck}
              size="2x"
              className="submit-icon"
            />
          </button>
        </form>
      </fieldset>
    );
  }
}

export default ExperienceForm;
