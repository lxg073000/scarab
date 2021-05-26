import { connect } from "react-redux";
import { fetchBuggouts, createBuggout } from "../../actions/buggouts";
import { fetchCurrentUserRoutes } from "../../actions/gRoute";
import BuggoutNew from "./buggout_form_new";

const mapState = (state) => {
  return {
    buggouts: state.entities.buggouts,
    routes: state.entities.routes,
  };
};
const mapDispatch = (dispatch) => ({
  fetchBuggouts: () => dispatch(fetchBuggouts()),
  fetchRoutes: () => dispatch(fetchCurrentUserRoutes()),
  createBuggout: (buggout) => dispatch(createBuggout(buggout)),
});

export default connect(mapState, mapDispatch)(BuggoutNew);
