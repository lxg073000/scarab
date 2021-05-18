import React, { Component } from "react";
import Footer from "../nav/footer_white";
import { Link } from "react-router-dom";
// import WaypointManager from "../../util/waypoint_manager";
import Route from "./route_showcard_container";

export default class route_index_card extends Component {
  constructor(props) {
    super(props);
    this.drawRoute = this.drawRoute.bind(this);
  }

  componentDidMount() {
    this.props.fetchRoutes();
  }

  componentDidUpdate() {
    debugger;
  }

  drawRouteDirections() {
    console.log(this.props.routes[0]);
    this.WaypointManager.renderUserRoutes(this.props.routes[0]);
  }

  drawRoute() {
    debugger;
  }

  render() {
    return (
      <div className="fullscreen-main">
        <div className="fix">
          <div className="main-sidebar">
            <div className="profile-container">
              <Link className="main-form-btn" to={`/routes`}>
                Create New Route
              </Link>
            </div>
          </div>
          <div className="primary-main-vert">
            <div className="main-primary-content">
              {this.props.routes.map((route, idx) => (
                <Route route={route} key={idx} />
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
