import React, { Component } from "react";
import WaypointManager from "../../util/waypoint_manager";

export default class route_map extends Component {
  componentDidMount() {
    const mapOptions = {
      center: { lat: 40.7623, lng: -73.985 },
      zoom: 13,
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.WaypointManager = new WaypointManager(this.map);
  }

  componentDidUpdate() {
    this.WaypointManager.updateWaypoints(this.props.waypoints);
  }

  render() {
    return <div id="map-container" ref={(map) => (this.mapNode = map)}></div>;
  }
}
