import { combineReducers } from "redux";
import UsersReducer from "./users_reducer";

const EntitiesReducer = combineReducers({
  user: UsersReducer,
});

export default EntitiesReducer;
