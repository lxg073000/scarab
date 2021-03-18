import {
  RECEIVE_CURRENT_USER,
  RECEIVE_SESSION_ERRORS,
  CLEAR_SESSION_ERRORS,
} from "../../actions/session";

const sessionErrors = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return [];
    case CLEAR_SESSION_ERRORS:
      return [];
    default:
      return oldState;
  }
};

export default sessionErrors;
