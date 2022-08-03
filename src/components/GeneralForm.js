import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";

const GeneralForm = (props) => {
  const info = props.info;
  const setInfo = props.setInfo;

  const handleSubmit = (e) => {
    e.preventDefault();
    setInfo({ ...info, editable: false });
    console.log(info);
  };

  const handleChange = (e) => {
    const id = e.target.id;
    setInfo({ ...info, [id]: e.target.value });
  };

  return (
    <fieldset className="general">
      {" "}
      <form className="general-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={info.name}
          onChange={handleChange}
          required
        ></input>
        <label htmlFor="city">Location</label>
        <input
          type="text"
          id="city"
          value={info.city}
          onChange={handleChange}
          required
        ></input>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={info.email}
          onChange={handleChange}
          required
        ></input>
        <label htmlFor="phone">Phone</label>
        <input
          type="phone"
          id="phone"
          value={info.phone}
          onChange={handleChange}
          required
        ></input>
        <button type="submit">
          <BsCheckCircleFill size="2em" className="submit-icon" />
        </button>
      </form>
    </fieldset>
  );
};

export default GeneralForm;
