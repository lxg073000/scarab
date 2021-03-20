import { combineReducers } from "redux";
import SessionErrorsReducer from "./session_errors_reducer";
import WaypointErrorsReducer from "./waypoint_errors_reducer";

const ErrorsReducer = combineReducers({
  session: SessionErrorsReducer,
  waypoint: WaypointErrorsReducer,
});

export default ErrorsReducer;
