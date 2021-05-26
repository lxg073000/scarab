import { connect } from "react-redux";
import {
  deleteBuggout,
  fetchBuggouts,
  updateBuggout,
} from "../../actions/buggouts";
import BuggoutIndex from "./buggout_index";

const mapState = (state) => {
  return {
    buggouts: Object.values(state.entities.buggouts),
  };
};
const mapDispatch = (dispatch) => ({
  fetchBuggouts: () => dispatch(fetchBuggouts()),
  deleteBuggout: (buggoutID) => dispatch(deleteBuggout(buggoutID)),
  updateBuggout: (buggout) => dispatch(updateBuggout(buggout)),
});

export default connect(mapState, mapDispatch)(BuggoutIndex);
