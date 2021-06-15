import {
  RECEIVE_ACTIVITY_ERRORS,
  CLEAR_ACTIVITY_ERRORS,
} from "../../actions/activities";

const ActivityErrors = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ACTIVITY_ERRORS:
      return action.errors;
    case CLEAR_ACTIVITY_ERRORS:
      return [];
    default:
      return oldState;
  }
};

export default ActivityErrors;
