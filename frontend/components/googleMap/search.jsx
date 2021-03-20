import React from "react";
import RouteMap from "./route_map";
import WaypointIndexCard from "../route/waypoint_index_card";

const search = ({ waypoints, fetchWaypoints }) => {
  return (
    <div>
      <h1>Routes</h1>
      <RouteMap waypoints={waypoints} />
      <WaypointIndexCard
        waypoints={waypoints}
        fetchWaypoints={fetchWaypoints}
      />
    </div>
  );
};

export default search;
