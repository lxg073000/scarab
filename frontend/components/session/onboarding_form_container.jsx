import { connect } from "react-redux";
import { clearSessionErrors } from "../../actions/session";
import OnboardingForm from "./onboarding_form";
import { fetchWaypoints } from "../../actions/waypoint";

const mapState = (state) => ({
  currentUser: state.session.currentUser,
  // defaultRoute: state.routes,
});
const mapDispatch = (dispatch) => ({
  clearSessionErrors: () => dispatch(clearSessionErrors()),
  fetchWaypoints: () => dispatch(fetchWaypoints()),
});

export default connect(mapState, mapDispatch)(OnboardingForm);
