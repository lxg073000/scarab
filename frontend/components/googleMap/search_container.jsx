import { connect } from "react-redux";
import { fetchWaypoints } from "../../actions/waypoint";
import Search from "./search";

const mapState = (state) => ({
  waypoints: Object.values(state.entities.waypoints),
});
const mapDispatch = (dispatch) => ({
  fetchWaypoints: () => dispatch(fetchWaypoints()),
});

export default connect(mapState, mapDispatch)(Search);
