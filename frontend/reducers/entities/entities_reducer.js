import { combineReducers } from "redux";
import UsersReducer from "./users_reducer";
import WaypointsReducer from "./waypoints_reducer";

const EntitiesReducer = combineReducers({
  user: UsersReducer,
  waypoints: WaypointsReducer,
});

export default EntitiesReducer;
