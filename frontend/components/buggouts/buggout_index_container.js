import { connect } from "react-redux";
import { fetchBuggouts } from "../../actions/buggouts";
import BuggoutIndex from "./buggout_index";

const mapState = (state) => {
  debugger;
  return {
    buggouts: Object.values(state.entities.buggouts),
  };
};
const mapDispatch = (dispatch) => ({
  fetchBuggouts: () => dispatch(fetchBuggouts()),
});

export default connect(mapState, mapDispatch)(BuggoutIndex);
