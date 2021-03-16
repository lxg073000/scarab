import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session";
import merge from "lodash.merge";

const _nullSession = {
  currentUser: null,
};
const session = (oldState = _nullSession, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      nextState = merge(nextState, { currentUser: action.user });
      return nextState;
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    default:
      return oldState;
  }
};

export default session;
