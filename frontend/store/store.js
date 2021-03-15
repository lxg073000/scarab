import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import RootReducer from "../store/store";

const configureStore = (preloadedState = {}) =>
  createStore(RootReducer, preloadedState, applyMiddleware(thunk, logger));

export default configureStore;
