export default class WaypointManager {
  constructor(map) {
    this.map = map;
    this.waypoints = {};
    window.map = this.map;
  }
  updateWaypoints(waypoints) {
    let waypointObjs = Object.values(waypoints);
    debugger;

    waypointObjs.forEach((obj) =>
      Object.keys(this.waypoints).includes(obj.id)
        ? null
        : this.createMarkerFromWaypoint(obj)
    );
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
}
