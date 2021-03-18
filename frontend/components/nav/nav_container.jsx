import { connect } from "react-redux";
import { logout } from "../../actions/session";
import NavItems from "./nav_items";
import { withRouter } from "react-router-dom";

const mapState = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  currentPage: ownProps.location.pathname,
});
const mapDispatch = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default withRouter(connect(mapState, mapDispatch)(NavItems));
