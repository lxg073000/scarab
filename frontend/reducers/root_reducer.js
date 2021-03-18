import { combineReducers } from "redux";
import SessionReducer from "./session_reducer";
import ErrorsReducer from "../reducers/errors/errors_reducer";
import EntitiesReducer from "../reducers/entities/entities_reducer";

const RootReducer = combineReducers({
  entities: EntitiesReducer,
  session: SessionReducer,
  errors: ErrorsReducer,
});

export default RootReducer;
