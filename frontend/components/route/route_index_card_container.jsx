import {
  fetchCurrentUserRoutes,
  fetchCurrentUserRoutes_walking,
  fetchCurrentUserRoutes_driving,
  fetchCurrentUserRoutes_bicycling,
  fetchRoutes,
  fetchRoute,
  createRoute,
  editRoute,
  deleteRoute,
} from "../../actions/gRoute";
import { sortMostRecent } from "../../util/conversions";
import { connect } from "react-redux";
import RouteIndexCard from "./route_index_card";
import { withRouter } from "react-router-dom";

const mapState = (state) => {
  return {
    routes: sortMostRecent(state.entities.routes),
    entities: Object.values(state.entities),
    walking: sortMostRecent(state.entities.routes).filter(
      (route) => route.travelMode === "WALKING"
    ),
    driving: sortMostRecent(state.entities.routes).filter(
      (route) => route.travelMode === "DRIVING"
    ),
    bicycling: sortMostRecent(state.entities.routes).filter(
      (route) => route.travelMode === "BICYCLING"
    ),
  };
};

const mapDispatch = (dispatch) => ({
  fetchCurrentUserRoutes: (id) => dispatch(fetchCurrentUserRoutes(id)),
  fetchCurrentUserRoutes_walking: (id) =>
    dispatch(fetchCurrentUserRoutes_walking(id)),
  fetchCurrentUserRoutes_driving: (id) =>
    dispatch(fetchCurrentUserRoutes_driving(id)),
  fetchCurrentUserRoutes_bicycling: (id) =>
    dispatch(fetchCurrentUserRoutes_bicycling(id)),
  fetchRoutes: () => dispatch(fetchRoutes()),
  fetchRoute: () => dispatch(fetchRoute(route_id)),
  createRoute: () => dispatch(createRoute(route)),
  editRoute: () => dispatch(editRoute(route)),
  deleteRoute: () => dispatch(deleteRoute(route_id)),
});

export default withRouter(connect(mapState, mapDispatch)(RouteIndexCard));
