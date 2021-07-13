import { TOGGLE_TUTORIAL, LOGOUT_CURRENT_USER } from "../../actions/session";
import merge from "lodash.merge";

const defaultStatus = false;
const tutorialReducer = (oldState = defaultStatus, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);
  switch (action.type) {
    case TOGGLE_TUTORIAL:
      nextState = action.status;
      return nextState;
    case LOGOUT_CURRENT_USER:
      nextState = false;
      return nextState;
    default:
      return oldState;
  }
};

export default tutorialReducer;
