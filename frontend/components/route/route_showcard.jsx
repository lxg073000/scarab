import React, { Component } from "react";
import WaypointManager from "../../util/waypoint_manager";
import { map_options_slim } from "../../util/conversions";
import { encodeOptions, options } from "../../util/map_options";

export default class route_showcard extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.createMap = this.createMap.bind(this);
    this.drawRoute = this.drawRoute.bind(this);
  }

  componentDidMount() {
    // this.createMap();
  }
  componentDidUpdate(previousProps) {
    if (previousProps.route !== this.props.route) {
      // this.createMap();
    }
  }
  createMap() {
    this.map = new google.maps.Map(this.mapNode, map_options_slim);

    // this.drawRoute(this.map);
  }

  drawRoute(map) {
    this.WaypointManager = new WaypointManager(map);

    this.WaypointManager.calcRoute(
      this.props.route.waypoints,
      this.props.route.travelMode
    );
  }

  toggleOptions() {
    document
      .getElementById(`route-options-${this.props.route.id}`)
      .classList.toggle("hide");
  }

  render() {
    return (
      <div className="route-card">
        <div className="route-tools-mini">
          <i className="fas fa-wrench" onClick={() => this.toggleOptions()}></i>
          <div
            id={`route-options-${this.props.route.id}`}
            className="route-options hide"
          >
            <p
              className="option-item"
              onClick={() =>
                this.props.history.push(`/route/${this.props.route.id}/edit`)
              }
            >
              Edit Route
            </p>
            <p
              className="option-item"
              onClick={() => this.props.history.push(`/activity/`)}
            >
              Upload Activity
            </p>
            <p
              className="option-item"
              onClick={() => this.props.deleteRoute(this.props.route.id)}
            >
              Delete Route
            </p>
            <div onClick={() => this.toggleOptions()}></div>
          </div>
        </div>
        <img
          src={`https://maps.googleapis.com/maps/api/staticmap
?size=286x184
&${encodeOptions(options)}path=color:0xfc4d02ff|weight:3|${
            this.props.route.polyline
          }&key=AIzaSyCKsZPfy5i6PECSNrTrUgj69YA-_yjnf9Y`}
          alt=""
        />

        <section className="route-details-mini">
          <h1
            className="link title accent3 bold"
            onClick={() =>
              this.props.history.push(`/route/${this.props.route.id}`)
            }
          >{`${this.props.route.name}`}</h1>
          <h2 className="description">{`${this.props.route.description}`}</h2>
          <div className="route-stats-mini">
            <h1 className="values">
              {parseFloat(this.props.route.distance)}
              <span>mi</span>
            </h1>
            <h2>Distance</h2>
          </div>
          <h2>
            Est. Moving Time{" "}
            <span className="bold">{this.props.route.duration}</span>
          </h2>
        </section>
        <h2 className="created-at">{`Created ${new Date(
          this.props.route.created_at
        ).toDateString()}`}</h2>
      </div>
    );
  }
}
