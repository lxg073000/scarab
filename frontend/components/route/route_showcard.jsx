import React, { Component } from "react";
import Footer from "../nav/footer_white";
import { Link } from "react-router-dom";
import WaypointManager from "../../util/waypoint_manager";

export default class route_showcard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    debugger;

    this.createMap = this.createMap.bind(this);
    this.drawRoute = this.drawRoute.bind(this);
  }

  componentDidMount() {
    // console.log(this.props.route);
    this.createMap();
    // setTimeout(this.createMap(), 20000);
  }
  componentDidUpdate(previousProps, previousState) {
    debugger;
    // console.log(this.props.route);
    if (previousProps.route !== this.props.route) {
      //   console.log(this.props.route);
      //   console.log(previousProps.route);
      //   this.setState({
      //     origin: {
      //       lat: parseFloat(this.props.route.origin.slice(1, -1).split(",")[0]),
      //       lng: parseFloat(this.props.route.origin.slice(1, -1).split(",")[1]),
      //     },
      //     destination: {
      //       lat: parseFloat(
      //         this.props.route.destination.slice(1, -1).split(",")[0]
      //       ),
      //       lng: parseFloat(
      //         this.props.route.destination.slice(1, -1).split(",")[1]
      //       ),
      //     },
      //     waypoints: this.props.route.waypoints,
      //     travelMode: "WALKING",
      //   });
      // }
      this.createMap();
      // setTimeout(this.createMap(), 20000);
      // location.reload();
    }
  }
  createMap() {
    debugger;

    this.map = new google.maps.Map(this.mapNode, { fullscreenControl: false });

    this.drawRoute(this.map);
  }

  drawRoute(map) {
    debugger;
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
                location.assign(`#/route/${this.props.route.id}/edit`)
              }
            >
              Edit Route
            </p>
            <p className="option-item">Duplicate Route</p>
            <p
              className="option-item"
              onClick={() => this.props.deleteRoute(this.props.route.id)}
            >
              Delete Route
            </p>
            <div
              // className="close-layer"
              onClick={() => this.toggleOptions()}
            ></div>
          </div>
        </div>
        <section
          className="thumbnail-map"
          id={`map-${this.props.route.id}`}
          ref={(map) => (this.mapNode = map)}
          onLoad={this.createMap}
        ></section>

        <section className="route-details-mini">
          <h1 className="link title accent3 bold">{`${this.props.route.name}`}</h1>
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
