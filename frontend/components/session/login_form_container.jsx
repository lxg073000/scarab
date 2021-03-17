import { connect } from "react-redux";
import { login, logout } from "../../actions/session";
import LoginForm from "./login_form";

const mapState = (state) => ({
  currentUser: state.session.currentUser,
});
const mapDispatch = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  logout: () => dispatch(logout()),
});

export default connect(mapState, mapDispatch)(LoginForm);
