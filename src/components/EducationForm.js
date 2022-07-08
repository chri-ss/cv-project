import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

class EducationForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { institution, range } = this.props.school;
    const { id } = this.props;
    const { handleSubmit, handleChange } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="school">School</label>
        <input
          type="text"
          name="institution"
          id={id}
          value={institution}
          onChange={handleChange}
        ></input>
        <label htmlFor="range">Dates</label>
        <input
          type="text"
          name="range"
          id={id}
          value={range}
          onChange={handleChange}
        ></input>
        <button type="submit">submit</button>
      </form>
    );
  }
}

export default EducationForm;
