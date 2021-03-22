import React from "react";
import RouteMap from "./route_map";
import WaypointIndexCard from "../route/waypoint_index_card";
import WaypointManager from "../../util/waypoint_manager";

const search = ({ waypoints, fetchWaypoints }) => {
  return (
    <div className="main-container">
      <h1 className="main-headline">Routes</h1>
      <RouteMap
        className="route-main"
        waypoints={waypoints}
        WaypointManager={WaypointManager}
      />
      <WaypointIndexCard
        className="main-content"
        waypoints={waypoints}
        fetchWaypoints={fetchWaypoints}
      />
    </div>
  );
};

export default search;
