import React, { Component } from "react";

export default class nav_items extends Component {
  render() {
    return (
      <div>
        <h1>Scarab Nav</h1>
        <ul>
          <li>Logo</li>
          <li>Profile Pic</li>
          <button>Logout</button>
        </ul>
      </div>
    );
  }
}
