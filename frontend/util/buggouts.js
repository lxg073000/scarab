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
export const API_updateBuggout = function (buggout) {
  return $.ajax({
    method: "PATCH",
    url: `/api/buggouts/${buggout.buggout.id}`,
    data: buggout,
  });
};
export const API_deleteBuggout = function (activity_id) {
  return $.ajax({
    method: "DELETE",
    url: `/api/buggouts/${activity_id}`,
  });
};
