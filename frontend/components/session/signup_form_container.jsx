import { connect } from "react-redux";
import { signup, logout, login } from "../../actions/session";
import SignUpForm from "./signup_form";

const mapState = (state) => ({
  currentUser: state.session.currentUser,
  demoUser: {
    username: "guest",
    email: "guest@AA.com",
    password: "password123",
  },
});
const mapDispatch = (dispatch) => ({
  signup: (user) => dispatch(signup(user)),
  login: (user) => dispatch(login(user)),
  logout: () => dispatch(logout()),
});

export default connect(mapState, mapDispatch)(SignUpForm);
