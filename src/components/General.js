import React, { Component } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import GeneralForm from "./GeneralForm";

class General extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, city, email, phone, editable } = this.props.info.general;
    return editable ? (
      <GeneralForm />
    ) : (
      <div className="general">
        <h1 className="name">{name}</h1>
        <p className="city">{city}</p>
        <div className="contact">
          {" "}
          <p className="email">{email}</p>
          <p className="p">{phone}</p>
        </div>
        <FontAwesomeIcon icon={faPenToSquare} size="2x" className="edit-icon" />
      </div>
    );
  }
}

export default General;
