import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

class EducationForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, range, editable } = this.props.school;
    return (
      <form>
        <label htmlFor="school">School</label>
        <input type="text" id="school" value={name}></input>
        <label htmlFor="range">Dates</label>
        <input type="text" id="range" value={range}></input>
      </form>
    );
  }
}

export default EducationForm;
