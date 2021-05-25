export const RECEIVE_WAYPOINTS = "RECEIVE_WAYPOINTS";
export const RECEIVE_WAYPOINT_ERRORS = "RECEIVE_WAYPOINT_ERRORS";
export const CLEAR_WAYPOINT_ERRORS = "CLEAR_WAYPOINT_ERRORS";
import { API_fetchWaypoints } from "../util/waypoint_utils";

export const receiveWaypoints = (waypoints) => ({
  type: RECEIVE_WAYPOINTS,
  waypoints,
});
export const receiveWaypointErrors = (errors) => ({
  type: RECEIVE_WAYPOINT_ERRORS,
  errors,
});
export const clearWaypointErrors = (errors) => ({
  type: CLEAR_WAYPOINT_ERRORS,
  errors,
});

export const fetchWaypoints = () =>
  function (dispatch) {
    return API_fetchWaypoints().then(
      (waypoints) => dispatch(receiveWaypoints(waypoints)),
      (errors) => dispatch(receiveWaypointErrors(errors.responseJSON))
    );
  };
