import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserInfo from "../user/user_profile_card";

export default class onboarding_form extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.currentUser);
  }
  componentDidUpdate() {
    // this.props.receiveCurrentUser(this.props.currentUser.id);
    console.log(this.state.currentUser);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    console.log(this.props);
    const { defaultRoute, currentUser } = this.props;
    return (
      <div className="dashboard-shell">
        <div className="dashboard-container">
          <section className="user-pane">
            <UserInfo />
          </section>
          <section className="activity-pane">
            <p>No activities...</p>
            <h1>Make Your First Supply Route!</h1>
          </section>
          <section className="about-pane">
            <h1>CONTACT ME HERE</h1>
            <h1>CONTACT ME HERE</h1>
            <h1>CONTACT ME HERE</h1>
            <h1>CONTACT ME HERE</h1>
          </section>
        </div>
      </div>
    );
  }
}
