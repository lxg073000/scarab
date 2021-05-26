import { connect } from "react-redux";
import {
  clearSessionErrors,
  receiveCurrentUser,
  fetchUser,
} from "../../actions/session";
import Dashboard from "./dashboard";
import { fetchRoutes } from "../../actions/gRoute";
import { fetchBuggouts } from "../../actions/buggouts";

const mapState = (state) => {
  return {
    currentUser: state.session.currentUser,
    buggouts: Object.values(state.entities.buggouts),
    routes: Object.values(state.entities.routes),
  };
};
const mapDispatch = (dispatch) => ({
  fetchUser: (userID) => dispatch(fetchUser(userID)),
  fetchRoutes: () => dispatch(fetchRoutes()),
  fetchBuggouts: () => dispatch(fetchBuggouts()),
  receiveCurrentUser: (user) => dispatch(receiveCurrentUser(user)),
  clearSessionErrors: () => dispatch(clearSessionErrors()),
  fetchWaypoints: () => dispatch(fetchWaypoints()),
});

export default connect(mapState, mapDispatch)(Dashboard);
