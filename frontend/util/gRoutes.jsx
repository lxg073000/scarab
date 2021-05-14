export const API_saveRoute = function (google_route) {
  debugger;
  console.log({ google_route });
  // console.log(google_route);
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
export const API_fetchRoute = (routeID) =>
  $.ajax({
    method: "GET",
    url: `/api/google_routes/${routeID}`,
  });
export const API_editRoute = (google_route) =>
  $.ajax({
    method: "PATCH",
    url: `/api/google_routes/${route.id}`,
    data: { google_route },
  });
export const API_deleteRoute = (routeID) =>
  $.ajax({
    method: "DELETE",
    url: `/api/google_routes/${routeID}`,
  });
