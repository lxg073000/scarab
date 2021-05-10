import React, { Component } from "react";
import Footer from "../nav/footer_white";
import { Link } from "react-router-dom";
import WaypointManager from "../../util/waypoint_manager";

export default class route_showcard extends Component {
  constructor(props) {
    super(props);

    this.createMap = this.createMap.bind(this);
  }

  componentDidMount() {
    console.log(this.props.route);
    this.createMap();
  }
  createMap() {
    const mapOptions = {
      center: { lat: 40.7623, lng: -73.985 },
      zoom: 13,
    };
    this.map = new google.maps.Map(
      document.getElementById(`map-${this.props.route.id}`),
      mapOptions
    );
    this.WaypointManager = new WaypointManager(this.map);
    debugger;
  }

  render() {
    return (
      <div className="onboard-modal-form main-container">
        <div className="">
          <div className="">
            <div className="">
              <h1 className="main-headline">
                Route Name:{" "}
                {`${this.props.route.name} ${this.props.match.params.id}`}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
