import {
  RECEIVE_BUGGOUT_ERRORS,
  CLEAR_BUGGOUT_ERRORS,
} from "../../actions/buggouts";

const BuggoutErrors = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_BUGGOUT_ERRORS:
      return action.errors;
    case CLEAR_BUGGOUT_ERRORS:
      return [];
    default:
      return oldState;
  }
};

export default BuggoutErrors;
