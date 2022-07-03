import React, { Component } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

class GeneralForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <fieldset className="general">
        {" "}
        <form className="general-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name"></input>
          <label htmlFor="location">Location</label>
          <input type="text" id="location"></input>
          <label htmlFor="email">Email</label>
          <input type="email" id="email"></input>
          <label htmlFor="phone">Phone</label>
          <input type="phone" id="phone"></input>
        </form>
        <FontAwesomeIcon
          icon={faCircleCheck}
          size="2x"
          className="submit-icon"
        />
      </fieldset>
    );
  }
}

export default GeneralForm;
