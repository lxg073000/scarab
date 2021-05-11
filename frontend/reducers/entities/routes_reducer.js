import {
  RECEIVE_ROUTES,
  RECEIVE_ROUTE,
  UPDATE_ROUTE,
  REMOVE_ROUTE,
} from "../../actions/gRoute";
import { merge } from "lodash.merge";

const RoutesReducer = (oldState = {}, action) => {
  debugger;
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_ROUTES:
      nextState = Object.assign({}, nextState, action.routes);
      return nextState;
    case RECEIVE_ROUTE:
      nextState = Object.assign({}, nextState, {
        [action.route.id]: action.route,
      });
      return nextState;
    case UPDATE_ROUTE:
      nextState = Object.assign((nextState[action.route.id] = action.route));
      return nextState;
    case REMOVE_ROUTE:
      debugger;
      delete nextState[action.route_id];
      return nextState;
    default:
      return oldState;
  }
};

export default RoutesReducer;
