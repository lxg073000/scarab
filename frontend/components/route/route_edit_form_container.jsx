import { connect } from "react-redux";
import { fetchRoute, editRoute } from "../../actions/gRoute";
import RouteEditForm from "./route_edit_form";

const mapState = (state) => ({
  routes: state.entities.routes,
});
const mapDispatch = (dispatch) => ({
  fetchRoute: (routeID) => dispatch(fetchRoute(routeID)),
  updateRoute: (route) => dispatch(editRoute(route)),
});

export default connect(mapState, mapDispatch)(RouteEditForm);
