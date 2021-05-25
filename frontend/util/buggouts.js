export const API_fetchBuggouts = () =>
  $.ajax({
    method: "GET",
    url: "/api/buggouts",
  });
export const API_createBuggout = (buggout) =>
  $.ajax({
    method: "POST",
    url: `/api/buggouts`,
    data: buggout,
  });
export const API_updateBuggout = (buggout) =>
  $.ajax({
    method: "PATCH",
    url: `/api/buggouts/${buggout.id}`,
    data: buggout,
  });
export const API_deleteBuggout = function (buggout_id) {
  return $.ajax({
    method: "DELETE",
    url: `/api/google_routes/${buggout_id}`,
  });
};
