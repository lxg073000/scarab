import {
  RECEIVE_BUGGOUTS,
  RECEIVE_BUGGOUT,
  REMOVE_BUGGOUT,
} from "../../actions/buggouts";

const RoutesReducer = (oldState = {}, action) => {
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
      delete nextState[action.buggout_id.id];
      return nextState;
    default:
      return oldState;
  }
};

export default RoutesReducer;
