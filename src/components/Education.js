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
              <div>
                <li key={uniqid()} className="school">
                  ≫ {school.name}
                </li>
                <li key={uniqid()} className="range">
                  {school.range}
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Education;
