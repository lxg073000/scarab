import { connect } from "react-redux";
import { clearSessionErrors } from "../../actions/session";
import OnboardingForm from "./onboarding_form";

const mapState = (state) => ({
  currentUser: state.session.currentUser,
});
const mapDispatch = (dispatch) => ({
  clearSessionErrors: () => dispatch(clearSessionErrors()),
});

export default connect(mapState, mapDispatch)(OnboardingForm);
