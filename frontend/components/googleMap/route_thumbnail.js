import React, { Component } from "react";
import WaypointManager from "../../util/waypoint_manager";
import { encodeOptions, options } from "../../util/map_options";

class route_thumbnail extends Component {
  constructor(props) {
    super(props);

    this.createMap = this.createMap.bind(this);
    this.drawRoute = this.drawRoute.bind(this);
  }

  // componentDidUpdate(previousProps, previousState) {
  //   if (previousProps.route !== this.props.route) {
  //     this.createMap();
  //   }
  // }

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
    if (this.props.route) {
      this.WaypointManager.calcRoute(
        this.props.route.waypoints,
        this.props.route.travelMode
      );
    } else {
      this.WaypointManager.calcRoute();
    }
  }

  render() {
    return (
      <>
        {this.props.route ? (
          <img
            className="supply-route-map"
            src={`https://maps.googleapis.com/maps/api/staticmap
?size=640x493
&${encodeOptions(options)}path=color:0xfc4d02ff|weight:3|enc:${
              this.props.route.polyline
            }&key=${window.googleAPIKey}`}
            alt=""
          />
        ) : (
          <div className="supply-route-map"></div>
        )}
      </>
    );
  }
}

export default route_thumbnail;
