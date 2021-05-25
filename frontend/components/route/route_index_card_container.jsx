import {
  fetchCurrentUserRoutes,
  fetchRoutes,
  fetchRoute,
  createRoute,
  editRoute,
  deleteRoute,
} from "../../actions/gRoute";
import { connect } from "react-redux";
import RouteIndexCard from "./route_index_card";
import { withRouter } from "react-router-dom";

const mapState = (state) => {
  return {
    routes: Object.values(state.entities.routes),
    entities: Object.values(state.entities),
  };
};

const mapDispatch = (dispatch) => ({
  fetchCurrentUserRoutes: (id) => dispatch(fetchCurrentUserRoutes(id)),
  fetchRoutes: () => dispatch(fetchRoutes()),
  fetchRoute: () => dispatch(fetchRoute(route_id)),
  createRoute: () => dispatch(createRoute(route)),
  editRoute: () => dispatch(editRoute(route)),
  deleteRoute: () => dispatch(deleteRoute(route_id)),
});

export default withRouter(connect(mapState, mapDispatch)(RouteIndexCard));
