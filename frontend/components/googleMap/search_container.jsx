import { connect } from "react-redux";
import { fetchWaypoints } from "../../actions/waypoint";
import { createRoute } from "../../actions/gRoute";
import Search from "./search";

const mapState = (state) => ({
  waypoints: Object.values(state.entities.waypoints),
});
const mapDispatch = (dispatch) => ({
  fetchWaypoints: () => dispatch(fetchWaypoints()),
  createRoute: (route) => dispatch(createRoute(route)),
});

export default connect(mapState, mapDispatch)(Search);

//fetch a particular waypoint set. (SupplyRoute)
//"clear" the map on dismount
//use receiveWaypoint to convert clicks to points and chain those points to a new google marker

//figure out how to link the markers together
//loop the constructor to create multiple maps to use on the /routes index page

//figure out the functionality to click on markers and pull out data?
//-- onclick(this.handleMarker())? event's current target might match to API?

//figure out how google handles segments
//style
