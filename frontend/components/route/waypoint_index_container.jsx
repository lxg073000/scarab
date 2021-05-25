import { connect } from "react-redux";
import { fetchWaypoints } from "../../actions/waypoint";
import WaypointIndexCard from "./waypoint_index_card";
import { withRouter } from "react-router-dom";

const mapState = (state) => {
  return {
    waypoints: Object.values(state.entities.waypoints),
  };
};

const mapDispatch = (dispatch) => ({
  fetchWaypoints: () => dispatch(fetchWaypoints()),
});

export default withRouter(connect(mapState, mapDispatch)(WaypointIndexCard));
