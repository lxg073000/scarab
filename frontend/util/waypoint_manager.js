export default class WaypointManager {
  constructor(map) {
    this.map = map;
    this.waypoints = {};
    window.map = this.map;
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
  updateWaypoints(waypoints) {
    debugger;
    let values = Object.values(waypoints);
    let origin = values[0];
    let waypointObjs = values.slice(1, values.length);

    this.renderSupplyRoute(origin, waypointObjs);
  }

  createMarkerFromWaypoint({ lat, lng, description }) {
    debugger;
    const myLatLng = { lat, lng };

    new google.maps.Marker({
      position: myLatLng,
      map: this.map,
      title: description,
    });
  }

  clearMap(waypointsOBJ) {
    let values = Object.values(waypointsOBJ);

    values.forEach((waypoint) =>
      this.createMarkerFromWaypoint(waypoint).setMap(null)
    );
  }

  renderSupplyRoute(origin, waypointObjs) {
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer({
      draggable: true,
      //** Try to make A appear ontop of Last Label */
      // markerOptions: {
      //   zIndex: google.maps.Marker.label === "A" ? 25 : null,
      //   label: "X",
      // },
    });
    directionsRenderer.setMap(this.map);
    const normalState = [];
    waypointObjs.forEach((obj) =>
      normalState.push({
        location: { lat: obj.lat, lng: obj.lng },
        stopover: true,
      })
    );
    const request = {
      origin: { lat: origin.lat, lng: origin.lng, zindex: 25 },
      destination: { lat: origin.lat, lng: origin.lng },
      travelMode: "WALKING",
      waypoints: normalState,
    };
    directionsService.route(request, function (result, status) {
      if (status === "OK") {
        directionsRenderer.setDirections(result);
      }
    });
  }
  // testRoute = [
  //   { lat: 40.73643250966783, lng: -73.99377074412097 },
  //   { lat: 40.7358926917223, lng: -73.99051847696211 },
  //   { lat: 40.74920997089295, lng: -73.98556184796365 },
  //   { lat: 40.74975215884578, lng: -74.00483546264266 },
  //   { lat: 40.73643250966783, lng: -73.99377074412097 },
  // ];
}
