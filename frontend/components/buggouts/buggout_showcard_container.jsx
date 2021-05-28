import { connect } from "react-redux";
import { fetchBuggouts } from "../../actions/buggouts";
import { fetchCurrentUserRoutes } from "../../actions/gRoute";
import BuggoutShowcard from "./buggout_showcard";

const mapState = (state) => ({
  buggouts: state.entities.buggouts,
  routes: state.entities.routes,
});
const mapDispatch = (dispatch) => ({
  fetchBuggouts: () => dispatch(fetchBuggouts()),
  fetchRoutes: () => dispatch(fetchCurrentUserRoutes()),
});

export default connect(mapState, mapDispatch)(BuggoutShowcard);
