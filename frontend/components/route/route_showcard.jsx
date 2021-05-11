import React, { Component } from "react";
import Footer from "../nav/footer_white";
import { Link } from "react-router-dom";
import WaypointManager from "../../util/waypoint_manager";

export default class route_showcard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      origin: {
        lat: parseFloat(this.props.route.origin.slice(1, -1).split(",")[0]),
        lng: parseFloat(this.props.route.origin.slice(1, -1).split(",")[1]),
      },
      destination: {
        lat: parseFloat(
          this.props.route.destination.slice(1, -1).split(",")[0]
        ),
        lng: parseFloat(
          this.props.route.destination.slice(1, -1).split(",")[1]
        ),
      },
      waypoints: this.props.route.waypoints,
      // waypoints2: this.props.route.waypoints.map((latlng) =>
      //   latlng
      //     .slice(1, -1)
      //     .split(",")
      //     .map((val) => parseFloat(val))
      //     .join(",")
      // ),
      travelMode: "WALKING",
    };
    console.log("----------------");
    console.log(this.state.waypoints);
    debugger;

    this.createMap = this.createMap.bind(this);
    this.drawRoute = this.drawRoute.bind(this);
  }

  componentDidMount() {
    // console.log(this.props.route);
    this.createMap();
  }
  componentDidUpdate() {
    // console.log(this.props.route);
    this.createMap();
  }
  createMap() {
    const mapOptions = {
      center: new google.maps.LatLng(
        parseFloat(this.props.route.mapOptions[0].split(",")[0]),
        parseFloat(this.props.route.mapOptions[0].split(",")[1])
      ),

      zoom: parseInt(this.props.route.mapOptions[1]),
    };

    this.map = new google.maps.Map(
      document.getElementById(`map-${this.props.route.id}`),
      mapOptions
    );

    this.drawRoute(this.map);
  }

  drawRoute(map) {
    debugger;

    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer({
      draggable: false,
    });
    directionsRenderer.setMap(this.map);

    const waypoints = [];
    if (this.state.waypoints.length > 0) {
      for (let i = 0; i < this.state.waypoints.length; i += 2) {
        console.log(
          `${this.state.waypoints[i]},${this.state.waypoints[i + 1]}`
        );
        waypoints.push({
          location: new google.maps.LatLng(
            parseFloat(this.state.waypoints[i]),
            parseFloat(this.state.waypoints[i + 1])
          ),
          stopover: true,
        });
      }
    }

    console.log(waypoints);

    this.WaypointManager = new WaypointManager(map);
    debugger;

    debugger;
    const request = {
      origin: {
        lat: this.state.origin.lat,
        lng: this.state.origin.lng,
        zindex: 25,
      },
      destination: {
        lat: this.state.destination.lat,
        lng: this.state.destination.lng,
      },
      travelMode: "WALKING",
      waypoints: waypoints,
    };

    console.log("request");
    console.log(request);
    debugger;

    directionsService.route(request, function (result, status) {
      if (status === "OK") {
        debugger;
        directionsRenderer.setDirections(result);
      }
    });
    console.log(this.state.waypoints.length);
  }

  render() {
    return (
      <div className="onboard-modal-form main-container">
        <div className="">
          <div className="">
            <div className="">
              <h1 className="main-headline">
                Route Name: {`${this.props.route.name} ${this.props.route.id}`}
              </h1>
              <h3 className="main-content">Route description</h3>
              <div
                className="insert-box"
                id={`map-${this.props.route.id}`}
                onLoad={this.createMap}
              >
                <h1> Route Stats</h1>
              </div>
              <div className="trip-container">
                <h3> Share this Route With Friends</h3>
                <Link className="main-form-btn" to={`/routes`}>
                  Share
                </Link>
                <h1
                  className="main-form-btn"
                  onClick={() => this.props.deleteRoute(this.props.route.id)}
                >
                  DELETE
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
