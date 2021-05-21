import { connect } from "react-redux";
import { fetchRoutes, fetchRoute, editRoute } from "../../actions/gRoute";
import RouteEditForm from "./route_edit_form";

const filteredRoute = (routes) => {
  routes.filter((route) => route.id === 1);
};
const mapState = (state) => ({
  routes: Object.values(state.entities.routes),
});
const mapDispatch = (dispatch) => ({
  fetchRoute: (routeID) => dispatch(fetchRoute(routeID)),
  fetchRoutes: () => dispatch(fetchRoutes()),
  updateRoute: (route) => dispatch(editRoute(route)),
});

export default connect(mapState, mapDispatch)(RouteEditForm);
