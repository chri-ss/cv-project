import React, { Component } from "react";
import { FaEdit } from "react-icons/fa";
import GeneralForm from "./GeneralForm";

class General extends Component {
  render() {
    const { name, city, email, phone, editable } = this.props.info.general;
    const { handleGeneralSubmit, handleGeneralChange } = this.props;
    return editable ? (
      <GeneralForm
        info={this.props.info.general}
        handleSubmit={handleGeneralSubmit}
        handleChange={handleGeneralChange}
      />
    ) : (
      <div className="general">
        <h1 className="name">{name}</h1>
        <p className="city">{city}</p>
        <div className="contact">
          {" "}
          <p className="email">{email}</p>
          <p className="p">{phone}</p>
        </div>
        <FaEdit
          className="edit-icon"
          size="2em"
          onClick={this.props.editInfo}
        />
      </div>
    );
  }
}

export default General;
