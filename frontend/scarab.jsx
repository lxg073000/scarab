import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";
import { fetchWaypoints } from "./actions/waypoint";

document.addEventListener("DOMContentLoaded", () => {
  let preloadedState = {};
  if (window.currentUser) {
    preloadedState = {
      entities: {
        user: { [window.currentUser.id]: window.currentUser },
      },
      session: {
        currentUser: window.currentUser,
      },
    };
  }
  const root = document.getElementById("root");
  const store = configureStore(preloadedState);
  ReactDOM.render(<Root store={store} />, root);
  window.fetchWaypoints = fetchWaypoints;
  window.store = store;
  window.renderDIR = WaypointManager.renderSupplyRoute;
});
