import React, { Component } from "react";
import uniqid from "uniqid";

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { schools } = this.props;
    console.log(schools);
    return (
      <div className="education">
        <h2>Education</h2>
        <ul>
          {schools.map((school) => {
            return (
              <li key={uniqid()}>
                <div className="school">≫ {school.name}</div>
                <div>
                  {" "}
                  className="range">
                  {school.range}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Education;
