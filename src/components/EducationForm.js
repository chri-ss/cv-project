import React, { Component } from "react";
import { BsCheckCircleFill } from "react-icons/bs";

const EducationForm = () => {
  const { institution, range } = this.props.school;
  const { index, handlesubmit, handlechange } = this.props;
  return (
    <form onSubmit={handlesubmit} className="education-form">
      <label htmlFor="school">School</label>
      <input
        id="institution"
        type="text"
        index={index}
        value={institution}
        onChange={handlechange}
        required
        placeholder="a school you attended"
      ></input>
      <label htmlFor="range">Dates</label>
      <input
        id="range"
        type="text"
        index={index}
        value={range}
        onChange={handlechange}
        required
        placeholder="how long you attended"
      ></input>
      <button type="submit">
        <BsCheckCircleFill size="1.5em" className="submit-icon" />
      </button>
    </form>
  );
};

export default EducationForm;
