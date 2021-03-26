import React, { Component } from "react";
import Footer from "../nav/footer_white";
import { Link } from "react-router-dom";
import WaypointManager from "../../util/waypoint_manager";

export default class route_index_card extends Component {
  componentDidMount() {
    debugger;
    this.props.fetchRoutes();
    const mapOptions = {
      center: { lat: 40.7623, lng: -73.985 },
      zoom: 13,
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.WaypointManager = new WaypointManager(this.map);
    google.maps.event.addListener(this.map, "click", (e) => {
      this.drawRouteDirections();
    });
    // this.drawRouteDirections();
  }

  drawRouteDirections() {
    console.log(this.props.routes[0]);
    this.WaypointManager.renderUserRoutes(this.props.routes[0]);
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
              {" "}
              <div
                id="map-show-container"
                ref={(map) => (this.mapNode = map)}
              ></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
