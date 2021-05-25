export const API_fetchWaypoints = function () {
  return $.ajax({
    method: "GET",
    url: "/api/waypoints",
  });
};
