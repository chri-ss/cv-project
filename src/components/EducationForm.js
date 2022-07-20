import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

class EducationForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { institution, range } = this.props.school;
    const { index } = this.props;
    const { handlesubmit, handlechange } = this.props;
    return (
      <form onSubmit={handlesubmit}>
        <label htmlFor="school">School</label>
        <input
          id="institution"
          type="text"
          index={index}
          value={institution}
          onChange={handlechange}
        ></input>
        <label htmlFor="range">Dates</label>
        <input
          id="range"
          type="text"
          index={index}
          value={range}
          onChange={handlechange}
        ></input>
        <button type="submit">
          <FontAwesomeIcon
            icon={faCircleCheck}
            size="2x"
            className="submit-icon"
          />
        </button>
      </form>
    );
  }
}

export default EducationForm;
