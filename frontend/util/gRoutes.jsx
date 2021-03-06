export const API_saveRoute = function (google_route) {
  return $.ajax({
    method: "POST",
    url: "/api/google_routes",
    data: { google_route },
  });
};
export const API_fetchRoutes = () =>
  $.ajax({
    method: "GET",
    url: "/api/google_routes/",
  });
export const API_fetchCurrentUserRoutes = (user_id) =>
  $.ajax({
    method: "GET",
    url: `/api/users/${user_id}/google_routes/`,
  });
export const API_fetchCurrentUserRoutes_driving = (user_id) =>
  $.ajax({
    method: "GET",
    url: `/api/users/${user_id}/google_routes/?google_route[filter]=DRIVING`,
  });
export const API_fetchCurrentUserRoutes_bicycling = (user_id) =>
  $.ajax({
    method: "GET",
    url: `/api/users/${user_id}/google_routes/?google_route[filter]=BICYCLING`,
  });
export const API_fetchCurrentUserRoutes_walking = (user_id) =>
  $.ajax({
    method: "GET",
    url: `/api/users/${user_id}/google_routes/?google_route[filter]=WALKING`,
  });
export const API_fetchRoute = (routeID) =>
  $.ajax({
    method: "GET",
    url: `/api/google_routes/${routeID}`,
  });
export const API_fetchStaticMap = (x, y, polyline) =>
  $.ajax({
    method: "GET",
    url: `https://maps.googleapis.com/maps/api/staticmap
?size=${x}x${y}&path=weight:3%7Ccolor:orange%7Cenc:${polyline}`,
  });
export const API_editRoute = function (google_route) {
  return $.ajax({
    method: "PATCH",
    url: `/api/google_routes/${google_route.id}`,
    data: { google_route },
  });
};
export const API_deleteRoute = (routeID) =>
  $.ajax({
    method: "DELETE",
    url: `/api/google_routes/${routeID}`,
  });
