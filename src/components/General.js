import React, { Component } from "react";

class General extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.info);
    const { name, city, email, phone } = this.props.info;
    return (
      <div class="general">
        <h1 className="name">{name}</h1>
        <p className="city">{city}</p>
        <div className="contact">
          {" "}
          <p className="email">{email}</p>
          <p className="p">{phone}</p>
        </div>
      </div>
    );
  }
}

export default General;
