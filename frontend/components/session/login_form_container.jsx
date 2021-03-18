import { connect } from "react-redux";
import { login, logout } from "../../actions/session";
import LoginForm from "./login_form";

const mapState = (state) => ({
  currentUser: state.session.currentUser, //check if updated on auth button checks
  demoUser: {
    username: "guest",
    email: "guest@AA.com",
    password: "password123",
  },
  errors: state.errors.session,
});
const mapDispatch = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  logout: () => dispatch(logout()),
});

export default connect(mapState, mapDispatch)(LoginForm);
