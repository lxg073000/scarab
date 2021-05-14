import React, { Component } from "react";
import WaypointManager from "../../util/waypoint_manager";
import { useHistory } from "react-router-dom";
// import RouteForm from "../route/route_form";

export default class route_map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      origin: null,
      destination: null,
      waypoints: [],
      undoneWaypoints: [],
      routeInfo: null,
      name: null,
      description: null,
      travelMode: "WALKING", //DRIVING, BICYCLING, WALKING
    };

    this.origin = null;

    this.count = [];
    this.index = this.count.length;
    this.hasDrawn = false;
    this.mapData = [];
    this.submit = "hide";

    this.undoMarker = this.undoMarker.bind(this);
    this.redoMarker = this.redoMarker.bind(this);
    this.update = this.update.bind(this);
    this.prefToggle = this.prefToggle.bind(this);
    this.deleteRoute = this.deleteRoute.bind(this);
    this.saveRoute = this.saveRoute.bind(this);
    // this.removeMarkerFromMap = this.removeMarkerFromMap.bind(this);
  }

  componentDidMount() {
    this.mapOptions = {
      center: { lat: 40.7623, lng: -73.985 },
      zoom: 13,
      clickableIcons: false,
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
      ],
    };
    this.map = new google.maps.Map(this.mapNode, this.mapOptions);
    this.WaypointManager = new WaypointManager(this.map);

    google.maps.event.addListener(this.map, "click", (e) => {
      this.addMarkerToMap(e.latLng, this.map);
    });
  }

  componentWillUnmount() {
    google.maps.event.clearInstanceListeners(this.map);
  }

  addMarkerToMap(latLng, map) {
    let gMarker = new google.maps.Marker({
      position: latLng,
      draggable: false,
      map: this.state.waypoints.length === 0 ? map : null,
    });

    if (this.state.waypoints.length === 0) {
      this.origin = gMarker;
    }

    this.setState(
      {
        waypoints: this.state.waypoints.concat([
          gMarker.getPosition().toString().slice(1, -1),
        ]),
      },
      () => this.handleMarkers()
    );
  }

  handleMarkers() {
    if (this.state.waypoints.length > 1) {
      // this.clearMarkers();
      this.origin.setMap(null);
      // this.origin = null;
      this.WaypointManager.calcRoute(
        this.state.waypoints,
        this.state.travelMode
      );
    } else {
      // this.origin.setMap(this.map);
    }
    // this.WaypointManager.directionsRenderer
    //   ? this.WaypointManager.directionsRenderer.setMap(null)
    //   : null;
  }

  undoMarker() {
    if (this.state.waypoints.length === 1) {
      this.deleteRoute();
    } else if (this.state.waypoints.length === 2) {
      debugger;
      document.getElementById("distance").innerText = ``;
      document.getElementById("duration").innerText = ``;
      let myLatLng = [];
      this.state.waypoints[0]
        .split(",")
        .map((num) => myLatLng.push(parseFloat(num)));
      // const marker = this.WaypointManager.directionMarkers[0].position;
      console.log(myLatLng);
      const markerPOS = new google.maps.LatLng(myLatLng[0], myLatLng[1]);

      this.setState(
        {
          waypoints: [],
          undoneWaypoints: this.state.undoneWaypoints.concat(
            this.state.waypoints.slice(-1)
          ),
        },
        () => {
          this.WaypointManager.directionsRenderer.setMap(null);
          this.addMarkerToMap(markerPOS, this.map);
          this.map.setZoom(13);
        }
      );
    } else if (this.state.waypoints.length > 2) {
      this.setState(
        {
          waypoints: this.state.waypoints.slice(0, -1),
          undoneWaypoints: this.state.undoneWaypoints.concat(
            this.state.waypoints.slice(-1)
          ),
        },
        () => {
          this.handleMarkers();
          console.log(`UNDO added === ${this.state.undoneWaypoints}`);
        }
      );
    }
  }

  redoMarker() {
    if (this.state.undoneWaypoints.length === 1) {
      debugger;
      this.setState(
        {
          waypoints: this.state.waypoints.concat(
            this.state.undoneWaypoints[this.state.undoneWaypoints.length - 1]
          ),
          undoneWaypoints: [],
        },
        () => this.handleMarkers()
      );
    } else if (this.state.undoneWaypoints.length > 1) {
      this.setState(
        {
          waypoints: this.state.waypoints.concat(
            this.state.undoneWaypoints[this.state.undoneWaypoints.length - 1]
          ),
          undoneWaypoints: this.state.undoneWaypoints.concat(
            this.state.undoneWaypoints.slice(0, -1)
          ),
        },
        () => this.handleMarkers()
      );
    } else {
      debugger;
      console.log(this.state.undoneWaypoints);
    }
  }

  clearMarkers() {
    this.WaypointManager.directionMarkers.forEach((marker) => {
      this.WaypointManager.directionsRenderer.setMap(null);
      this.WaypointManager.directionsRenderer.setMap(this.map);
      // marker.setMap(null);
      // marker.setVisible(false);
    });
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }
  updateTravelMode(mode, e) {
    this.setState(
      {
        travelMode: mode,
      },
      () => {
        if (this.state.waypoints.length > 1) {
          this.WaypointManager.calcRoute(
            this.state.waypoints,
            this.state.travelMode
          );
        }
      }
    );

    console.log(e);
    console.log(mode);

    const prevSelection = document.getElementsByClassName(
      "selected-route-item"
    )[0];
    prevSelection
      ? prevSelection.classList.toggle("selected-route-item")
      : null;

    e.currentTarget.classList.toggle("selected-route-item");
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
    this.count.push(pos);
    this.index = this.count.length;
    this.setState((state) => {
      let newState = Object.assign({}, state, pos);
      return newState;
    });
  }

  saveRoute() {
    debugger;
    const request = {
      waypoints: this.state.waypoints,
      travelMode: this.state.travelMode,
      center: this.WaypointManager.directionsRenderer.map.center.toUrlValue(),
    };
  }

  drawRouteDirections() {
    this.WaypointManager.updateWaypoints(this.state);
    this.clearAllClicks();
  }

  clearAllClicks() {
    this.state.waypoints.forEach((value) =>
      new google.map.marker(value).setMap(null)
    );
  }

  updateGState() {
    const gState = this.WaypointManager.returnProperState();
    this.mapData = gState;
    this.convert(gState);
  }

  convert(gState) {
    let waypointList = [];
    let points = gState
      .slice(0, this.mapData.length - 1)
      .map((waypoint) => Object.values(waypoint.end_location.toJSON()));
    for (const arr in points) {
      waypointList = waypointList.concat(points[arr]);
    }

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
    this.props.createRoute(request);
    // myhistory.push(`#/routes_index/${currentUser.id}`);
    location.assign(`#/routes_index/${currentUser.id}`);
    // location.assign(`#/splash!`);
  }

  prefToggle() {
    document.getElementById("route-prefs").classList.toggle("slide-left");
    document.getElementById("route-main").classList.toggle("resize-route");
  }

  deleteRoute() {
    console.log("deleteRoute");
    document.getElementById("distance").innerText = ``;
    document.getElementById("duration").innerText = ``;

    this.WaypointManager.directionsRenderer.setMap(null);
    this.clearWaypoints();
    this.WaypointManager.directionsRenderer = new google.maps.DirectionsRenderer();

    this.WaypointManager.directionsRenderer.setMap(this.map);
  }

  clearWaypoints() {
    this.setState(
      {
        waypoints: [],
        undoneWaypoints: [],
      },
      () => {
        this.map.setZoom(13);
        this.map.setCenter({ lat: 40.7623, lng: -73.985 });
        this.origin.setMap(null);
      }
    );
  }
  render() {
    return (
      <div className="route-shell">
        <div className="route-prefs" id="route-prefs">
          <h1 id="pref-tag">
            Routing Preferences
            <i
              className="fas fa-arrow-right"
              onClick={() => this.prefToggle()}
            ></i>
          </h1>

          <h1>Route Name</h1>
          <input type="text" onChange={this.update("name")}></input>
          <h1>Route description</h1>
          <input type="text" onChange={this.update("description")}></input>
          <h1>Travel Mode</h1>
          <div
            className="route-item selected-route-item"
            onClick={(e) => this.updateTravelMode("WALKING", e)}
          >
            <i className="fas fa-running"></i>
            <p>Run</p>
          </div>
          <div
            className="route-item"
            onClick={(e) => this.updateTravelMode("BICYCLING", e)}
          >
            <i className="fas fa-bicycle"></i>
            <p>Bike</p>
          </div>
          <div
            className="route-item"
            onClick={(e) => this.updateTravelMode("DRIVING", e)}
          >
            <i className="fas fa-car"></i>
            <p>Drive</p>
          </div>
        </div>
        <div className="route-main resize-route" id="route-main">
          <div className="route-tools">
            <div className="edits">
              <i
                className="fas fa-undo-alt fas-tools"
                onClick={this.undoMarker}
              ></i>
              <i
                className="fas fa-redo-alt fas-tools"
                onClick={this.redoMarker}
              ></i>
            </div>
            <div className="store">
              <i
                className="fas fa-trash fas-tools"
                onClick={this.deleteRoute}
              ></i>
              <button
                className="nav-btn"
                id="submission"
                onClick={() => this.saveRoute()}
              >
                Save
              </button>
            </div>
          </div>
          <div
            className="route-map"
            id="map-container"
            ref={(map) => (this.mapNode = map)}
          ></div>
          <div className="route-stats" id="directions-panel">
            <h1 id="distance"></h1>
            <br></br>
            <h1 id="duration"></h1>
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
