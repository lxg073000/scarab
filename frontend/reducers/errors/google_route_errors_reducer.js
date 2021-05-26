import { RECEIVE_ROUTE_ERRORS, CLEAR_ROUTE_ERRORS } from "../../actions/gRoute";

const googleRouteErrors = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ROUTE_ERRORS:
      return action.errors;
    case CLEAR_ROUTE_ERRORS:
      return [];
    default:
      return oldState;
  }
};

export default googleRouteErrors;
