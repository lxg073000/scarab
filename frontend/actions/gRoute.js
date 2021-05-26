export const RECEIVE_ROUTES = "RECEIVE_ROUTES";
export const RECEIVE_ROUTE = "RECEIVE_ROUTE";
export const UPDATE_ROUTE = "UPDATE_ROUTE";
export const REMOVE_ROUTE = "REMOVE_ROUTE";
export const RECEIVE_ROUTE_ERRORS = "RECEIVE_ROUTE_ERRORS";
export const CLEAR_ROUTE_ERRORS = "CLEAR_ROUTE_ERRORS";
import {
  API_saveRoute,
  API_fetchCurrentUserRoutes,
  API_fetchRoutes,
  API_fetchRoute,
  API_editRoute,
  API_deleteRoute,
} from "../util/gRoutes";

export const receiveRoutes = (routes) => ({
  type: RECEIVE_ROUTES,
  routes,
});
export const receiveRoute = (route) => ({
  type: RECEIVE_ROUTE,
  route,
});
export const updateRoute = (route) => ({
  type: UPDATE_ROUTE,
  route,
});
export const removeRoute = (route_id) => ({
  type: REMOVE_ROUTE,
  route_id,
});
export const receiveWaypointErrors = (errors) => ({
  type: RECEIVE_ROUTE_ERRORS,
  errors,
});
export const clearRouteErrors = () => ({
  type: CLEAR_ROUTE_ERRORS,
});

export const fetchCurrentUserRoutes = (user_id) =>
  function (dispatch) {
    return API_fetchCurrentUserRoutes(user_id).then(
      (routes) => dispatch(receiveRoutes(routes)),
      (errors) => dispatch(receiveRouteErrors(errors.responseJSON))
    );
  };
export const fetchRoutes = () =>
  function (dispatch) {
    return API_fetchRoutes().then(
      (routes) => dispatch(receiveRoutes(routes)),
      (errors) => dispatch(receiveRouteErrors(errors.responseJSON))
    );
  };
export const fetchRoute = (route_id) =>
  function (dispatch) {
    return API_fetchRoute(route_id).then(
      (route) => dispatch(receiveRoute(route)),
      (errors) => dispatch(receiveRouteErrors(errors.responseJSON))
    );
  };
export const createRoute = (route) =>
  function (dispatch) {
    return API_saveRoute(route).then(
      (route) => dispatch(receiveRoute(route)),
      (errors) => dispatch(receiveRouteErrors(errors.responseJSON))
    );
  };
export const editRoute = (route) =>
  function (dispatch) {
    return API_editRoute(route).then(
      (route) => dispatch(updateRoute(route)),
      (errors) => dispatch(receiveRouteErrors(errors.responseJSON))
    );
  };
export const deleteRoute = (route_id) =>
  function (dispatch) {
    return API_deleteRoute(route_id).then(
      (route) => dispatch(removeRoute(route.id)),
      (errors) => dispatch(receiveRouteErrors(errors.responseJSON))
    );
  };
