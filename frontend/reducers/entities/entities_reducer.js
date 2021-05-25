import { combineReducers } from "redux";
import UsersReducer from "./users_reducer";
import WaypointsReducer from "./waypoints_reducer";
import RoutesReducer from "./routes_reducer";
import BuggoutsReducer from "./buggouts_reducer";

const EntitiesReducer = combineReducers({
  user: UsersReducer,
  waypoints: WaypointsReducer,
  routes: RoutesReducer,
  buggouts: BuggoutsReducer,
});

export default EntitiesReducer;
