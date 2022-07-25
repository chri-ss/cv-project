import React, { Component } from "react";
import { BsCheckCircleFill } from "react-icons/bs";

class GeneralForm extends Component {
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
            required
          ></input>
          <label htmlFor="city">Location</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={handleChange}
            required
          ></input>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleChange}
            required
          ></input>
          <label htmlFor="phone">Phone</label>
          <input
            type="phone"
            id="phone"
            value={phone}
            onChange={handleChange}
            required
          ></input>
          <button type="submit">
            <BsCheckCircleFill size="2em" className="submit-icon" />
          </button>
        </form>
      </fieldset>
    );
  }
}

export default GeneralForm;
