import { connect } from "react-redux";
import { login, logout, clearSessionErrors } from "../../actions/session";
import LoginForm from "./login_form";

const mapState = (state) => ({
  currentUser: state.session.currentUser, //check if updated on auth button checks
  demoUser: {
    username: "Alvin",
    email: "guest@aa.com",
    password: "12345asd",
  },
  errors: state.errors.session,
});
const mapDispatch = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  logout: () => dispatch(logout()),
  clearSessionErrors: () => dispatch(clearSessionErrors()),
});

export default connect(mapState, mapDispatch)(LoginForm);
