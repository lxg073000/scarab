import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class splash_card extends Component {
  render() {
    return (
      <div>
        splash_card
        <Link to="/login">
          <button>Log In</button>
        </Link>
        <Link to="/new">
          <button>Sign Up</button>
        </Link>
      </div>
    );
  }
}
