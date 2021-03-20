import {
  RECEIVE_WAYPOINT_ERRORS,
  CLEAR_WAYPOINT_ERRORS,
} from "../../actions/waypoint";

const waypointErrors = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_WAYPOINT_ERRORS:
      return action.errors;
    case CLEAR_WAYPOINT_ERRORS:
      return [];
    default:
      return oldState;
  }
};

export default waypointErrors;
