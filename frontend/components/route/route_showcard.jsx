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
      // this.createMap();
      // setTimeout(this.createMap(), 20000);
      location.reload();
    }
  }
  createMap() {
    debugger;
    const mapOptions = {
      center: new google.maps.LatLng(
        parseFloat(this.props.route.center.split(",")[0]),
        parseFloat(this.props.route.center.split(",")[1])
      ),

      zoom: parseInt(this.props.route.zoom),
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);

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

  render() {
    return (
      <div className="onboard-modal-form main-container">
        <div className="">
          <div className="">
            <div className="">
              <h1 className="main-headline">
                {`${this.props.route.name} (#${this.props.route.id})`}
              </h1>
              <h3 className="main-content">{this.props.route.description}</h3>
              <div
                className="insert-box"
                id={`map-${this.props.route.id}`}
                ref={(map) => (this.mapNode = map)}
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
                <h1
                  className="main-form-btn"
                  onClick={() =>
                    location.assign(`#/route/${this.props.route.id}/edit`)
                  }
                >
                  EDIT
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
