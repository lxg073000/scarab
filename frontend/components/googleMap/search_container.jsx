import { connect } from "react-redux";
import { createRoute } from "../../actions/gRoute";
import Search from "./search";

const mapState = (state) => {
  return {};
};
const mapDispatch = (dispatch) => ({
  createRoute: (route) => dispatch(createRoute(route)),
});

export default connect(mapState, mapDispatch)(Search);
