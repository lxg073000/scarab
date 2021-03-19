import React, { Component } from "react";

export default class onboarding_form extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    debugger;
    e.preventDefault();
  }

  render() {
    return (
      <div className="main-container">
        <h1 className="main-headline">Welcome to onboarding!</h1>
        <p className="main-content">tell us about you...</p>
        <form>
          <label className="main-form-label">
            Name
            <input className="main-form-field" type="text" />
          </label>
          <label className="main-form-label">
            Profile Picture
            <input className="main-form-field" type="text" />
          </label>
          <button onClick={this.handleSubmit} className="main-form-btn">
            Update Profile
          </button>
        </form>
      </div>
    );
  }
}
