import {
  fetchRoutes,
  fetchRoute,
  createRoute,
  editRoute,
  deleteRoute,
} from "../../actions/gRoute";
import { connect } from "react-redux";
import RouteShowCard from "./route_showcard";
import { withRouter } from "react-router-dom";

const mapState = (state) => {
  debugger;
  return {
    routes: Object.values(state.entities.routes),
  };
};

const mapDispatch = (dispatch) => ({
  fetchRoutes: () => dispatch(fetchRoutes()),
  fetchRoute: () => dispatch(fetchRoute(route_id)),
  createRoute: () => dispatch(createRoute(route)),
  editRoute: () => dispatch(editRoute(route)),
  deleteRoute: () => dispatch(deleteRoute(route_id)),
});

export default withRouter(connect(mapState, mapDispatch)(RouteShowCard));
