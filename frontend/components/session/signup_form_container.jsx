import { connect } from "react-redux";
import {
  signup,
  logout,
  login,
  clearSessionErrors,
} from "../../actions/session";
import SignUpForm from "./signup_form";

const mapState = (state) => ({
  currentUser: state.session.currentUser,
  demoUser: {
    username: "Alvin",
    email: "guest@aa.com",
    password: "12345asd",
  },
  errors: state.errors.session,
});
const mapDispatch = (dispatch) => ({
  signup: (user) => dispatch(signup(user)),
  login: (user) => dispatch(login(user)),
  logout: () => dispatch(logout()),
  clearSessionErrors: () => dispatch(clearSessionErrors()),
});

export default connect(mapState, mapDispatch)(SignUpForm);
