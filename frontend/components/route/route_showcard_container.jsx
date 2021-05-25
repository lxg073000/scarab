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
  return {
    routes: Object.values(state.entities.routes),
  };
};

const mapDispatch = (dispatch) => ({
  fetchRoutes: () => dispatch(fetchRoutes()),
  fetchRoute: (route_id) => dispatch(fetchRoute(route_id)),
  createRoute: (route) => dispatch(createRoute(route)),
  editRoute: (route) => dispatch(editRoute(route)),
  deleteRoute: (route_id) => dispatch(deleteRoute(route_id)),
});

export default withRouter(connect(mapState, mapDispatch)(RouteShowCard));
