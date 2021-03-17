import { connect } from "react-redux";
import { signup, logout } from "../../actions/session";
import SignUpForm from "./signup_form";

const mapState = (state) => ({
  currentUser: state.session.currentUser,
});
const mapDispatch = (dispatch) => ({
  signup: (user) => dispatch(signup(user)),
  logout: () => dispatch(logout()),
});

export default connect(mapState, mapDispatch)(SignUpForm);
