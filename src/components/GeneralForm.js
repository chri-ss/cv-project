import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

class GeneralForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, city, email, phone } = this.props.info;
    const { handleSubmit, handleChange } = this.props;
    return (
      <fieldset className="general">
        {" "}
        <form className="general-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleChange}
          ></input>
          <label htmlFor="city">Location</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={handleChange}
          ></input>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleChange}
          ></input>
          <label htmlFor="phone">Phone</label>
          <input
            type="phone"
            id="phone"
            value={phone}
            onChange={handleChange}
          ></input>
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

export default GeneralForm;
