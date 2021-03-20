export const API_fetchWaypoints = function () {
  debugger;
  return $.ajax({
    method: "GET",
    url: "/api/waypoints",
  });
};
