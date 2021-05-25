import React, { Component } from "react";
import RouteMap from "../googleMap/route_map";

export default class route_card extends Component {
  componentDidMount() {
    this.props.fetchWaypoints();
  }
  render() {
    return (
      <div className="main-container">
        <h1 className="main-content">Routes Points</h1>
        <ul className="main-container">
          {this.props.waypoints.map((waypoint) => (
            <li className="main-form-label" key={waypoint.id}>
              {waypoint.description}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
