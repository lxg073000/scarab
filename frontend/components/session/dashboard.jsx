import React, { Component } from "react";
import UserInfo from "../user/user_profile_card";
import Activity from "../activity/activity_feed_container";
import About from "../nav/about";

export default class dashboard extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.currentUser);
    this.props.fetchRoutes();
    this.props.fetchBuggouts();
  }
  componentDidUpdate() {
    // this.props.receiveCurrentUser(this.props.currentUser.id);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="component-container-feed">
        <div className="dashboard-shell">
          <div className="dashboard-container">
            <section className="user-pane">
              <UserInfo
                buggouts={this.props.buggouts}
                routes={this.props.routes}
              />
            </section>
            <section className="activity-pane">
              <Activity />
            </section>
            <section className="about-pane">
              <About />
            </section>
          </div>
        </div>
      </div>
    );
  }
}
