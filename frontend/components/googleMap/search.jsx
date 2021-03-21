import React from "react";
import RouteMap from "./route_map";
import WaypointIndexCard from "../route/waypoint_index_card";
import WaypointManager from "../../util/waypoint_manager";

const search = ({ waypoints, fetchWaypoints }) => {
  return (
    <div>
      <h1>Routes</h1>
      <RouteMap waypoints={waypoints} WaypointManager={WaypointManager} />
      <WaypointIndexCard
        waypoints={waypoints}
        fetchWaypoints={fetchWaypoints}
      />
    </div>
  );
};

export default search;
