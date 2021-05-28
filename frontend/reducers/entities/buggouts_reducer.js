import {
  RECEIVE_BUGGOUTS,
  RECEIVE_BUGGOUT,
  REMOVE_BUGGOUT,
} from "../../actions/buggouts";
import { LOGOUT_CURRENT_USER } from "../../actions/session";

const BuggoutsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_BUGGOUTS:
      nextState = Object.assign({}, nextState, action.buggouts);
      return action.buggouts;
    case RECEIVE_BUGGOUT:
      nextState = Object.assign({}, nextState, {
        [action.buggout.id]: action.buggout,
      });
      return nextState;
    case REMOVE_BUGGOUT:
      delete nextState[action.activity_id.id];
      return nextState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return oldState;
  }
};

export default BuggoutsReducer;
