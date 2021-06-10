import React, { Component } from "react";
import Footer from "../nav/footer_white";
import { Link } from "react-router-dom";
import WaypointManager from "../../util/waypoint_manager";

export default class route_showcard extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.createMap = this.createMap.bind(this);
    this.drawRoute = this.drawRoute.bind(this);
  }

  componentDidMount() {
    this.createMap();
    // setTimeout(this.createMap(), 20000);
  }
  componentDidUpdate(previousProps, previousState) {
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
      this.createMap();
      // setTimeout(this.createMap(), 20000);
      // location.reload();
    }
  }
  createMap() {
    this.map = new google.maps.Map(this.mapNode, {
      fullscreenControl: false,
      disableDefaultUI: true,
      styles: [
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "poi.park",
          elementType: "labels.text",
          stylers: [{ visibility: "on" }],
        },
        {
          featureType: "transit",
          elementType: "all",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "landscape.natural",
          elementType: "geometry",
          stylers: [
            {
              color: "#dde2e3",
            },
            {
              visibility: "on",
            },
          ],
        },
        {
          featureType: "poi.park",
          elementType: "all",
          stylers: [
            {
              color: "#c6e8b3",
            },
            {
              visibility: "on",
            },
          ],
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#8493a9",
            },
            {
              visibility: "on",
            },
          ],
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#ffffff",
            },
            {
              visibility: "on",
            },
          ],
        },
        {
          featureType: "poi.park",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#c6e8b3",
            },
            {
              visibility: "on",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "geometry.fill",
          stylers: [
            {
              visibility: "on",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "geometry.stroke",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "labels",
          stylers: [
            {
              visibility: "on",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [
            {
              visibility: "on",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "labels.text.stroke",
          stylers: [
            {
              visibility: "on",
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#c1d1d6",
            },
            {
              visibility: "on",
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#a9b8bd",
            },
            {
              visibility: "on",
            },
          ],
        },
        {
          featureType: "road.local",
          elementType: "all",
          stylers: [
            {
              color: "#f8fbfc",
            },
          ],
        },
        {
          featureType: "road.local",
          elementType: "labels.text",
          stylers: [
            {
              color: "#979a9c",
            },
            {
              visibility: "on",
            },
            {
              weight: 0.5,
            },
          ],
        },
        {
          featureType: "road.local",
          elementType: "labels.text.fill",
          stylers: [
            {
              visibility: "on",
            },
            {
              color: "#827e7e",
            },
          ],
        },
        {
          featureType: "road.local",
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#3b3c3c",
            },
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#a6cbe3",
            },
            {
              visibility: "on",
            },
          ],
        },
      ],
    });

    this.drawRoute(this.map);
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
