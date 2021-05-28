import React, { Component } from "react";
import WaypointManager from "../../util/waypoint_manager";

class route_thumbnail extends Component {
  constructor(props) {
    super(props);

    this.createMap = this.createMap.bind(this);
    this.drawRoute = this.drawRoute.bind(this);
  }

  componentDidUpdate(previousProps, previousState) {
    debugger;
    if (previousProps.route !== this.props.route) {
      this.createMap();
    }
  }

  createMap() {
    this.map = new google.maps.Map(this.mapNode, {
      fullscreenControl: false,
      disableDefaultUI: true,
    });

    this.drawRoute(this.map);
  }

  drawRoute(map) {
    if (this.props.route) {
      this.WaypointManager = new WaypointManager(map);

      this.WaypointManager.calcRoute(
        this.props.route.waypoints,
        this.props.route.travelMode
      );
    }
  }

  render() {
    return (
      <>
        {this.props.route ? (
          <div
            className="supply-route-map"
            id={`map-${this.props.route.id}`}
            ref={(map) => (this.mapNode = map)}
            // onLoad={this.createMap}
          ></div>
        ) : (
          <div
            className="supply-route-map"
            ref={(map) => (this.mapNode = map)}
            onLoad={this.createMap}
          ></div>
        )}
      </>
    );
  }
}

export default route_thumbnail;
