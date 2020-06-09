import React, { Component } from "react";
import { Link } from "react-router-dom";

class ChildComponent extends Component {
  render() {
    return (
      <div>
        {this.props.knights.map((knight) => (
          <li key={knight.id}>
            <Link to={`/homePage/${knight.id}`}>{knight.name}</Link>
            <button
              onClick={() => deleteKnight(knight.id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </li>
        ))}
      </div>
    );
  }
}

export default ChildComponent;
