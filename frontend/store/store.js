import { applyMiddleware, createStore } from "redux";
import RootReducer from "../reducers/root_reducer";

const configureStore = (preloadedState = {}) =>
  createStore(RootReducer, preloadedState, applyMiddleware(thunk));

export default configureStore;
