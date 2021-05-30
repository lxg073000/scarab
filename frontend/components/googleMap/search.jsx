import React from "react";
import RouteMap from "./route_map";
import WaypointManager from "../../util/waypoint_manager";
import { withRouter } from "react-router";

const search = ({ waypoints, createRoute, history }) => {
  return (
    <div className="fullscreen-map">
      <RouteMap
        createRoute={createRoute}
        waypoints={waypoints}
        WaypointManager={WaypointManager}
        history={history}
      />
      {/* <WaypointIndexCard
        waypoints={waypoints}
        fetchWaypoints={fetchWaypoints}
      /> */}
    </div>
  );
};

export default withRouter(search);
