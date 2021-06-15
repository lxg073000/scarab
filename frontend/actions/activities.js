export const RECEIVE_ACTIVITIES = "RECEIVE_ACTIVITIES";
export const RECEIVE_ACTIVITY = "RECEIVE_ACTIVITY";
export const REMOVE_ACTIVITY = "REMOVE_ACTIVITY";
export const RECEIVE_ACTIVITY_ERRORS = "RECEIVE_ACTIVITY_ERRORS";
export const CLEAR_ACTIVITY_ERRORS = "CLEAR_ACTIVITY_ERRORS";

import {
  API_fetchActivities,
  API_createActivity,
  API_updateActivity,
  API_deleteActivity,
} from "../util/activities";

export const receiveActivities = (activities) => ({
  type: RECEIVE_ACTIVITIES,
  activities,
});
export const receiveActivity = (activity) => ({
  type: RECEIVE_ACTIVITY,
  activity,
});
export const removeActivity = (activity_id) => ({
  type: REMOVE_ACTIVITY,
  activity_id,
});
export const receiveActivityErrors = (errors) => ({
  type: RECEIVE_ACTIVITY_ERRORS,
  errors,
});
export const clearactivityErrors = () => ({
  type: CLEAR_activity_ERRORS,
});

export const fetchActivities = () =>
  function (dispatch) {
    return API_fetchActivities().then(
      (activities) => dispatch(receiveActivities(activities)),
      (errors) => dispatch(receiveActivityErrors(errors.responseJSON))
    );
  };

export const createActivity = (activity) =>
  function (dispatch) {
    return API_createActivity(activity).then(
      (activity) => dispatch(receiveActivity(activity)),
      (errors) => dispatch(receiveActivityErrors(errors.responseJSON))
    );
  };
export const updateActivity = (activity) =>
  function (dispatch) {
    return API_updateActivity(activity).then(
      (activity) => dispatch(receiveActivity(activity)),
      (errors) => dispatch(receiveActivityErrors(errors.responseJSON))
    );
  };
export const deleteActivity = (activity_id) =>
  function (dispatch) {
    return API_deleteActivity(activity_id).then(
      (activity) => dispatch(removeActivity(activity)),
      (errors) => dispatch(receiveActivityErrors(errors.responseJSON))
    );
  };
