import React, { Component } from "react";
import WaypointManager from "../../util/waypoint_manager";

export default class route_map extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const mapOptions = {
      center: { lat: 40.7623, lng: -73.985 },
      zoom: 13,
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.WaypointManager = new WaypointManager(this.map);

    google.maps.event.addListener(this.map, "click", (e) => {
      this.addClickMarker(e.latLng, this.map);
    });
  }

  componentWillUnmount() {
    google.maps.event.clearInstanceListeners(this.map);
  }

  // componentDidUpdate() {
  //   this.WaypointManager.updateWaypoints(this.props.waypoints);
  // }

  clearClickedMarker(marker) {
    debugger;
    const id = marker.latLng.toString();
    this.state[`${id}`].waypoint.setMap(null);

    this.forceUpdate(this.removeMarkerFromState(id));
    console.log(this.state);
  }

  removeMarkerFromState(id) {
    this.setState((state) => {
      let newState = Object.assign({}, state);
      console.log(newState);
      delete newState[id];
      console.log(newState);
      return newState;
    });
  }

  addClickMarker(location, map) {
    debugger;
    let index = Object.keys(this.state).length;
    let clickedWaypoint = new google.maps.Marker({
      position: location,
      label: (Object.keys(this.state).length + 1).toString(),
      draggable: true,
      map: map,
      zIndex: index === 0 ? 25 : null,
    });

    google.maps.event.addListener(clickedWaypoint, "click", (e) => {
      this.clearClickedMarker(e);
    });

    let newPos = {
      lat: location.lat(),
      lng: location.lng(),
      waypoint: clickedWaypoint,
    };
    const oldState = Object.assign(this.state);
    const newState = Object.assign(oldState, { [location.toString()]: newPos });
    this.setState(newState);
  }

  drawRouteDirections() {
    console.log(this.state);
    this.WaypointManager.updateWaypoints(this.state);
    this.clearAllClicks();
  }
  clearAllClicks() {
    debugger;
    console.log(this.state);
    Object.values(this.state).forEach((value) => value.waypoint.setMap(null));

    this.setState();
    this.forceUpdate();
    console.log(this.state);
  }

  undo() {}
  redo() {}

  render() {
    return (
      <div>
        <div id="map-container" ref={(map) => (this.mapNode = map)}></div>
        <button onClick={() => this.drawRouteDirections()}>Make Route</button>
        <button onClick={() => this.clearAllClicks()}>CLEAR MAP</button>
        <button onClick={() => this.clearAllClicks()}>undo</button>
        <button onClick={() => this.clearAllClicks()}>redo</button>
      </div>
    );
  }
}
