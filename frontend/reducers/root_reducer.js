import { combineReducers } from "redux";
import users from "./users_reducer";
import session from "./session_reducer";
import errors from "./errors_reducer";

const RootReducer = combineReducers({
  users,
  session,
  errors,
});

export default RootReducer;
