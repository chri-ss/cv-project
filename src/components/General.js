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
    <GeneralForm info={info} />
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

// class General extends Component {
//   render() {
//     const { name, city, email, phone, editable } = this.props.info.general;
//     const { handleGeneralSubmit, handleGeneralChange } = this.props;
//     return editable ? (
//       <GeneralForm
//         info={this.props.info.general}
//         handleSubmit={handleGeneralSubmit}
//         handleChange={handleGeneralChange}
//       />
//     ) : (
// <div className="general">
//   <h1 className="name">{name}</h1>
//   <p className="city">{city}</p>
//   <div className="contact">
//     {" "}
//     <p className="email">{email}</p>
//     <p className="p">{phone}</p>
//   </div>
//   <FaEdit
//     className="edit-icon"
//     size="2em"
//     onClick={this.props.editInfo}
//   />
// </div>
//     );
//   }
// }

export default General;
