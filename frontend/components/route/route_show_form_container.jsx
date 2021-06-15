import { connect } from "react-redux";
import { fetchRoutes, fetchRoute, editRoute } from "../../actions/gRoute";
import RouteShow from "./route_show_form";

const mapState = (state) => ({
  routes: Object.values(state.entities.routes),
});
const mapDispatch = (dispatch) => ({
  fetchRoute: (routeID) => dispatch(fetchRoute(routeID)),
  fetchRoutes: () => dispatch(fetchRoutes()),
  updateRoute: (route) => dispatch(editRoute(route)),
});

export default connect(mapState, mapDispatch)(RouteShow);
