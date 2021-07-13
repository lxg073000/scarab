import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
  DISMISS_TUTORIAL,
  TOGGLE_TUTORIAL,
} from "../actions/session";
import merge from "lodash.merge";

const _nullSession = {
  currentUser: null,
  tutorial_dismissed: false,
};
const session = (oldState = _nullSession, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      window.currentUser = action.user;
      nextState = merge(nextState, {
        currentUser: action.user,
        tutorial_dismissed: false,
      });
      return nextState;
    case LOGOUT_CURRENT_USER:
      window.currentUser = null;
      return _nullSession;
    default:
      return oldState;
  }
};

export default session;
