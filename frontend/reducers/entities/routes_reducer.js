import {
  RECEIVE_ROUTES,
  RECEIVE_ROUTE,
  REMOVE_ROUTE,
} from "../../actions/gRoute";
import { LOGOUT_CURRENT_USER } from "../../actions/session";

const RoutesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_ROUTES:
      nextState = Object.assign({}, nextState, action.routes);
      return action.routes;
    case RECEIVE_ROUTE:
      nextState = Object.assign({}, nextState, {
        [action.route.id]: action.route,
      });
    case REMOVE_ROUTE:
      delete nextState[action.route_id];
      return nextState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return oldState;
  }
};

export default RoutesReducer;
