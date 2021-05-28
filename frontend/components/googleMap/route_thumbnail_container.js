import { connect } from "react-redux";
import { fetchRoutes } from "../../actions/gRoute";
import RouteThumbnail from "./route_thumbnail";

const mapState = (state) => {
  return {
    routes: Object.values(state.entities.routes),
  };
};
const mapDispatch = (dispatch) => ({
  fetchRoutes: () => dispatch(fetchRoutes()),
  createRoute: (route) => dispatch(createRoute(route)),
});

export default connect(mapState, mapDispatch)(RouteThumbnail);
