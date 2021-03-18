import {
  RECEIEVE_CURRENT_USER,
  RECEIVE_CURRENT_USER,
} from "../../actions/session";

const userReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, oldState, {
        [action.currentUser.id]: action.currentUser,
      });
    default:
      return oldState;
  }
};

export default userReducer;
