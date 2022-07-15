import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

class ExperienceForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <fieldset className="experience">
        <form className="experience-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name"></input>
          <label htmlFor="title">Title</label>
          <input type="text" id="title"></input>
          <label htmlFor="range">Range</label>
          <input type="text" id="range"></input>
          <label htmlFor="duties">Duties</label>
          <input type="text" id="duties"></input>
          <FontAwesomeIcon icon={faPlus} />
        </form>
      </fieldset>
    );
  }
}

export default ExperienceForm;
