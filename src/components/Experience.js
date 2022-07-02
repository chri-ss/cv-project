import React, { Component } from "react";
import uniqid from "uniqid";

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { companies } = this.props;
    return (
      <div>
        <h2>Experience</h2>
        <ul>
          {companies.map((company) => {
            return (
              <li key={uniqid()}>
                <div>
                  <div>{company.name}</div>
                  <div>{company.title}</div>
                </div>
                <div>{company.range}</div>
                <ul>
                  {company.duties.map((duty) => {
                    return <li>{duty}</li>;
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Experience;
