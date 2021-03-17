import { connect } from "react-redux";
import { logout } from "../../actions/session";
import NavItems from "./nav_items";

const mapState = (state) => ({
  currentUser: state.session.currentUser,
});
const mapDispatch = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapState, mapDispatch)(NavItems);
