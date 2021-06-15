export const API_fetchActivities = () =>
  $.ajax({
    method: "GET",
    url: "/api/activities",
  });
export const API_createActivity = (activity) =>
  $.ajax({
    method: "POST",
    url: `/api/activities`,
    data: activity,
  });
export const API_updateActivity = function (activity) {
  return $.ajax({
    method: "PATCH",
    url: `/api/activities/${activity.activity.id}`,
    data: activity,
  });
};
export const API_deleteActivity = function (activity_id) {
  return $.ajax({
    method: "DELETE",
    url: `/api/activities/${activity_id}`,
  });
};
