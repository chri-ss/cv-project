import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import GeneralForm from "./GeneralForm";

const General = () => {
  const [info, setInfo] = useState({
    name: "Someone Person",
    city: "location",
    email: "yes@gmail.com",
    phone: "123-456-7890",
    editable: false,
  });

  const editInfo = () => {
    setInfo({ ...info, editable: true });
  };

  return info.editable ? (
    <GeneralForm info={info} setInfo={setInfo} />
  ) : (
    <div className="general">
      <h1 className="name">{info.name}</h1>
      <p className="city">{info.city}</p>
      <div className="contact">
        {" "}
        <p className="email">{info.email}</p>
        <p className="p">{info.phone}</p>
      </div>
      <FaEdit className="edit-icon" size="2em" onClick={editInfo} />
    </div>
  );
};

export default General;
