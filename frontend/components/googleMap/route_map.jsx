import React, { Component } from "react";
import WaypointManager from "../../util/waypoint_manager";
import { useHistory } from "react-router-dom";
// import RouteForm from "../route/route_form";

export default class route_map extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.count = [];
    this.index = this.count.length;
    this.hasDrawn = false;
    this.mapData = [];
    this.submit = "hide";
  }

  componentDidMount() {
    const mapOptions = {
      center: { lat: 40.7623, lng: -73.985 },
      zoom: 13,
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.WaypointManager = new WaypointManager(this.map);

    google.maps.event.addListener(this.map, "click", (e) => {
      this.addMarkerToMap(e.latLng, this.map);
    });
  }

  componentWillUnmount() {
    google.maps.event.clearInstanceListeners(this.map);
  }

  addMarkerToMap(latLng, map) {
    debugger;

    let gMarker = new google.maps.Marker({
      position: latLng,
      // label: (this.index + 1).toString(),
      draggable: true,
      map: map,
      zIndex: this.index === 0 ? 25 : null,
    });

    google.maps.event.addListener(gMarker, "click", (e) => {
      this.removeMarkerFromMap(e);
    });
    google.maps.event.addListener(gMarker, "dragstart", (eStart) => {
      google.maps.event.addListener(gMarker, "dragstart", (eEnd) => {
        this.createWaypointForState(eEnd.latlng, gMarker, false, eStart.latlng);
      });
    });
    this.createWaypointForState(latLng, gMarker);
  }

  createWaypointForState(latLng, gMarker, _original = true, oldLatLng) {
    let myWaypoint = {
      [latLng.toString()]: {
        idx: this.index,
        lat: latLng.lat(),
        lng: latLng.lng(),
        latLng: latLng.toString(),
        waypoint: gMarker,
      },
    };

    _original
      ? this.addMarkerToState(myWaypoint)
      : this.updateWaypointInState(myWaypoint, oldLatLng.toString());

    if (this.index > 1) {
      // this.hasDrawn = true;
      this.drawRouteDirections();
    }
  }

  addMarkerToState(pos) {
    debugger;
    this.count.push(pos);
    this.index = this.count.length;
    this.setState((state) => {
      let newState = Object.assign({}, state, pos);
      debugger;
      return newState;
    });
  }

  drawRouteDirections() {
    this.WaypointManager.updateWaypoints(this.state);
    this.clearAllClicks();
  }

  clearAllClicks() {
    debugger;
    Object.values(this.state).forEach((value) => value.waypoint.setMap(null));
  }

  updateGState() {
    debugger;
    const gState = this.WaypointManager.returnProperState();
    this.mapData = gState;
    this.convert(gState);
    console.log("----------");
    console.log(gState);
  }

  convert(gState) {
    let waypointList = [];
    debugger;
    let points = gState
      .slice(0, this.mapData.length - 1)
      .map((waypoint) => Object.values(waypoint.end_location.toJSON()));
    for (const arr in points) {
      waypointList = waypointList.concat(points[arr]);
    }
    console.log("waypointList");
    console.log(waypointList);

    debugger;
    let request = {
      user_id: currentUser.id,
      name: "My Route",
      origin: gState[0].start_location.toString(),
      destination: gState[gState.length - 1].end_location.toString(),
      travelMode: "WALKING",
      waypoints: waypointList,
      mapOptions: [
        this.WaypointManager.map.getCenter().toString().slice(1, -1),
        this.WaypointManager.map.getZoom().toString(),
      ],
    };
    console.log(request);
    this.props.createRoute(request);
    debugger;
    // myhistory.push(`#/routes_index/${currentUser.id}`);
    location.assign(`#/routes_index/${currentUser.id}`);
    // location.assign(`#/splash!`);
  }

  render() {
    return (
      <div className="route-container">
        <div className="main-map-content">
          <div className="route-left">
            <div className="route-preferences">
              <ul className="pref-dropdown">
                Transport
                <li>
                  <div className="pref-item">
                    <span>
                      <i className="fas fa-bicycle"></i>
                    </span>
                    <p>Run</p>
                  </div>
                  <span>
                    <i className="fas fa-chevron-down"></i>
                  </span>
                </li>
                <li>
                  <div className="pref-item">
                    <span>
                      <i className="fas fa-bicycle"></i>
                    </span>
                    <p>Ride</p>
                  </div>
                  <span>
                    <i className="fas fa-chevron-down"></i>
                  </span>
                </li>
                <li>
                  <div className="pref-item">
                    <span>
                      <i className="fas fa-car"></i>
                    </span>
                    <p>Drive</p>
                  </div>
                  <span>
                    <i className="fas fa-chevron-down"></i>
                  </span>
                </li>
              </ul>
            </div>
            <div className="route-details">
              <ul className="detail-toggle">
                Segments
                {this.mapData.map((datum) => ({
                  /* <li key={datum.id}>{Object.values(datum)}</li> */
                }))}
              </ul>
            </div>
          </div>
          <div className="route-right">
            <div className="map-tools">
              <div className="tools-left">
                <div className="map-search">
                  <i className="fas fa-search"></i>
                  <p>search or click map to start</p>
                </div>
              </div>
              <div className="tools-right">
                <div className="edits">
                  <i className="fas fa-undo-alt fas-tools"></i>
                  <i className="fas fa-redo-alt fas-tools"></i>
                </div>
                <div className="store">
                  <i className="fas fa-trash fas-tools"></i>
                  <button
                    className="nav-btn"
                    id="submission"
                    onClick={() => this.updateGState()}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
            <div id="map-container" ref={(map) => (this.mapNode = map)}></div>
          </div>
        </div>
        <div className="route-summary">
          <div className="item-container">
            <div>
              <p>Run</p>
              <p className="fas fa-running"></p>
            </div>
            <div></div>
            <ul className="summary-item">
              Distance
              <li className="summary-style">[VALUE]</li>
            </ul>
            <ul className="summary-item">
              Time
              <li className="summary-style">[VALUE]</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  //EXTRA WERK?
  // removeMarkerFromMap(marker) {
  //   const id = marker.latLng.toString();
  //   this.state[`${id}`].waypoint.setMap(null);
  //   debugger;
  //   this.removeMarkerFromState(id);
  //   debugger;
  // }

  // removeMarkerFromCount(id, mySlice = null) {
  //   debugger;
  //   // let sliceAt = null;
  //   for (const element of this.count) {
  //     if (element[id]) {
  //       mySlice = element[id].idx;
  //     }
  //   }
  //   const sliceAt = mySlice;
  //   debugger;
  //   let newCount = this.count;
  //   newCount = newCount
  //     .slice(0, sliceAt)
  //     .concat(newCount.slice(sliceAt + 1, newCount.length));
  //   this.count = newCount;
  //   this.index = this.count.length;
  // }

  // removeMarkerFromState(id) {
  //   debugger;
  //   this.removeMarkerFromCount(id);

  //   this.setState((state) => {
  //     let newState = Object.assign({}, state);
  //     delete newState[id];
  //     debugger;
  //     return newState;
  //   });
  // }

  // updateWaypointInState(markerStart, markerEnd) {
  //   debugger;
  //   const oldID = marker.latLng.toString();
  //   const newID = marker.latLng.toString();
  //   // this.count.push(pos);
  //   this.setState((state) => {
  //     let newState = Object.assign({}, state);
  //     delete newState[oldID];
  //     newState = Object.assign({}, newState, newState[newID]);

  //     debugger;
  //     return newState;
  //   });
  // }
}
