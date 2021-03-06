import React, { Component } from "react";
import WaypointManager from "../../util/waypoint_manager";
import { map_options_full } from "../../util/conversions";

export default class route_map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // origin: null,
      // destination: null,
      waypoints: [],
      undoneWaypoints: [],
      // distance: null,
      // duration: null,
      // name: null,
      // description: null,
      travelMode: "WALKING",
      travelIcon: "fas fa-running",
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
  }

  componentDidMount() {
    // Initialize GoogleMap API DOM Element
    this.map = new google.maps.Map(this.mapNode, map_options_full);
    // Initialize WaypointManager and provide it the GoogleMap instance
    this.WaypointManager = new WaypointManager(this.map);

    // Establish event listener to register client's clicks as map markers
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
      document.getElementById("duration").innerText = `0 hr 0 min`;
      document.getElementById("distance").innerText = `0.00 mi`;
      let myLatLng = [];
      this.state.waypoints[0]
        .split(",")
        .map((num) => myLatLng.push(parseFloat(num)));
      // const marker = this.WaypointManager.directionMarkers[0].position;

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
        }
      );
    }
  }

  redoMarker() {
    if (this.state.undoneWaypoints.length === 1) {
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
  updateTravelMode(mode, icon, e) {
    this.setState(
      {
        travelMode: mode,
        travelIcon: icon,
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
    const request = {
      user_id: currentUser.id,
      waypoints: this.state.waypoints,
      travelMode: this.state.travelMode,
      center: this.WaypointManager.directionsRenderer.map.center.toUrlValue(),
      zoom: this.WaypointManager.map.zoom,
      name: this.state.name,
      description: this.state.description,
      distance: document.getElementById("distance").innerHTML,
      duration: document.getElementById("duration").innerHTML,
      polyline: this.WaypointManager.polyline,
    };

    this.props.createRoute(request);
    this.props.history.push(`/my_routes/${currentUser.id}`);
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
    this.props.history.push(`/my_routes/${currentUser.id}`);
  }

  prefToggle() {
    document.getElementById("route-prefs").classList.toggle("slide-left");
    document.getElementById("route-main").classList.toggle("resize-route");
  }

  deleteRoute() {
    document.getElementById("duration").innerText = `0 hr 0 min`;
    document.getElementById("distance").innerText = `0.00 mi`;

    this.WaypointManager.directionsRenderer.setMap(null);
    this.clearWaypoints();
    this.WaypointManager.directionsRenderer =
      new google.maps.DirectionsRenderer();

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
            onClick={(e) =>
              this.updateTravelMode("WALKING", "fas fa-running", e)
            }
          >
            <i className="fas fa-running"></i>
            <p>Run</p>
          </div>
          <div
            className="route-item"
            onClick={(e) =>
              this.updateTravelMode("BICYCLING", "fas fa-bicycle", e)
            }
          >
            <i className="fas fa-bicycle"></i>
            <p>Bike</p>
          </div>
          <div
            className="route-item"
            onClick={(e) => this.updateTravelMode("DRIVING", "fas fa-car", e)}
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
            <div className="stat-item">
              <h2>{this.state.travelMode}</h2>
              <i className={this.state.travelIcon}></i>
            </div>
            <div className="stat-item">
              <h2>Distance</h2>
              <h1 id="distance">0.00 mi</h1>
            </div>
            <div className="stat-item">
              <h2>Duration</h2>
              <h1 id="duration">0 hr 0 min</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
