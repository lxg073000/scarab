import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class onboarding_form extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.props.fetchWaypoints;
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    const { defaultRoute } = this.props;
    return (
      <div className="main-container">
        <h1 className="main-headline">Welcome to onboarding!</h1>
        <p className="main-content">tell us about you...</p>
        <form className="main-form">
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
          <Link className="main-form-btn" to={`/route/1`}>
            DefaultRoute
          </Link>
        </form>
      </div>
    );
  }
}
