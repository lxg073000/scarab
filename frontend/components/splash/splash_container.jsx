import { connect } from "react-redux";
import SplashCard from "./splash_card";
import { login } from "../../actions/session";

const mapState = (state) => ({});
const mapDispatch = (dispatch) => ({
  login: (user) => dispatch(login(user)),
});

export default connect(mapState, mapDispatch)(SplashCard);
