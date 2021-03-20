import React, { Component } from "react";
import RouteMap from "../googleMap/route_map";

export default class route_card extends Component {
  componentDidMount() {
    debugger;
    this.props.fetchWaypoints();
  }
  render() {
    debugger;
    return (
      <div>
        <h1>Routes</h1>
        <ul>
          {this.props.waypoints.map((waypoint) => (
            <li key={waypoint.id}>{waypoint.description}</li>
          ))}
        </ul>
      </div>
    );
  }
}
