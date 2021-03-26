import React from "react";
import RouteMap from "./route_map";
import WaypointIndexCard from "../route/waypoint_index_card";
import WaypointManager from "../../util/waypoint_manager";

const search = ({ waypoints, createRoute }) => {
  return (
    <div className="fullscreen-map">
      <RouteMap
        createRoute={createRoute}
        waypoints={waypoints}
        WaypointManager={WaypointManager}
      />
      {/* <WaypointIndexCard
        waypoints={waypoints}
        fetchWaypoints={fetchWaypoints}
      /> */}
    </div>
  );
};

export default search;
