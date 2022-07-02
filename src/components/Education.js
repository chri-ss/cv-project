import React, { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { schools } = this.props;
    console.log(schools);
    return (
      <ul>
        {schools.map((school) => {
          return <li>{school}</li>;
        })}
      </ul>
    );
  }
}

export default Education;
