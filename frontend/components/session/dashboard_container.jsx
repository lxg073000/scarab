import { connect } from "react-redux";
import {
  clearSessionErrors,
  receiveCurrentUser,
  fetchUser,
} from "../../actions/session";
import Dashboard from "./dashboard";
import { fetchWaypoints } from "../../actions/waypoint";

const mapState = (state) => {
  return {
    currentUser: state.session.currentUser,
    // defaultRoute: state.routes,
  };
};
const mapDispatch = (dispatch) => ({
  fetchUser: (userID) => dispatch(fetchUser(userID)),
  receiveCurrentUser: (user) => dispatch(receiveCurrentUser(user)),
  clearSessionErrors: () => dispatch(clearSessionErrors()),
  fetchWaypoints: () => dispatch(fetchWaypoints()),
});

export default connect(mapState, mapDispatch)(Dashboard);
