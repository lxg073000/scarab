import { connect } from "react-redux";
import { fetchBuggouts, updateBuggout } from "../../actions/buggouts";
import { fetchCurrentUserRoutes } from "../../actions/gRoute";
import BuggoutEdit from "./buggout_form_edit";

const mapState = (state) => {
  return {
    buggouts: state.entities.buggouts,
    routes: state.entities.routes,
  };
};
const mapDispatch = (dispatch) => ({
  fetchBuggouts: () => dispatch(fetchBuggouts()),
  fetchRoutes: () => dispatch(fetchCurrentUserRoutes()),
  updateBuggout: (buggout) => dispatch(updateBuggout(buggout)),
});

export default connect(mapState, mapDispatch)(BuggoutEdit);
