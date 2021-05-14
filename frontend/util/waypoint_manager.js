export default class WaypointManager {
  constructor(map) {
    this.map = map;
    this.directionsRenderer = new google.maps.DirectionsRenderer();
    // this.directionsRenderer.setMap(null);
    this.directionsService = new google.maps.DirectionsService();
    this.directionsRenderer.setMap(this.map);
    this.directionMarkers = [];
    this.render = null;
    this.distance = null;
    this.time = null;

    // this.mapRequest = null;
    // window.map = this.map;
    // this.myResult = [];
    // this.clearDirectionMarker = this.clearDirectionMarker.bind(this);
  }

  calcRoute(waypointMarkers, travelMode) {
    debugger;
    // this.directionMarkers.forEach((marker) => {
    //   marker.setMap(null);
    //   marker.setVisible(false);
    // });

    debugger;
    let start = waypointMarkers[0];
    let end = waypointMarkers[waypointMarkers.length - 1];
    let waypoints = [];

    if (waypointMarkers.length > 2) {
      for (let i = 1; i < waypointMarkers.length - 1; i++) {
        waypoints.push({ location: waypointMarkers[i], stopover: true });
      }
    }

    let request = {
      origin: start,
      destination: end,
      waypoints,
      travelMode,
    };

    // const directionsService = new google.maps.DirectionsService();
    // const directionsRenderer = new google.maps.DirectionsRenderer();
    // directionsRenderer.setMap(null);
    // directionsRenderer.setMap(this.map);
    // directionsRenderer.setPanel(document.getElementById("directions-panel"));

    console.log(request);

    this.directionsService.route(request, (result, status) => {
      if (status == "OK") {
        this.directionsRenderer.setDirections(result);
        this.directionsRenderer.setMap(this.map);
        this.handleResult(result);
      }
    });
  }

  handleResult(directionsResult) {
    debugger;
    this.distance = 0;
    this.duration = 0;
    let legs = directionsResult.routes[0].legs;

    for (const data in legs) {
      // this.distance += parseFloat(legs[data].distance);
      this.distance += parseFloat(legs[data].distance.text);
      this.distance = Math.round((this.distance + Number.EPSILON) * 100) / 100;
      console.log(legs[data].distance.text);
    }
    for (const data in legs) {
      // this.duration += parseFloat(legs[data].duration);
      this.duration +=
        (Math.round(legs[data].duration.value / 60 + Number.EPSILON) * 100) /
        100;
      console.log(legs[data].duration.text);
    }

    if (this.duration >= 60) {
      let hours = Math.floor(this.duration / 60);
      let minutes = this.duration % 60;
      document.getElementById(
        "duration"
      ).innerText = `${hours} hr ${minutes} min`;
    } else {
      document.getElementById("duration").innerHTML = `${this.duration} min`;
    }

    document.getElementById("distance").innerHTML = `${this.distance} mi`;

    // const route = directionsResult.routes[0].legs[0];

    // const start = directionsResult.routes[0].legs[0].start_location;
    // const end = directionsResult.routes[0].legs[0].end_location;
    // const gmStart = new google.maps.Marker({
    //   position: start,
    //   map: this.map,
    // });
    // const gmEnd = new google.maps.Marker({
    //   position: end,
    //   map: this.map,
    // });

    // this.directionMarkers.push(gmStart);
    // this.directionMarkers.push(gmEnd);

    // this.directionMarkers.forEach((marker) => marker.setMap(null));

    // for (let i = 0; i < route.steps.length; i++) {
    //   const marker = new google.maps.Marker({
    //     position: route.steps[i].start_point,
    //     map: this.map,
    //   });
    //   this.directionMarkers.push(marker);
    // }
  }

  emptyRoute() {
    debugger;
    let request = {
      origin: null,
      destination: null,
      waypoints: null,
      travelMode: "WALKING",
    };

    const directionsService = new google.maps.DirectionsService();
    directionsService.route(request, (result, status) => {
      if (status == "OK") {
        this.directionsRenderer.setDirections(result);
        this.handleResult(result);
      }
    });
  }

  // updateWaypoints(waypoints) {
  //   let waypointObjs = Object.values(waypoints);
  //   debugger;

  //   waypointObjs.forEach((obj) =>
  //     Object.keys(this.waypoints).includes(obj.id)
  //       ? null
  //       : // : this.createMarkerFromWaypoint(obj)
  //         this.renderSupplyRoute(obj)
  //   );
  // }
  // startRoute(waypoints) {
  //   debugger;
  //   let values = Object.values(waypoints);
  //   let origin = values[0];
  //   let destination = values[1];
  //   const defaultOrigin = origin;

  //   this.renderDynamicRoute(origin, destination);
  // }
  // continueRoute(waypoint) {
  //   debugger;
  //   let values = Object.values(waypoints);
  //   let origin = defaultOrigin;
  //   let destination = waypoint;

  //   this.renderDynamicRoute(origin, destination);
  // }
  // updateWaypoints(waypoints) {
  //   debugger;
  //   let values = Object.values(waypoints);
  //   let origin = values[0];
  //   let destination = values[values.length - 1];
  //   let waypointObjs = values.slice(1, values.length - 1);

  //   this.renderSupplyRoute(origin, destination, waypointObjs);
  // }

  // createMarkerFromWaypoint({ lat, lng, description }) {
  //   debugger;
  //   const myLatLng = { lat, lng };

  //   directionMarker = new google.maps.Marker(
  //     {
  //       position: myLatLng,
  //       map: this.map,
  //       title: description,
  //     },
  //     google.maps.event.addListener(directionMarker, "click", (e) => {
  //       this.clearDirectionMarker(e);
  //     })
  //   );
  // }

  clearMap(waypointsOBJ) {
    let values = Object.values(waypointsOBJ);

    values.forEach((waypoint) =>
      this.createMarkerFromWaypoint(waypoint).setMap(null)
    );
  }

  //   renderSupplyRoute(origin, destination, waypointObjs) {
  //     const directionsService = new google.maps.DirectionsService();
  //     const directionsRenderer = new google.maps.DirectionsRenderer({
  //       draggable: true,
  //     });
  //     directionsRenderer.setMap(this.map);

  //     const normalState = [];

  //     if (waypointObjs)
  //       waypointObjs.forEach((obj) =>
  //         normalState.push({
  //           location: { lat: obj.lat, lng: obj.lng },
  //           stopover: true,
  //         })
  //       );
  //     const request = {
  //       origin: { lat: origin.lat, lng: origin.lng, zindex: 25 },
  //       destination: { lat: destination.lat, lng: destination.lng },
  //       travelMode: "WALKING",
  //       waypoints: normalState,
  //     };
  //     directionsService.route(request, function (result, status) {
  //       if (status === "OK") {
  //         debugger;
  //         directionsRenderer.setDirections(result);
  //         this.myResult = result.routes[0].legs;
  //       }
  //     });
  //   }

  //   renderUserRoutes(myRequest) {
  //     const directionsService = new google.maps.DirectionsService();
  //     const directionsRenderer = new google.maps.DirectionsRenderer({
  //       draggable: true,
  //     });
  //     directionsRenderer.setMap(this.map);
  //     debugger;

  //     let myArr = [];

  //     for (let i = 0; i < myRequest.waypoints.length; i + 2) {
  //       myArr.push({
  //         location: myRequest.waypoints[[(i, i + 1)]],
  //         stopover: true,
  //       });
  //     }

  //     const request = {
  //       origin: myRequest.origin,
  //       destination: myRequest.destination,
  //       travelMode: myRequest.travelMode,
  //       waypoints: myArr,
  //     };
  //     this.mapRequest = request;
  //     directionsService.route(request, function (result, status) {
  //       if (status === "OK") {
  //         debugger;
  //         directionsRenderer.setDirections(result);
  //         this.myResult = result.routes[0].legs;
  //       }
  //     });
  //   }

  //   returnProperState() {
  //     debugger;
  //     return myResult;
  //   }

  //   clearDirectionMarker() {
  //     debugger;
  //   }

  //   newLatLng(floatPair) {
  //     return new google.maps.LatLng(floatPair[0], floatPair[2]);
  //   }
}
