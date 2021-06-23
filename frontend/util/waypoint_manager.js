export default class WaypointManager {
  constructor(map) {
    this.map = map;
    this.directionsRenderer = new google.maps.DirectionsRenderer({
      polylineOptions: {
        strokeColor: "#fc5200",
      },
      markerOptions: { url: window.sPoint.svg },
    });
    this.directionsService = new google.maps.DirectionsService();
    this.directionsRenderer.setMap(this.map);
    this.directionMarkers = [];
    this.render = null;
    this.distance = null;
    this.time = null;
  }

  calcRoute(waypointMarkers, travelMode) {
    // Format Markers to match GoogleServices API endpoints
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

    // Provide packaged request object to GoogleServices API to render to map
    // and dynamically display route distance/estimated time calculations
    this.directionsService.route(request, (result, status) => {
      if (status == "OK") {
        this.directionsRenderer.setDirections(result);
        this.directionsRenderer.setMap(this.map);
        this.handleResult(result);
      }
    });
  }

  handleResult(directionsResult) {
    this.distance = 0;
    this.duration = 0;
    let legs = directionsResult.routes[0].legs;

    for (const data in legs) {
      this.distance += parseFloat(getMiles(legs[data].distance.value));
      this.distance = Math.round((this.distance + Number.EPSILON) * 100) / 100;
    }
    for (const data in legs) {
      this.duration +=
        (Math.round(legs[data].duration.value / 60 + Number.EPSILON) * 100) /
        100;
    }

    if (
      document.getElementById("duration") &&
      document.getElementById("distance")
    ) {
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
    }
  }

  emptyRoute() {
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

  clearMap(waypointsOBJ) {
    let values = Object.values(waypointsOBJ);

    values.forEach((waypoint) =>
      this.createMarkerFromWaypoint(waypoint).setMap(null)
    );
  }
}

function getMiles(i) {
  return i * 0.000621371192;
}
