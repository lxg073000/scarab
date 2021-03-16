import { connect } from "react-redux";
import { signup, login, logout } from "../../actions/session";
import LoginForm from "./signup_form";

// const mapState = (state => {
//   props: null,
// });
const mapDispatch = (dispatch) => ({
  signup: (user) => dispatch(signup(user)),
  login: (user) => dispatch(login(user)),
  logout: () => dispatch(logout()),
});

export default connect(null, mapDispatch)(LoginForm);
