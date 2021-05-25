import { RECEIVE_WAYPOINTS } from "../../actions/waypoint";
import { merge } from "lodash.merge";

const WaypointsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_WAYPOINTS:
      nextState = Object.assign(nextState, action.waypoints);
      return nextState;
    default:
      return oldState;
  }
};

export default WaypointsReducer;
